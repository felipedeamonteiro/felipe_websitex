import { motion } from 'motion/react';
import Image from 'next/image';
import {
  FiArrowUpRight,
  FiMonitor,
  FiServer,
  FiShoppingCart,
  FiSmartphone,
} from 'react-icons/fi';
import { experiences, profile, projects, tools } from '../../content/profile';
import useT from '../../i18n/useT';
import ContactForm from '../shared/ContactForm';
import { ComputersCanvas, EarthCanvas, TechBallsCanvas } from './canvas';
import { fadeIn, slideIn, textVariant } from './motion';
import SectionWrapper from './SectionWrapper';
import useTilt from './useTilt';

const tagColors = ['text-[#22d3ee]', 'text-[#ff4fa3]', 'text-[#b46bff]'];

function Heading({
  label,
  title,
  id,
}: {
  label: string;
  title: string;
  id: string;
}) {
  return (
    <motion.div variants={textVariant()}>
      <p className="font-mono text-sm tracking-[0.25em] text-[var(--g-muted)] uppercase sm:text-base">
        {label}
      </p>
      <h2
        id={id}
        className="font-display xs:text-[40px] mt-2 text-[30px] font-black text-white sm:text-[50px] md:text-[60px]"
      >
        {title}
        <span className="text-[var(--color-neon-magenta)]">.</span>
      </h2>
    </motion.div>
  );
}

export function CyberHero({ webgl }: { webgl: boolean | null }) {
  const t = useT();

  return (
    <section
      id="home"
      aria-labelledby="cyber-title"
      className="relative mx-auto h-svh min-h-[40rem] w-full"
    >
      <div className="pointer-events-none absolute inset-x-0 top-[110px] z-10 mx-auto flex max-w-7xl flex-row items-start gap-5 px-6 sm:px-16">
        <div aria-hidden="true" className="mt-5 flex flex-col items-center">
          <div className="h-5 w-5 rounded-full bg-[var(--color-neon-magenta)] shadow-[0_0_20px_var(--color-neon-magenta)]" />
          <div className="h-40 w-1 bg-linear-to-b from-[var(--color-neon-magenta)] to-transparent sm:h-80" />
        </div>
        <div>
          <h1
            id="cyber-title"
            className="font-display xs:text-[50px] mt-2 text-[40px] leading-tight font-black text-white sm:text-[60px] lg:text-[80px] lg:leading-[98px]"
          >
            {t.cyber.kicker}{' '}
            <span
              className="glitch text-[var(--color-neon-magenta)]"
              data-text={profile.firstName}
            >
              {profile.firstName}
            </span>
          </h1>
          <p className="font-body xs:text-[20px] mt-2 max-w-xl text-[16px] font-medium text-[#dfd9ff] sm:text-[26px] lg:text-[30px] lg:leading-[40px]">
            {t.cyber.role}
          </p>
        </div>
      </div>

      {webgl === false ? (
        <p className="absolute inset-x-6 bottom-40 text-center font-mono text-sm text-[var(--g-muted)]">
          {t.cyber.noWebgl}
        </p>
      ) : (
        <div className="absolute inset-0">
          {webgl && <ComputersCanvas loadingLabel={t.cyber.loading} />}
        </div>
      )}

      <p className="pointer-events-none absolute right-6 bottom-36 z-10 hidden font-mono text-[11px] tracking-[0.25em] text-[var(--g-muted)] uppercase sm:block">
        ⟲ {t.cyber.drag}
      </p>

      <div className="xs:bottom-16 absolute bottom-24 z-10 flex w-full items-center justify-center">
        <a
          href="#about"
          aria-label={t.nav.about}
          className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-[var(--g-muted)] p-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-neon-cyan)]"
        >
          <motion.span
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
            className="mb-1 h-3 w-3 rounded-full bg-[var(--color-neon-cyan)] shadow-[0_0_10px_var(--color-neon-cyan)]"
          />
        </a>
      </div>
    </section>
  );
}

const serviceIcons = [FiMonitor, FiSmartphone, FiServer, FiShoppingCart];

