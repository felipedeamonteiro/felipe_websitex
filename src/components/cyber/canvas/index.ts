import dynamic from 'next/dynamic';

/** Client-only canvases: three.js never runs on the server and stays in the /cyber chunk. */
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
