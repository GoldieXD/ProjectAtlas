import { z } from "zod";

export const holdingInputSchema = z.object({
  symbol: z.string().trim().min(1).max(12).transform((value) => value.toUpperCase()),
  companyName: z.string().trim().min(1).max(120),
  quantity: z.coerce.number().positive(),
  averageCost: z.coerce.number().nonnegative(),
  sector: z.string().trim().min(1).max(80),
  assetType: z.enum(["STOCK", "ETF", "FUND", "CRYPTO", "OTHER"]).default("STOCK")
});

export const assistantQuestionSchema = z.object({
  question: z.string().trim().min(3).max(1000)
});

export const searchSchema = z.object({
  q: z.string().trim().min(1).max(40)
});
