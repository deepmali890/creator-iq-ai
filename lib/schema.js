import { z } from "zod";

export const onboardingSchema = z.object({
    industry: z.string({
        required_error: "Industry is required",
    }),
    subIndustry: z.string({
        required_error: "Subindustry is required",
    }),
    bio: z.string().max(500).optional(),
    experience: z
        .string()
        .transform((value) => parseInt(value, 10))
        .pipe(z.number().min(0, "Exprince must be at least 0 Years").max(50, "Exprince cannot exceed 50 years")),
    skills: z.string().transform((value) =>
        value ? value.split(",").map((skill) => skill.trim()).filter(Boolean) : undefined
    )
})