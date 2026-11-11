import type { CSSProperties } from 'react';
import {
  FiMonitor,
  FiServer,
  FiShoppingCart,
  FiSmartphone,
} from 'react-icons/fi';
import useT from '../../i18n/useT';
import SectionHeading from '../shared/SectionHeading';

const icons = [FiMonitor, FiSmartphone, FiServer, FiShoppingCart];
const glows = ['#22d3ee', '#b46bff', '#ff2bd6', '#0ef462'];

export default function ServicesSection() {
  const t = useT();

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="services-title"
          label={t.services.label}
          title={t.services.title}
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((service, index) => {
            const Icon = icons[index % icons.length];
            const glow = glows[index % glows.length];
            return (
              <li
                key={service.title}
                style={{ '--glow': glow } as CSSProperties}
                className="glass glass-border group hover:neon-glow rounded-2xl p-6 transition duration-300 [--ring-from:var(--glow)] hover:-translate-y-1.5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--g-border)] bg-[var(--glow)]/10 text-2xl text-[var(--glow)] shadow-[0_0_24px_-6px_var(--glow)] transition group-hover:scale-110">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="font-display mt-6 text-base font-bold tracking-wide uppercase">
                  {service.title}
                </h3>
                <p className="font-body mt-3 text-sm leading-relaxed text-[var(--g-muted)]">
                  {service.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
