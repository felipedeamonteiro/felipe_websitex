import clsx from 'clsx';
import { forwardRef, useId, type InputHTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: FieldError;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, name, error, className, id, ...props },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;

  return (
    <div>
      <label
        htmlFor={inputId}
        className="mb-2 block text-base font-bold text-[var(--text)]"
      >
        {label}
      </label>
      <input
        ref={ref}
        id={inputId}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={clsx(
          'min-h-12 w-full rounded-md border bg-white px-3 py-2 font-sans text-base text-slate-900 placeholder:text-slate-500 focus:border-[var(--accent)] focus:outline-2 focus:outline-offset-1 focus:outline-[var(--accent)] disabled:cursor-not-allowed disabled:bg-slate-200',
          error ? 'border-red-500' : 'border-[var(--input-border)]',
          className,
        )}
        {...props}
      />
      {error?.message && (
        <p id={errorId} role="alert" className="mt-1.5 text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
});

export default Input;
