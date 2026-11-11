import Head from 'next/head';
import { StarsCanvas } from '../components/cyber/canvas';
import { useWebGLSupport } from '../components/cyber/canvas/useCanvasSupport';
import {
  CyberAbout,
  CyberContact,
  CyberExperience,
  CyberFooter,
  CyberHero,
  CyberProjects,
  CyberTech,
} from '../components/cyber/CyberSections';
import MiniHeader from '../components/shared/MiniHeader';
import useT from '../i18n/useT';

export default function CyberPage() {
  const t = useT();
  const webgl = useWebGLSupport();

  return (
    <div className="glass-theme dark font-body relative min-h-screen overflow-x-clip bg-[#050816] [--g-bg-2:#0b0623] [--g-bg:#050816]">
      <Head>
        <title>{t.meta.cyberTitle}</title>
        <meta name="description" content={t.meta.glassDescription} />
      </Head>
      <div className="cyber-backdrop" aria-hidden="true" />
      {webgl && <StarsCanvas />}
      <MiniHeader />
      <main className="relative z-10">
        <CyberHero webgl={webgl} />
        <CyberAbout />
        <CyberExperience />
        <CyberTech webgl={webgl} />
        <CyberProjects />
        <CyberContact webgl={webgl} />
      </main>
      <CyberFooter />
    </div>
  );
}
