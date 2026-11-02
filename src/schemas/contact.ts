import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Informe seu nome.')
    .max(100, 'O nome deve ter no máximo 100 caracteres.'),
  email: z
    .string()
    .trim()
    .email('Informe um e-mail válido.')
    .max(254, 'O e-mail deve ter no máximo 254 caracteres.'),
  subject: z
    .string()
    .trim()
    .min(2, 'Informe o assunto.')
    .max(120, 'O assunto deve ter no máximo 120 caracteres.'),
  message: z
    .string()
    .trim()
    .min(10, 'A mensagem deve ter pelo menos 10 caracteres.')
    .max(5000, 'A mensagem deve ter no máximo 5000 caracteres.'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
