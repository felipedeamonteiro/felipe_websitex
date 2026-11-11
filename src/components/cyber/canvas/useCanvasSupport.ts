import { useEffect, useState } from 'react';

/** null while checking, then whether WebGL is available. */
export function useWebGLSupport(): boolean | null {
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      try {
        const canvas = document.createElement('canvas');
        setSupported(
          Boolean(canvas.getContext('webgl2') ?? canvas.getContext('webgl')),
        );
      } catch {
        setSupported(false);
      }
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return supported;
}

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = (): void => setMatches(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [query]);

  return matches;
}
