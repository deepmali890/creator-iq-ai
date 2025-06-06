import { db } from "../prisma";
import { inngest } from "./client";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export const generateIndustryInsights = inngest.createFunction(
  { name: "Generate Industry Insights" },
  { cron: "0 0 * * 0" }, // Every Sunday at midnight
  async ({ step }) => {
    console.log("🚀 Step Debug:", step);

    const industries = await step.run("Fetch Industries", async () => {
      return await db.industryInsights.findMany({
        select: { industry: true }, // [{ industry: "finance-banking" }, ...]
      });
    });

    for (const { industry } of industries) {
      const prompt = `
Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
{
  "salaryRanges": [
    { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
  ],
  "growthRate": number,
  "demandLevel": "HIGH" | "MEDIUM" | "LOW",
  "topSkills": ["skill1", "skill2", "skill3", "skill4", "skill5"],
  "marketOutlook": "POSITIVE" | "NEUTRAL" | "NEGATIVE",
  "keyTrends": ["trend1", "trend2", "trend3", "trend4", "trend5"],
  "recommendedSkills": ["skill1", "skill2", "skill3", "skill4", "skill5"]
}
IMPORTANT: Return ONLY the JSON. No additional text, notes, or markdown formatting.
Include at least 5 roles, 5 topSkills, and 5 keyTrends.
`;

      const res = await step.ai.wrap("gemini", async (input) => {
        return await model.generateContent(input);
      }, prompt);

      const text = res.response.candidates[0]?.content?.parts?.[0]?.text || "";

      const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

      let insights;
      try {
        insights = JSON.parse(cleanedText);
      } catch (e) {
        console.error(`❌ JSON parse failed for industry: ${industry}`);
        console.error("Raw Gemini Output:", cleanedText);
        continue; // Skip to next industry
      }

      await step.run(`Update ${industry} Insights`, async () => {
        await db.industryInsights.update({
          where: { industry },
          data: {
            ...insights,
            lastUpdated: new Date(),
            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days later
          },
        });
        console.log(`✅ Updated insights for: ${industry}`);
      });
    }
  }
);
