import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(8),
  name: z.string().trim().min(1).max(80)
});

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(8)
});

export async function registerUser(rawInput: unknown) {
  const input = registerSchema.parse(rawInput);

  return {
    user: {
      id: "demo-user",
      email: input.email,
      name: input.name
    },
    nextStep: "verify-email"
  };
}

export async function loginUser(rawInput: unknown) {
  const input = loginSchema.parse(rawInput);

  return {
    user: {
      id: "demo-user",
      email: input.email
    },
    session: {
      mode: "demo",
      expiresInSeconds: 60 * 60
    }
  };
}
