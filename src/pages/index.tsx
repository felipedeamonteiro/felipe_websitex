import Head from 'next/head';
import { useWebGLSupport } from '../components/cyber/canvas/useCanvasSupport';
import AboutSection from '../components/glass/AboutSection';
import { ContactSection, GlassFooter } from '../components/glass/ContactFooter';
import ExperienceSection from '../components/glass/ExperienceSection';
import GlassHero from '../components/glass/GlassHero';
import GlassNavbar from '../components/glass/GlassNavbar';
import ProjectsSection from '../components/glass/ProjectsSection';
import ServicesSection from '../components/glass/ServicesSection';
import SideRail from '../components/glass/SideRail';
import { ProcessSection } from '../components/glass/ToolsProcess';
import WorkstationSection from '../components/home/WorkstationSection';
import ParallaxScene from '../components/parallax/ParallaxScene';
import useT from '../i18n/useT';

interface HomeProps {
  toggleTheme: () => void;
  theme: { title: 'light' | 'dark' };
}

/**
 * Main portfolio: the neon-glass layout (/glass) plus three showcase pieces
 * from the alternative layouts: the 3D workstation and globe (/cyber) and the
 * neon-city parallax (/parallax), used as the bridge into the career timeline.
 */
export default function Home({ toggleTheme, theme }: HomeProps) {
  const t = useT();
  const webgl = useWebGLSupport();

  return (
    <div className="glass-theme font-body relative min-h-screen overflow-x-clip bg-(--g-bg) selection:bg-(--g-accent-2) selection:text-white">
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
        <WorkstationSection webgl={webgl} />
        {/* The city is a night scene in both themes, so it uses the dark tokens. */}
        <div className="glass-theme dark">
          <ParallaxScene headingLevel="h2" blend id="city" />
        </div>
        <ExperienceSection />
        <ProjectsSection />
        <ProcessSection />
        <ContactSection globe={webgl} />
      </main>
      <GlassFooter credits />
    </div>
  );
}
