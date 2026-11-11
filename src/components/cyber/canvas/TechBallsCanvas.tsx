import { Decal, Float, Preload, useTexture } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import useInView from '../../../utils/intersectionMethod';
import CanvasLoader from './CanvasLoader';

interface Tech {
  name: string;
  icon: string;
}

function Ball({
  tech,
  position,
  radius,
}: {
  tech: Tech;
  position: [number, number, number];
  radius: number;
}) {
  const [decal] = useTexture([tech.icon]);

  return (
    <group position={position}>
      <Float speed={1.75} rotationIntensity={1} floatIntensity={1.6}>
        <mesh castShadow receiveShadow scale={radius}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#f3eeff"
            emissive="#3a0f5e"
            emissiveIntensity={0.25}
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
          />
        </mesh>
      </Float>
    </group>
  );
}

/** All balls share ONE canvas (separate canvases would hit the WebGL context limit). */
function BallGrid({ techs }: { techs: Tech[] }) {
  const { width, height } = useThree((state) => state.viewport);
  const cols = width < 7 ? 3 : 4;
  const rows = Math.ceil(techs.length / cols);
  const cellW = width / cols;
  const cellH = height / rows;
  const radius = Math.min(cellW * 0.26, cellH * 0.32, 1.15);

  return (
    <>
      {techs.map((tech, index) => {
        const col = index % cols;
        const row = Math.floor(index / cols);
        const inRow = Math.min(cols, techs.length - row * cols);
        const offset = ((cols - inRow) * cellW) / 2;
        const x = -width / 2 + cellW * (col + 0.5) + offset;
        const y = height / 2 - cellH * (row + 0.5);
        return (
          <Ball
            key={tech.name}
            tech={tech}
            position={[x, y, 0]}
            radius={radius}
          />
        );
      })}
    </>
  );
}

export default function TechBallsCanvas({
  techs,
  loadingLabel,
}: {
  techs: Tech[];
  loadingLabel: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, '100px');
  const rows = Math.ceil(techs.length / 4);

  return (
    <div ref={ref}>
      <div
        className="relative h-[24rem] w-full sm:h-[22rem]"
        style={{ minHeight: rows * 130 }}
      >
        <CanvasLoader label={loadingLabel} />
        <Canvas
          frameloop={inView ? 'always' : 'never'}
          dpr={[1, 2]}
          camera={{ position: [0, 0, 12], fov: 32 }}
          className="!touch-pan-y"
        >
          <ambientLight intensity={1.2} />
          <directionalLight position={[2, 3, 5]} intensity={2.4} />
          <pointLight position={[-6, -2, 4]} color="#a855f7" intensity={40} />
          <pointLight position={[6, 2, 4]} color="#22d3ee" intensity={40} />
          <Suspense fallback={null}>
            <BallGrid techs={techs} />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
      <ul className="mt-6 flex flex-wrap justify-center gap-2">
        {techs.map((tech) => (
          <li
            key={tech.name}
            className="rounded-md border border-[var(--g-border)] bg-[var(--g-surface)] px-3 py-1 font-mono text-xs tracking-wider text-[var(--g-muted)]"
          >
            {tech.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
