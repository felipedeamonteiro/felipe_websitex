import {
  Grid,
  OrbitControls,
  PerspectiveCamera,
  Preload,
  useGLTF,
} from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Suspense, useEffect } from 'react';
import CanvasLoader from './CanvasLoader';
import { useMediaQuery } from './useCanvasSupport';

const MODEL = '/models/desktop_pc.glb';

/** Without OrbitControls (touch screens) the camera must be aimed manually. */
function AimCamera() {
  const camera = useThree((state) => state.camera);
  const invalidate = useThree((state) => state.invalidate);
  useEffect(() => {
    camera.lookAt(0, 0, 0);
    invalidate();
  }, [camera, invalidate]);
  return null;
}

function Computers({ isMobile }: { isMobile: boolean }) {
  const { scene } = useGLTF(MODEL);

  return (
    <group>
      <hemisphereLight intensity={0.6} groundColor="#05040f" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1800}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[2, 1, 3]} color="#ff2bd6" intensity={60} />
      <pointLight position={[-3, 0.5, -2]} color="#22d3ee" intensity={60} />
      <primitive
        object={scene}
        scale={isMobile ? 0.62 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
      <Grid
        position={[0, -3.26, 0]}
        args={[40, 40]}
        cellSize={0.6}
        cellThickness={0.6}
        cellColor="#7a1f8f"
        sectionSize={3}
        sectionThickness={1.2}
        sectionColor="#22d3ee"
        fadeDistance={34}
        fadeStrength={1.4}
        infiniteGrid
      />
    </group>
  );
}

/** Desktop-PC model from the 3D repo on a neon grid, with bloom. */
export default function ComputersCanvas({
  loadingLabel,
}: {
  loadingLabel: string;
}) {
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <div className="relative h-full w-full">
      <CanvasLoader label={loadingLabel} />
      <Canvas
        frameloop="demand"
        shadows="percentage"
        dpr={[1, 2]}
        className="!touch-pan-y"
      >
        <PerspectiveCamera
          makeDefault
          position={isMobile ? [24, 4, 6] : [20, 3, 5]}
          fov={isMobile ? 34 : 25}
        />
        <Suspense fallback={null}>
          {/* No drag on touch screens so the page can still be scrolled. */}
          {isMobile && <AimCamera />}
          {!isMobile && (
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          )}
          <Computers isMobile={isMobile} />
          <EffectComposer>
            <Bloom mipmapBlur luminanceThreshold={0.55} intensity={0.8} />
          </EffectComposer>
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}

useGLTF.preload(MODEL);
