import Head from 'next/head';
import AboutSection from '../components/glass/AboutSection';
import { ContactSection, GlassFooter } from '../components/glass/ContactFooter';
import ExperienceSection from '../components/glass/ExperienceSection';
import GlassHero from '../components/glass/GlassHero';
import GlassNavbar from '../components/glass/GlassNavbar';
import ProjectsSection from '../components/glass/ProjectsSection';
import ServicesSection from '../components/glass/ServicesSection';
import SideRail from '../components/glass/SideRail';
import { ProcessSection, ToolsSection } from '../components/glass/ToolsProcess';
import useT from '../i18n/useT';

interface GlassPageProps {
  toggleTheme: () => void;
  theme: { title: 'light' | 'dark' };
}

export default function GlassPage({ toggleTheme, theme }: GlassPageProps) {
  const t = useT();

  return (
    <div className="glass-theme font-body relative min-h-screen overflow-x-clip bg-[var(--g-bg)] selection:bg-[var(--g-accent-2)] selection:text-white">
      <Head>
        <title>{t.meta.glassTitle}</title>
        <meta name="description" content={t.meta.glassDescription} />
      </Head>
      <div className="cyber-backdrop" aria-hidden="true" />
      <GlassNavbar
        darkMode={theme.title === 'dark'}
        onToggleTheme={toggleTheme}
      />
      <SideRail />
      <main className="relative z-10">
        <GlassHero />
        <AboutSection />
        <ServicesSection />
        <ExperienceSection />
        <ProjectsSection />
        <ToolsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <GlassFooter />
    </div>
  );
}
