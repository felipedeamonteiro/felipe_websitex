import { PointMaterial, Points } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { inSphere } from 'maath/random';
import { Suspense, useRef, useState } from 'react';
import type { Points as ThreePoints } from 'three';
import { useMediaQuery } from './useCanvasSupport';

function Stars({ animate }: { animate: boolean }) {
  const ref = useRef<ThreePoints>(null);
  // Length must be divisible by 3, otherwise maath produces NaN positions.
  const [sphere] = useState(
    () => inSphere(new Float32Array(4500), { radius: 1.2 }) as Float32Array,
  );

  useFrame((_, delta) => {
    if (!animate || !ref.current) return;
    ref.current.rotation.x -= delta / 12;
    ref.current.rotation.y -= delta / 18;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#a78bfa"
          size={0.0022}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

/** Fixed rotating star field behind the whole /cyber page. */
export default function StarsCanvas() {
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)');

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        frameloop={reduced ? 'demand' : 'always'}
      >
        <Suspense fallback={null}>
          <Stars animate={!reduced} />
        </Suspense>
      </Canvas>
    </div>
  );
}
