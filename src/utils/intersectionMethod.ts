import { useEffect, useState, type RefObject } from 'react';

export default function useInView<T extends Element>(
  element: RefObject<T | null>,
  rootMargin = '0px',
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = element.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin, threshold: 0.15 },
    );

    observer.observe(currentElement);
    return () => observer.disconnect();
  }, [element, rootMargin]);

  return isVisible;
}
