import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { contactSchema, type ContactFormData } from '../../schemas/contact';
import Button from '../Buttons/Button';
import ButtonNeon3 from '../Buttons/ButtonNeon3';
import Input from '../Input';
import TextArea from '../TextArea';

interface Feedback {
  type: 'success' | 'error';
  message: string;
}

export default function ContactMe() {
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });

  const handleFormSubmit = async (data: ContactFormData): Promise<void> => {
    setFeedback(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(
          result.message ?? 'Não foi possível enviar a mensagem.',
        );
      }

      setFeedback({
        type: 'success',
        message: result.message ?? 'Mensagem enviada com sucesso!',
      });
      reset();
    } catch (error) {
      setFeedback({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Não foi possível enviar a mensagem. Tente novamente.',
      });
    }
  };

  return (
    <section
      id="section-contato"
      className="bg-[var(--section-alternate)] px-5 py-24 text-[var(--text)] sm:px-8"
    >
      <div className="mx-auto max-w-2xl">
        <header className="text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Contato
          </h2>
          <p className="font-body mt-5 text-lg text-[var(--muted)] italic">
            Deixe sua mensagem para batermos um papo
          </p>
        </header>
        <form
          noValidate
          onSubmit={handleSubmit(handleFormSubmit)}
          className="mt-12 space-y-5"
        >
          <Input
            label="Nome"
            autoComplete="name"
            error={errors.name}
            {...register('name')}
          />
          <Input
            label="E-mail"
            type="email"
            autoComplete="email"
            error={errors.email}
            {...register('email')}
          />
          <Input
            label="Assunto"
            error={errors.subject}
            {...register('subject')}
          />
          <TextArea
            label="Mensagem"
            error={errors.message}
            {...register('message')}
          />
          <div className="pt-2 dark:hidden">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </Button>
          </div>
          <div className="hidden pt-2 dark:block">
            <ButtonNeon3 type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </ButtonNeon3>
          </div>
          <div aria-live="polite" className="min-h-6">
            {feedback && (
              <p
                className={`text-center text-sm font-bold ${
                  feedback.type === 'success'
                    ? 'text-green-700 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`}
              >
                {feedback.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
