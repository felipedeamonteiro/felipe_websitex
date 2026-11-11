import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useId, useMemo, useState } from 'react';
import {
  useForm,
  type FieldError,
  type UseFormRegisterReturn,
} from 'react-hook-form';
import { FiSend } from 'react-icons/fi';
import { makeContactSchema } from '../../i18n/contactSchema';
import useT from '../../i18n/useT';
import type { ContactFormData } from '../../schemas/contact';
import ButtonNeon3 from '../Buttons/ButtonNeon3';

interface Feedback {
  type: 'success' | 'error';
  message: string;
}

const fieldClass =
  'peer w-full rounded-lg border border-[var(--g-border)] bg-[var(--g-surface)] px-4 pt-6 pb-2 text-base text-[var(--g-text)] placeholder-transparent outline-none transition focus:border-[var(--g-accent-2)] focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--g-accent-2)_25%,transparent),0_0_24px_-6px_var(--g-accent-2)] aria-invalid:border-red-400';

const labelClass =
  'font-mono pointer-events-none absolute top-2 left-4 text-[0.68rem] tracking-[0.18em] text-[var(--g-muted)] uppercase transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[0.68rem] peer-focus:tracking-[0.18em] peer-focus:uppercase peer-focus:text-[var(--g-accent-2)]';

interface FieldProps {
  label: string;
  error?: FieldError;
  registration: UseFormRegisterReturn;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
  className?: string;
}

function Field({
  label,
  error,
  registration,
  type = 'text',
  autoComplete,
  multiline = false,
  className,
}: FieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const shared = {
    id,
    placeholder: label,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errorId : undefined,
    ...registration,
  };

  return (
    <div className={clsx('relative', className)}>
      {multiline ? (
        <textarea
          rows={5}
          className={clsx(fieldClass, 'resize-y')}
          {...shared}
        />
      ) : (
        <input
          type={type}
          autoComplete={autoComplete}
          className={fieldClass}
          {...shared}
        />
      )}
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {error?.message && (
        <p
          id={errorId}
          className="mt-1.5 text-sm text-red-500 dark:text-red-300"
        >
          {error.message}
        </p>
      )}
    </div>
  );
}

/** Glass contact form. Posts to the existing /api/contact route. */
export default function ContactForm({ className }: { className?: string }) {
  const t = useT();
  const schema = useMemo(() => makeContactSchema(t.contact.errors), [t]);
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

  const onSubmit = async (data: ContactFormData): Promise<void> => {
    setFeedback(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error(t.contact.error);
      setFeedback({ type: 'success', message: t.contact.success });
      reset();
    } catch {
      setFeedback({ type: 'error', message: t.contact.error });
    }
  };

  const label = isSubmitting ? t.contact.sending : t.contact.send;

  return (
    <form
      noValidate
      aria-label={t.contact.formLabel}
      onSubmit={handleSubmit(onSubmit)}
      className={clsx('grid gap-4 sm:grid-cols-2', className)}
    >
      <Field
        label={t.contact.fields.name}
        autoComplete="name"
        error={errors.name}
        registration={register('name')}
      />
      <Field
        label={t.contact.fields.email}
        type="email"
        autoComplete="email"
        error={errors.email}
        registration={register('email')}
      />
      <Field
        label={t.contact.fields.subject}
        error={errors.subject}
        registration={register('subject')}
        className="sm:col-span-2"
      />
      <Field
        label={t.contact.fields.message}
        error={errors.message}
        registration={register('message')}
        multiline
        className="sm:col-span-2"
      />
      <div className="sm:col-span-2">
        <div className="dark:hidden">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-[var(--g-accent-2)] to-[var(--g-accent)] px-5 py-3 font-bold text-white shadow-[0_10px_30px_-10px_var(--g-accent-2)] transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--g-accent)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {label} <FiSend aria-hidden="true" />
          </button>
        </div>
        <div className="hidden dark:block">
          <ButtonNeon3
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 border-[var(--g-accent-2)]! shadow-[0_0_16px_var(--g-accent-2)]! hover:bg-[var(--g-accent-2)]! hover:text-white!"
          >
            {label} <FiSend aria-hidden="true" />
          </ButtonNeon3>
        </div>
      </div>
      <div aria-live="polite" className="min-h-6 sm:col-span-2">
        {feedback && (
          <p
            className={clsx(
              'text-center text-sm font-bold',
              feedback.type === 'success'
                ? 'text-green-600 dark:text-green-400'
                : 'text-red-600 dark:text-red-400',
            )}
          >
            {feedback.message}
          </p>
        )}
      </div>
    </form>
  );
}
