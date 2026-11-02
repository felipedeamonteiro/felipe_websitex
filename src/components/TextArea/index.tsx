import clsx from 'clsx';
import { forwardRef, useId, type TextareaHTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  error?: FieldError;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea({ label, name, error, className, id, ...props }, ref) {
    const generatedId = useId();
    const textAreaId = id ?? generatedId;
    const errorId = `${textAreaId}-error`;

    return (
      <div>
        <label
          htmlFor={textAreaId}
          className="mb-2 block text-base font-bold text-[var(--text)]"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={textAreaId}
          name={name}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={clsx(
            'min-h-44 w-full resize-y rounded-md border bg-white px-3 py-2 font-sans text-base text-slate-900 placeholder:text-slate-500 focus:border-[var(--accent)] focus:outline-2 focus:outline-offset-1 focus:outline-[var(--accent)] disabled:cursor-not-allowed disabled:bg-slate-200',
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
  },
);

export default TextArea;
