import { useEffect, useState, type RefObject } from 'react';

/**
 * Turns true the first time the element comes within `rootMargin` of the
 * viewport and then stays true. Used to mount heavy client-only content
 * (three.js canvases) only when the visitor is about to reach it.
 */
export default function useOnceInView<T extends Element>(
  element: RefObject<T | null>,
  rootMargin = '400px 0px',
): boolean {
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const current = element.current;
    if (!current || seen) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(current);
    return () => observer.disconnect();
  }, [element, rootMargin, seen]);

  return seen;
}
