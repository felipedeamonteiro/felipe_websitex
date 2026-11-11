import Head from 'next/head';
import ParallaxChapters from '../components/parallax/ParallaxChapters';
import ParallaxScene from '../components/parallax/ParallaxScene';
import MiniHeader from '../components/shared/MiniHeader';
import useT from '../i18n/useT';

export default function ParallaxPage() {
  const t = useT();

  return (
    <div className="glass-theme dark font-body relative min-h-screen overflow-x-clip bg-[var(--g-bg)]">
      <Head>
        <title>{t.meta.parallaxTitle}</title>
        <meta name="description" content={t.meta.glassDescription} />
      </Head>
      <MiniHeader />
      <main>
        <ParallaxScene />
        <div className="relative">
          <div className="cyber-backdrop absolute!" aria-hidden="true" />
          <ParallaxChapters />
        </div>
      </main>
    </div>
  );
}
