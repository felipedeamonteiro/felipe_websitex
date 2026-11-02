import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { contactSchema } from '../../schemas/contact';

function escapeHtml(value: string): string {
  const entities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };

  return value.replace(/[&<>"']/g, (character) => entities[character]);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>,
): Promise<void> {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ message: 'Método não permitido.' });
    return;
  }

  const parsedBody = contactSchema.safeParse(req.body);

  if (!parsedBody.success) {
    res.status(400).json({
      message:
        parsedBody.error.issues[0]?.message ??
        'Revise os campos e tente novamente.',
    });
    return;
  }

  const { USER_MAIL, MAIL_PASSWORD, DESTINATION_MAIL } = process.env;

  if (!USER_MAIL || !MAIL_PASSWORD || !DESTINATION_MAIL) {
    console.error('Contact email environment variables are not configured.');
    res.status(503).json({
      message: 'O envio de mensagens está temporariamente indisponível.',
    });
    return;
  }

  const { name, email, subject, message } = parsedBody.data;

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { user: USER_MAIL, pass: MAIL_PASSWORD },
    });

    await transporter.sendMail({
      from: `Portfólio <${USER_MAIL}>`,
      replyTo: email,
      to: DESTINATION_MAIL,
      subject: `[Portfólio] ${subject}`,
      text: `Mensagem de: ${name}\nE-mail: ${email}\nAssunto: ${subject}\n\n${message}`,
      html: `<div>
        <h2>Mensagem de: ${escapeHtml(name)}</h2>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Assunto:</strong> ${escapeHtml(subject)}</p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      </div>`,
    });

    res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error('Failed to send contact message:', error);
    res.status(502).json({
      message:
        'Não foi possível enviar a mensagem. Tente novamente mais tarde.',
    });
  }
}
