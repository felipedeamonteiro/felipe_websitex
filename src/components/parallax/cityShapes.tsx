/**
 * Procedural SVG pieces for the neon city. A seeded PRNG keeps the output
 * identical on server and client (no hydration mismatch).
 */

export function mulberry32(seed: number) {
  let state = seed;
  return () => {
    state += 0x6d2b79f5;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const VIEW_W = 1600;

interface SkylineProps {
  seed: number;
  height: number;
  minH: number;
  maxH: number;
  minW: number;
  maxW: number;
  fill: string;
  edge: string;
  windowColors: string[];
  windowChance: number;
  antennas?: boolean;
  className?: string;
}

/** A row of buildings anchored to the bottom of a 1600-wide viewBox. */
export function Skyline({
  seed,
  height,
  minH,
  maxH,
  minW,
  maxW,
  fill,
  edge,
  windowColors,
  windowChance,
  antennas = false,
  className,
}: SkylineProps) {
  const rand = mulberry32(seed);
  const buildings: { x: number; w: number; h: number }[] = [];
  let x = -40;
  while (x < VIEW_W + 40) {
    const w = minW + rand() * (maxW - minW);
    const h = minH + rand() * (maxH - minH);
    buildings.push({ x, w, h });
    x += w + rand() * 6;
  }

  const windows: { x: number; y: number; c: string }[] = [];
  const spires: { x: number; y: number; h: number }[] = [];
  for (const b of buildings) {
    const cols = Math.max(1, Math.floor((b.w - 8) / 9));
    const rows = Math.floor((b.h - 14) / 12);
    for (let r = 0; r < rows; r += 1) {
      for (let c = 0; c < cols; c += 1) {
        if (rand() < windowChance) {
          windows.push({
            x: b.x + 6 + c * 9,
            y: height - b.h + 10 + r * 12,
            c: windowColors[Math.floor(rand() * windowColors.length)],
          });
        }
      }
    }
    if (antennas && rand() > 0.72) {
      spires.push({ x: b.x + b.w / 2, y: height - b.h, h: 20 + rand() * 50 });
    }
  }

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${height}`}
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
    >
      {spires.map((s) => (
        <g key={`${s.x}-${s.y}`}>
          <line
            x1={s.x}
            x2={s.x}
            y1={s.y}
            y2={s.y - s.h}
            stroke={edge}
            strokeWidth={2}
          />
          <circle
            cx={s.x}
            cy={s.y - s.h}
            r={2.5}
            fill="#ff2bd6"
            className="animate-pulse"
          />
        </g>
      ))}
      {buildings.map((b) => (
        <rect
          key={`${b.x}-${b.w}`}
          x={b.x}
          y={height - b.h}
          width={b.w}
          height={b.h}
          fill={fill}
          stroke={edge}
          strokeWidth={1}
        />
      ))}
      {windows.map((w) => (
        <rect
          key={`${w.x}-${w.y}`}
          x={w.x}
          y={w.y}
          width={4}
          height={6}
          fill={w.c}
        />
      ))}
    </svg>
  );
}

/** Deterministic star field. */
export function StarField({ className }: { className?: string }) {
  const rand = mulberry32(7);
  const stars = Array.from({ length: 160 }, () => ({
    x: rand() * VIEW_W,
    y: rand() * 600,
    r: rand() * 1.4 + 0.3,
    o: rand() * 0.7 + 0.3,
  }));

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} 600`}
      preserveAspectRatio="xMidYMin slice"
      className={className}
      aria-hidden="true"
    >
      {stars.map((s) => (
        <circle
          key={`${s.x}-${s.y}`}
          cx={s.x}
          cy={s.y}
          r={s.r}
          fill="#fff"
          opacity={s.o}
        />
      ))}
    </svg>
  );
}

/** Foreground towers with glowing neon signs. */
export function NeonTowers({
  signA,
  signB,
  className,
}: {
  signA: string;
  signB: string;
  className?: string;
}) {
  const H = 900;
  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${H}`}
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <filter id="neon-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="tower" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#140b33" />
          <stop offset="1" stopColor="#05030f" />
        </linearGradient>
      </defs>

      {/* Left tower with vertical kanji sign */}
      <rect
        x={40}
        y={180}
        width={260}
        height={H - 180}
        fill="url(#tower)"
        stroke="#2a1a5c"
      />
      <rect
        x={300}
        y={330}
        width={150}
        height={H - 330}
        fill="url(#tower)"
        stroke="#2a1a5c"
      />
      <g filter="url(#neon-blur)">
        <rect
          x={230}
          y={240}
          width={54}
          height={signA.length * 64 + 20}
          rx={6}
          fill="none"
          stroke="#ff2bd6"
          strokeWidth={3}
        />
        {Array.from(signA).map((char, index) => (
          <text
            key={`${char}-${index}`}
            x={257}
            y={300 + index * 64}
            textAnchor="middle"
            fontSize={46}
            fontWeight={700}
            fill="#ff7be6"
            fontFamily="var(--font-noto-jp), sans-serif"
          >
            {char}
          </text>
        ))}
      </g>

      {/* Right tower with horizontal CODE sign */}
      <rect
        x={1180}
        y={140}
        width={300}
        height={H - 140}
        fill="url(#tower)"
        stroke="#2a1a5c"
      />
      <rect
        x={1060}
        y={380}
        width={130}
        height={H - 380}
        fill="url(#tower)"
        stroke="#2a1a5c"
      />
      <g filter="url(#neon-blur)">
        <rect
          x={1205}
          y={210}
          width={250}
          height={84}
          rx={8}
          fill="none"
          stroke="#22d3ee"
          strokeWidth={3}
        />
        <text
          x={1330}
          y={268}
          textAnchor="middle"
          fontSize={52}
          fontWeight={800}
          letterSpacing={10}
          fill="#7cf0ff"
          fontFamily="var(--font-orbitron), sans-serif"
        >
          {signB}
        </text>
      </g>

      {/* Lit window strips */}
      {Array.from({ length: 14 }, (_, row) => (
        <g key={row} opacity={0.85}>
          <rect
            x={70}
            y={420 + row * 32}
            width={120}
            height={4}
            fill={row % 3 ? '#3b2a7a' : '#22d3ee'}
          />
          <rect
            x={1210}
            y={340 + row * 34}
            width={180}
            height={4}
            fill={row % 4 ? '#3b2a7a' : '#ff2bd6'}
          />
        </g>
      ))}
    </svg>
  );
}
