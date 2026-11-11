import { useProgress } from '@react-three/drei';

/**
 * DOM overlay loader (outside <Canvas>). drei's <Html> creates its own React
 * root, and React 19 errors when that root unmounts during a Suspense swap.
 */
export default function CanvasLoader({ label }: { label: string }) {
  const { active, progress } = useProgress();
  if (!active) return null;

  return (
    <div
      role="status"
      className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 font-mono text-xs tracking-[0.2em] text-[var(--color-neon-cyan)] uppercase"
    >
      <span className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--color-neon-violet)] border-t-transparent shadow-[0_0_20px_var(--color-neon-violet)]" />
      <span>
        {label} {progress.toFixed(0)}%
      </span>
    </div>
  );
}
