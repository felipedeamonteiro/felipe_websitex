import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import Link from 'next/link';
import { useRef, type CSSProperties } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { localePath } from '../../i18n/config';
import useT, { useLocale } from '../../i18n/useT';
import NeonButtonReal from '../Buttons/NeonButtonReal';

const accents = ['#22d3ee', '#ff2bd6', '#b46bff'];

function Chapter({
  index,
  label,
  title,
  text,
}: {
  index: number;
  label: string;
  title: string;
  text: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  // Big background numeral drifts slower than the card.
  const numeralY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [120, -120],
  );
  const left = index % 2 === 0;
  const accent = accents[index % accents.length];

  return (
    <li
      ref={ref}
      className={`relative flex ${left ? 'justify-start' : 'justify-end'}`}
    >
      <motion.span
        aria-hidden="true"
        style={{ y: numeralY, WebkitTextStroke: `1px ${accent}` }}
        className={`font-display pointer-events-none absolute -top-10 text-[clamp(8rem,22vw,16rem)] leading-none font-black text-transparent opacity-30 select-none ${
          left ? 'right-0 md:right-[10%]' : 'left-0 md:left-[10%]'
        }`}
      >
        {String(index + 1).padStart(2, '0')}
      </motion.span>
      <motion.article
        initial={{
          opacity: 0,
          y: reduce ? 0 : 60,
          x: reduce ? 0 : left ? -40 : 40,
        }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ '--ring-from': accent } as CSSProperties}
        className="glass glass-border hud-corners relative w-full max-w-xl rounded-2xl p-7 [--hud-color:var(--ring-from)] sm:p-9"
      >
        <p
          className="font-mono text-xs tracking-[0.25em] uppercase"
          style={{ color: accent }}
        >
          {label}
        </p>
        <h2 className="font-display mt-3 text-2xl leading-tight font-black uppercase sm:text-3xl">
          {title}
        </h2>
        <p className="font-body mt-4 text-base leading-relaxed text-[var(--g-muted)] sm:text-lg">
          {text}
        </p>
      </motion.article>
    </li>
  );
}

export default function ParallaxChapters() {
  const t = useT();
  const locale = useLocale();

  return (
    <section className="relative z-10 px-5 pt-10 pb-32 sm:px-8">
      <ol className="mx-auto flex max-w-6xl flex-col gap-28 sm:gap-36">
        {t.parallax.chapters.map((chapter, index) => (
          <Chapter key={chapter.label} index={index} {...chapter} />
        ))}
      </ol>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7 }}
        className="glass glass-border mx-auto mt-40 max-w-3xl rounded-3xl p-8 text-center sm:p-12"
      >
        <h2 className="font-display text-neon-gradient text-3xl font-black uppercase sm:text-5xl">
          {t.parallax.ctaTitle}
        </h2>
        <p className="font-body mt-4 text-lg text-[var(--g-muted)]">
          {t.parallax.ctaText}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <NeonButtonReal
            href={localePath(locale, '/glass')}
            buttonColorHex="#ff2bd6"
          >
            {t.parallax.ctaGlass}
          </NeonButtonReal>
          <Link
            href="/glass#contact"
            className="group inline-flex items-center gap-2 rounded-lg border border-[var(--g-border)] px-6 py-2.5 text-sm font-bold tracking-wider uppercase transition hover:border-[var(--color-neon-cyan)] hover:text-[var(--color-neon-cyan)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-neon-cyan)]"
          >
            {t.parallax.ctaContact}
            <FiArrowRight
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
