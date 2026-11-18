import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { makeContactSchema } from '../../i18n/contactSchema';
import useT from '../../i18n/useT';
import type { ContactFormData } from '../../schemas/contact';
import Button from '../Buttons/Button';
import ButtonNeon3 from '../Buttons/ButtonNeon3';
import Input from '../Input';
import TextArea from '../TextArea';

interface Feedback {
  type: 'success' | 'error';
  message: string;
}

export default function ContactMe() {
  const t = useT();
  const schema = useMemo(
    () => makeContactSchema(t.contact.errors),
    [t.contact.errors],
  );
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
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
      // The API answers in Portuguese, so the UI uses the localized messages.
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      setFeedback({ type: 'success', message: t.contact.success });
      reset();
    } catch {
      setFeedback({ type: 'error', message: t.contact.error });
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
            {t.original.contactTitle}
          </h2>
          <p className="font-body mt-5 text-lg text-[var(--muted)] italic">
            {t.original.contactSubtitle}
          </p>
        </header>
        <form
          noValidate
          onSubmit={handleSubmit(handleFormSubmit)}
          className="mt-12 space-y-5"
        >
          <Input
            label={t.contact.fields.name}
            autoComplete="name"
            error={errors.name}
            {...register('name')}
          />
          <Input
            label={t.contact.fields.email}
            type="email"
            autoComplete="email"
            error={errors.email}
            {...register('email')}
          />
          <Input
            label={t.contact.fields.subject}
            error={errors.subject}
            {...register('subject')}
          />
          <TextArea
            label={t.contact.fields.message}
            error={errors.message}
            {...register('message')}
          />
          <div className="pt-2 dark:hidden">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? t.contact.sending : t.original.send}
            </Button>
          </div>
          <div className="hidden pt-2 dark:block">
            <ButtonNeon3 type="submit" disabled={isSubmitting}>
              {isSubmitting ? t.contact.sending : t.original.send}
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
