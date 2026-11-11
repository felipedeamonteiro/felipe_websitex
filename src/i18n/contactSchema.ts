import { z } from 'zod';
import type { Dictionary } from './dictionaries/pt-BR';

/**
 * Same rules as src/schemas/contact.ts (which the API route validates with),
 * but with messages in the active language.
 */
export function makeContactSchema(errors: Dictionary['contact']['errors']) {
  return z.object({
    name: z.string().trim().min(2, errors.nameMin).max(100, errors.nameMax),
    email: z
      .string()
      .trim()
      .email(errors.emailInvalid)
      .max(254, errors.emailMax),
    subject: z
      .string()
      .trim()
      .min(2, errors.subjectMin)
      .max(120, errors.subjectMax),
    message: z
      .string()
      .trim()
      .min(10, errors.messageMin)
      .max(5000, errors.messageMax),
  });
}
