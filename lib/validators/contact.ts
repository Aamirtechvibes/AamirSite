import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please add your name.").max(80, "Keep the name under 80 characters."),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(20, "Add a little more detail so I can understand the opportunity.")
    .max(2_000, "Keep the message under 2000 characters."),
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactPayload = z.infer<typeof contactSchema>;
