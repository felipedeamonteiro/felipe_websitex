import Image from 'next/image';
import darkThemeImage from '@public/blue_night_sky.jpg';
import lightThemeImage from '@public/white_landscape.jpg';

const stars = [
  { right: 0, duration: 3.5, delay: 0 },
  { right: 120, duration: 4.5, delay: 0.8 },
  { right: 280, duration: 3.8, delay: 1.6 },
  { right: 480, duration: 5, delay: 0.4 },
  { right: 720, duration: 4.2, delay: 2.1 },
  { right: 920, duration: 5.4, delay: 1.1 },
];

export default function IntroContainer() {
  return (
    <section
      id="section-home"
      className="relative -mt-20 flex min-h-svh scroll-mt-0 flex-col items-center justify-center overflow-hidden px-6 py-28 text-center"
    >
      <Image
        src={lightThemeImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover dark:hidden"
      />
      <Image
        src={darkThemeImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 hidden object-cover dark:block"
      />
      <div className="absolute inset-0 -z-10 bg-white/10 dark:bg-[#06072a]/30" />

      <div className="shooting-stars hidden dark:block" aria-hidden="true">
        {stars.map((star) => (
          <span
            key={star.right}
            style={{
              right: star.right,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl">
        <p className="hero-title font-display text-[clamp(1.4rem,4vw,3.1rem)] font-light text-[var(--accent)] dark:text-white">
          Felipe de Alcântara Monteiro
        </p>
        <h1 className="hero-title mt-8 text-[clamp(2.25rem,6vw,4.75rem)] leading-[1.15] font-bold text-[var(--accent)] dark:text-white">
          ENGENHEIRO FULL-STACK
          <span className="mt-3 block text-[0.7em]">
            REACT, NODE &amp; REACT NATIVE
          </span>
        </h1>
      </div>
    </section>
  );
}
