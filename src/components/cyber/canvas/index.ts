import dynamic from 'next/dynamic';

/**
 * Client-only canvases: three.js never runs on the server and is split into
 * its own chunk, fetched only when a canvas first renders (on / that happens
 * when the section scrolls near; see utils/useOnceInView).
 */
export const ComputersCanvas = dynamic(() => import('./ComputersCanvas'), {
  ssr: false,
});
export const StarsCanvas = dynamic(() => import('./StarsCanvas'), {
  ssr: false,
});
export const TechBallsCanvas = dynamic(() => import('./TechBallsCanvas'), {
  ssr: false,
});
export const EarthCanvas = dynamic(() => import('./EarthCanvas'), {
  ssr: false,
});
