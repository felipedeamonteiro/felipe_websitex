import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react';
import { useRef, type PointerEvent, type ReactNode } from 'react';
import { FiChevronsDown } from 'react-icons/fi';
import useT from '../../i18n/useT';
import ShootingStars from '../shared/ShootingStars';
import { NeonTowers, Skyline, StarField } from './cityShapes';

interface LayerProps {
  progress: MotionValue<number>;
  pointerX: MotionValue<number>;
  /** Vertical travel (px) over the whole scroll. Negative = moves up. */
  travel: number;
  /** Horizontal pointer parallax strength (px). */
  depth: number;
  className?: string;
  children: ReactNode;
}

function Layer({
  progress,
  pointerX,
  travel,
  depth,
  className,
  children,
}: LayerProps) {
  const reduce = useReducedMotion();
  const y = useTransform(progress, [0, 1], [0, reduce ? 0 : travel]);
  const x = useTransform(pointerX, (value) => (reduce ? 0 : value * depth));

  return (
    <motion.div
      aria-hidden="true"
      style={{ y, x }}
      className={`pointer-events-none absolute will-change-transform ${className ?? ''}`}
    >
      {children}
    </motion.div>
  );
}

/** Sticky 250vh neon-city hero; each layer moves at its own speed. */
export default function ParallaxScene() {
  const t = useT();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  const rawPointer = useMotionValue(0);
  const pointerX = useSpring(rawPointer, { stiffness: 60, damping: 20 });

  const titleY = useTransform(progress, [0, 1], [0, reduce ? 0 : -220]);
  const titleOpacity = useTransform(progress, [0, 0.5], [1, 0]);
  const titleScale = useTransform(progress, [0, 1], [1, reduce ? 1 : 0.86]);
  const moonScale = useTransform(progress, [0, 1], [1, reduce ? 1 : 1.25]);
  const hintOpacity = useTransform(progress, [0, 0.12], [1, 0]);

  const onPointerMove = (event: PointerEvent<HTMLDivElement>): void => {
    if (event.pointerType !== 'mouse') return;
    const { innerWidth } = window;
    rawPointer.set((event.clientX / innerWidth - 0.5) * 2);
  };

  return (
    <section
      ref={ref}
      aria-labelledby="parallax-title"
      className="relative h-[250vh]"
    >
      <div
        onPointerMove={onPointerMove}
        className="sticky top-0 h-svh overflow-hidden bg-linear-to-b from-[#05040f] via-[#120a35] to-[#3a0f5e]"
      >
        <Layer
          progress={progress}
          pointerX={pointerX}
          travel={30}
          depth={-6}
          className="inset-x-[-5%] top-0 h-[70%]"
        >
          <StarField className="h-full w-full" />
        </Layer>
        <ShootingStars />

        {/* Moon */}
        <Layer
          progress={progress}
          pointerX={pointerX}
          travel={90}
          depth={-10}
          className="top-[10%] left-1/2 -translate-x-1/2"
        >
          <motion.div
            style={{ scale: moonScale }}
            className="h-[min(56vw,30rem)] w-[min(56vw,30rem)] rounded-full bg-[radial-gradient(circle_at_35%_35%,#e9d5ff_0%,#a855f7_38%,#4f3ccf_72%,#3a0f5e_100%)] opacity-90 shadow-[0_0_120px_30px_rgb(168_85_247/0.35)]"
          >
            <div className="h-full w-full rounded-full bg-[repeating-linear-gradient(180deg,transparent_0_14px,rgb(5_4_15/0.35)_14px_18px)] [mask-image:linear-gradient(180deg,transparent_45%,#000_75%)]" />
          </motion.div>
        </Layer>

        {/* Far skyline */}
        <Layer
          progress={progress}
          pointerX={pointerX}
          travel={180}
          depth={-14}
          className="inset-x-[-5%] bottom-[18%] h-[48%]"
        >
          <Skyline
            seed={11}
            height={500}
            minH={120}
            maxH={430}
            minW={40}
            maxW={110}
            fill="#24124d"
            edge="#33206a"
            windowColors={['#4b3a8f', '#6d4bd1']}
            windowChance={0.12}
            className="h-full w-full opacity-80"
          />
        </Layer>

        {/* Title sits between the far and near layers, so towers rise over it. */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity, scale: titleScale }}
          className="absolute inset-x-0 top-[16%] z-10 px-6 text-center"
        >
          <p className="glass inline-block rounded-md px-3 py-1.5 font-mono text-xs tracking-[0.35em] text-[var(--color-neon-cyan)] uppercase sm:text-sm">
            {t.parallax.kicker}
          </p>
          <h1
            id="parallax-title"
            className="font-display mx-auto mt-5 max-w-5xl text-[clamp(2.4rem,7.5vw,6.5rem)] leading-[0.95] font-black text-balance uppercase"
          >
            <span className="text-chrome">{t.parallax.title}</span>
          </h1>
          <p className="font-body mt-6 text-lg text-[var(--g-muted)] sm:text-xl">
            {t.parallax.subtitle}
          </p>
        </motion.div>

        {/* Mid skyline */}
        <Layer
          progress={progress}
          pointerX={pointerX}
          travel={360}
          depth={-22}
          className="inset-x-[-6%] -bottom-[6%] z-20 h-[52%]"
        >
          <Skyline
            seed={42}
            height={520}
            minH={160}
            maxH={480}
            minW={60}
            maxW={150}
            fill="#150b33"
            edge="#2a1a5c"
            windowColors={[
              '#22d3ee',
              '#a855f7',
              '#b46bff',
              '#3b2a7a',
              '#3b2a7a',
            ]}
            windowChance={0.22}
            antennas
            className="h-full w-full"
          />
        </Layer>

        {/* Near towers with neon signs */}
        <Layer
          progress={progress}
          pointerX={pointerX}
          travel={620}
          depth={-34}
          className="inset-x-[-8%] -bottom-[30%] z-30 h-[95%]"
        >
          <NeonTowers
            signA={t.parallax.signA}
            signB={t.parallax.signB}
            className="h-full w-full"
          />
        </Layer>

        {/* Synthwave neon grid floor */}
        <Layer
          progress={progress}
          pointerX={pointerX}
          travel={820}
          depth={-40}
          className="inset-x-[-20%] -bottom-[4%] z-40 h-[24%] [perspective:420px]"
        >
          <div className="h-full w-full origin-bottom [transform:rotateX(62deg)] bg-[#07061a] bg-[linear-gradient(rgb(168_85_247/0.55)_2px,transparent_2px),linear-gradient(90deg,rgb(34_211_238/0.45)_2px,transparent_2px)] [mask-image:linear-gradient(180deg,transparent,#000_35%)] bg-[size:72px_72px] motion-safe:animate-[grid-flow_2.4s_linear_infinite]" />
        </Layer>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-24 bg-linear-to-t from-[#07061a] to-transparent"
        />

        <motion.p
          style={{ opacity: hintOpacity }}
          className="absolute inset-x-0 bottom-20 z-50 flex flex-col items-center gap-1 font-mono text-xs tracking-[0.3em] text-[var(--g-muted)] uppercase"
        >
          {t.parallax.scroll}
          <FiChevronsDown
            aria-hidden="true"
            className="animate-bounce text-lg text-[var(--color-neon-cyan)]"
          />
        </motion.p>
      </div>
    </section>
  );
}
