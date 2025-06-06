'use server'

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash"

})

export const generateAIInsights = async (industry) => {
    const prompt = `
    Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
    {
      "salaryRanges": [
        { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
      ],
      "growthRate": number,
      "demandLevel": "HIGH" | "MEDIUM" | "LOW",
      "topSkills": ["skill1", "skill2"],
      "marketOutlook": "POSITIVE" | "NEUTRAL" | "NEGATIVE",
      "keyTrends": ["trend1", "trend2"],
      "recommendedSkills": ["skill1", "skill2"]
    }
    
    IMPORTANT: Return ONLY the JSON. No additional text, notes, or markdown formatting.
    Include at least 15 common roles for salary ranges.
    Growth rate should be a percentage.
    Include at least 7 skills and trends.
  `;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

    return JSON.parse(cleanedText);
}

export const getIndustryInsights = async () => {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized")

    const user = await db.user.findUnique({
        where: {
            clerkUserId: userId
        }
    })

    if (!user) throw new Error("User not found")

    // Step 1: Check if record already exists
    let industryInsights = await db.industryInsights.findUnique({
        where: { industry: user.industry }
    });
    // Step 2: If not, create it
    if (!industryInsights) {
        const insights = await generateAIInsights(user.industry);
        industryInsights = await db.industryInsights.create({
            data: {
                industry: user.industry,
                ...insights,
                nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
        });
    }

    return industryInsights;
};

































































































































































// import { db } from "@/lib/prisma";
// import { auth } from "@clerk/nextjs/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash"
// });

// export const generateAiInsights = async (industry) => {
//   const prompt = `
//   Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
//   {
//     "salaryRanges": [
//       { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
//     ],
//     "growthRate": number,
//     "demandLevel": "High" | "Medium" | "Low",
//     "topSkills": ["skill1", "skill2"],
//     "marketOutlook": "Positive" | "Neutral" | "Negative",
//     "keyTrends": ["trend1", "trend2"],
//     "recommendedSkills": ["skill1", "skill2"]
//   }

//   IMPORTANT: Return ONLY the JSON. No extra text or markdown.
//   `;

//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   const text = response.text();

//   const cleanedText = text.replace(/```json/g, '').replace(/```/g, '');
//   const json = JSON.parse(cleanedText);

//   // 💡 Fix enums & values
//   json.demandLevel = (json.demandLevel || "").toUpperCase();
//   json.marketOutlook = (json.marketOutlook || "").toUpperCase();

//   if (typeof json.growthRate === "string") {
//     json.growthRate = parseFloat(json.growthRate.replace("%", ""));
//   }

//   const validDemand = ["HIGH", "MEDIUM", "LOW"];
//   const validOutlook = ["POSITIVE", "NEUTRAL", "NEGATIVE"];

//   json.demandLevel = validDemand.includes(json.demandLevel) ? json.demandLevel : "MEDIUM";
//   json.marketOutlook = validOutlook.includes(json.marketOutlook) ? json.marketOutlook : "NEUTRAL";

//   return json;
// };

// export const getIndustryInsights = async (industry) => {

//     const { userId } = await auth();
//     const user = await db.user.findUnique({
//         where: { clerkUserId: userId },
//          include: { industryInsights: true }
//     });

//     if (!user) throw new Error("User not found");

//     if (!user.industryInsights) {
//         const insights = await generateAiInsights(user.industry);

//         const industryInsights = await db.industryInsights.create({
//             data: {
//                 industry: user.industry,
//                 ...insights,
//                 nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),

//             }
//         });
//         return industryInsights;
//     }
//     return user.industryInsights;
// }