function ServiceCard({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  const tilt = useTilt<HTMLDivElement>(14, 1.04);
  const Icon = serviceIcons[index % serviceIcons.length];

  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="xs:w-[250px] w-full"
    >
      <div
        {...tilt}
        className="rounded-[20px] bg-linear-to-br from-[var(--color-neon-cyan)] via-[var(--color-neon-violet)] to-[var(--color-neon-magenta)] p-[1px] shadow-[0_35px_120px_-15px_#3a0f5e] transition-transform duration-200 ease-out will-change-transform"
      >
        <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-[#0e0b2a] bg-[radial-gradient(circle_at_var(--mx,50%)_var(--my,0%),rgb(255_43_214/0.18),transparent_60%)] px-8 py-5 text-center">
          <Icon
            aria-hidden="true"
            className="h-14 w-14 text-[var(--color-neon-cyan)] drop-shadow-[0_0_12px_var(--color-neon-cyan)]"
          />
          <h3 className="font-display text-[18px] font-bold text-white">
            {title}
          </h3>
          <p className="font-body text-sm leading-relaxed text-[var(--g-muted)]">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function CyberAbout() {
  const t = useT();

  return (
    <SectionWrapper id="about" labelledBy="cyber-about">
      <Heading
        id="cyber-about"
        label={t.cyber.introLabel}
        title={t.cyber.introTitle}
      />
      <motion.p
        variants={fadeIn('', 'tween', 0.1, 1)}
        className="font-body mt-4 max-w-3xl text-[17px] leading-[30px] text-[var(--g-muted)]"
      >
        {t.about.paragraphs.join(' ')}
      </motion.p>
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {t.services.items.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export function CyberExperience() {
  const t = useT();
  const entries = experiences
    .map((data, index) => ({ data, text: t.experience.items[index], index }))
    .reverse();

  return (
    <SectionWrapper id="experience" labelledBy="cyber-exp">
      <div className="text-center">
        <Heading
          id="cyber-exp"
          label={t.experience.subtitle}
          title={t.experience.title}
        />
      </div>
      <ol className="relative mt-20 before:absolute before:top-0 before:bottom-0 before:left-6 before:w-1 before:bg-linear-to-b before:from-[var(--color-neon-magenta)] before:via-[var(--color-neon-violet)] before:to-[var(--color-neon-cyan)] before:content-[''] md:before:left-1/2 md:before:-translate-x-1/2">
        {entries.map(({ data, text, index }, position) => {
          const right = position % 2 === 1;
          return (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: right ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative mb-12 grid grid-cols-[3rem_1fr] gap-6 md:grid-cols-[1fr_4rem_1fr] md:gap-8"
            >
              <span className="relative z-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-[var(--color-neon-cyan)] bg-white p-1.5 shadow-[0_0_18px_var(--color-neon-cyan)] md:col-start-2 md:mx-auto md:h-16 md:w-16">
                <Image
                  src={data.logo}
                  alt={data.company}
                  className="h-full w-full object-contain"
                  sizes="64px"
                />
              </span>
              <p
                className={`hidden self-center font-mono text-sm tracking-widest text-[var(--g-muted)] uppercase md:row-start-1 md:block ${
                  right ? 'md:col-start-1 md:text-right' : 'md:col-start-3'
                }`}
              >
                {text.period}
              </p>
              <article
                className={`relative rounded-xl border-b-4 border-[var(--color-neon-violet)] bg-[#1d1836] p-6 shadow-[0_20px_60px_-25px_#000] md:row-start-1 ${
                  right ? 'md:col-start-3' : 'md:col-start-1'
                }`}
              >
                <p className="font-mono text-xs tracking-widest text-[var(--color-neon-cyan)] uppercase md:hidden">
                  {text.period}
                </p>
                <h3 className="font-display text-[20px] font-bold text-white">
                  {data.company}
                </h3>
                <p className="font-body mt-3 text-[15px] leading-relaxed text-[var(--g-muted)]">
                  {text.description}
                </p>
              </article>
            </motion.li>
          );
        })}
      </ol>
    </SectionWrapper>
  );
}

export function CyberTech({ webgl }: { webgl: boolean | null }) {
  const t = useT();
  const balls = tools
    .filter((tool) => tool.ball)
    .map((tool) => ({ name: tool.name, icon: tool.ball as string }));

  return (
    <SectionWrapper id="tech" labelledBy="cyber-tech">
      <Heading
        id="cyber-tech"
        label={t.cyber.techLabel}
        title={t.cyber.techTitle}
      />
      <div className="mt-10">
        {webgl ? (
          <TechBallsCanvas techs={balls} loadingLabel={t.cyber.loading} />
        ) : (
          <ul className="flex flex-wrap gap-6">
            {tools.map((tool) => (
              <li
                key={tool.name}
                className="flex items-center gap-2 font-mono text-sm text-[var(--g-muted)]"
              >
                <tool.icon
                  aria-hidden="true"
                  style={{ color: tool.color }}
                  className="text-2xl"
                />
                {tool.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </SectionWrapper>
  );
}

function ProjectTiltCard({ index }: { index: number }) {
  const t = useT();
  const tilt = useTilt<HTMLDivElement>(10, 1.02);
  const data = projects[index];
  const text = t.projects.items[index];

  return (
    <motion.li
      variants={fadeIn('up', 'spring', index * 0.3, 0.75)}
      className="w-full sm:w-[360px]"
    >
      <div
        {...tilt}
        className="glass-border relative w-full rounded-2xl bg-[#151030] p-5 transition-transform duration-200 ease-out [--ring-from:var(--color-neon-magenta)] [--ring-to:var(--color-neon-cyan)]"
      >
        <div className="relative h-[230px] w-full overflow-hidden rounded-2xl">
          <Image
            src={data.image}
            alt={text.alt}
            fill
            sizes="360px"
            className="object-cover object-top"
          />
          {data.href && (
            <a
              href={data.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.projects.open}: ${text.title}`}
              className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-[#434343] to-black text-white shadow-[0_0_14px_var(--color-neon-magenta)] transition hover:scale-110 focus-visible:outline-2 focus-visible:outline-[var(--color-neon-cyan)]"
            >
              <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
        <h3 className="font-display mt-5 text-[22px] font-bold text-white">
          {text.title}
        </h3>
        <p className="font-body mt-2 text-[14px] leading-relaxed text-[var(--g-muted)]">
          {text.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {data.tags.map((tag, tagIndex) => (
            <li
              key={tag}
              className={`font-mono text-[14px] ${tagColors[tagIndex % tagColors.length]}`}
            >
              #{tag.toLowerCase()}
            </li>
          ))}
        </ul>
      </div>
    </motion.li>
  );
}

export function CyberProjects() {
  const t = useT();

  return (
    <SectionWrapper id="projects" labelledBy="cyber-projects">
      <Heading
        id="cyber-projects"
        label={t.projects.label}
        title={t.projects.title}
      />
      <motion.p
        variants={fadeIn('', 'tween', 0.1, 1)}
        className="font-body mt-3 max-w-3xl text-[17px] leading-[30px] text-[var(--g-muted)]"
      >
        {t.projects.subtitle}
      </motion.p>
      <ul className="mt-16 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectTiltCard key={project.image.src} index={index} />
        ))}
      </ul>
    </SectionWrapper>
  );
}

export function CyberContact({ webgl }: { webgl: boolean | null }) {
  const t = useT();

  return (
    <SectionWrapper
      id="contact"
      labelledBy="cyber-contact"
      className="overflow-hidden"
    >
      <div className="flex flex-col-reverse gap-10 xl:flex-row">
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="glass flex-[0.75] rounded-2xl p-6 sm:p-8"
        >
          <p className="font-mono text-sm tracking-[0.25em] text-[var(--g-muted)] uppercase">
            {t.contact.label}
          </p>
          <h2
            id="cyber-contact"
            className="font-display mt-2 mb-8 text-[30px] font-black text-white sm:text-[50px]"
          >
            {t.cyber.contactTitle}
            <span className="text-[var(--color-neon-magenta)]">.</span>
          </h2>
          <ContactForm />
        </motion.div>
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="xl:flex-1"
        >
          {webgl && <EarthCanvas loadingLabel={t.cyber.loading} />}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export function CyberFooter() {
  const t = useT();

  return (
    <footer className="relative z-10 border-t border-[var(--g-border)] px-6 pt-8 pb-24 text-center font-mono text-[11px] leading-6 tracking-wide text-[var(--g-muted)]">
      <p>
        © {new Date().getFullYear()} {profile.fullName}. {t.footer.rights}
      </p>
      <p className="mt-2">
        {t.footer.modelCredits}{' '}
        <a
          className="underline hover:text-[var(--color-neon-cyan)]"
          href="https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66"
          target="_blank"
          rel="noopener noreferrer"
        >
          “Gaming Desktop PC” by Yolala1232
        </a>{' '}
        ·{' '}
        <a
          className="underline hover:text-[var(--color-neon-cyan)]"
          href="https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70"
          target="_blank"
          rel="noopener noreferrer"
        >
          “Stylized planet” by cmzw
        </a>{' '}
        ·{' '}
        <a
          className="underline hover:text-[var(--color-neon-cyan)]"
          href="http://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC BY 4.0
        </a>
      </p>
    </footer>
  );
}
