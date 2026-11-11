import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import useInView from '../../../utils/intersectionMethod';
import CanvasLoader from './CanvasLoader';

const MODEL = '/models/planet.glb';

function Earth() {
  const { scene } = useGLTF(MODEL);
  return <primitive object={scene} scale={2.5} position-y={0} rotation-y={0} />;
}

export default function EarthCanvas({
  loadingLabel,
}: {
  loadingLabel: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, '100px');

  return (
    <div
      ref={ref}
      className="relative h-[22rem] w-full sm:h-[30rem] lg:h-full lg:min-h-[32rem]"
    >
      <CanvasLoader label={loadingLabel} />
      <Canvas
        frameloop={inView ? 'always' : 'never'}
        dpr={[1, 2]}
        camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
        className="!touch-pan-y"
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[-4, 2, 4]} color="#a855f7" intensity={30} />
        <Suspense fallback={null}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
