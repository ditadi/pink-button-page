
import { z } from 'zod';

// Button schema for the pink button
export const buttonSchema = z.object({
  id: z.number(),
  text: z.string(),
  color: z.string(),
  enabled: z.boolean(),
  created_at: z.coerce.date()
});

export type Button = z.infer<typeof buttonSchema>;

// Input schema for creating buttons
export const createButtonInputSchema = z.object({
  text: z.string(),
  color: z.string(),
  enabled: z.boolean().default(true)
});

export type CreateButtonInput = z.infer<typeof createButtonInputSchema>;
