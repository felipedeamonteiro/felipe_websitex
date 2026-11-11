import { useCallback, useRef, type PointerEvent } from 'react';

/**
 * Small pointer tilt (replaces react-tilt, which doesn't support React 19).
 * Mouse only; respects prefers-reduced-motion.
 */
export default function useTilt<T extends HTMLElement>(
  maxDeg = 12,
  scale = 1.03,
) {
  const ref = useRef<T>(null);

  const onPointerMove = useCallback(
    (event: PointerEvent<T>) => {
      const el = ref.current;
      if (!el || event.pointerType !== 'mouse') return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${(-py * maxDeg).toFixed(2)}deg) rotateY(${(px * maxDeg).toFixed(2)}deg) scale(${scale})`;
      el.style.setProperty('--mx', `${((px + 0.5) * 100).toFixed(1)}%`);
      el.style.setProperty('--my', `${((py + 0.5) * 100).toFixed(1)}%`);
    },
    [maxDeg, scale],
  );

  const onPointerLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = '';
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}
