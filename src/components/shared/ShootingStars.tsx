import clsx from 'clsx';

const stars = Array.from({ length: 10 }, (_, index) => index);

/** Reuses the original `.shooting-stars` CSS from globals.css. */
export default function ShootingStars({ className }: { className?: string }) {
  return (
    <div className={clsx('shooting-stars', className)} aria-hidden="true">
      {stars.map((star) => (
        <span key={star} />
      ))}
    </div>
  );
}
