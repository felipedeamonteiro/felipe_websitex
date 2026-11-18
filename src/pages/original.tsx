import Head from 'next/head';
import { useState } from 'react';
import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import IntroContainer from '../components/IntroContainer';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Sidebar from '../components/Sidebar';
import useT from '../i18n/useT';

interface HomeProps {
  toggleTheme: () => void;
  theme: {
    title: 'light' | 'dark';
  };
}

export default function Home({ toggleTheme, theme }: HomeProps) {
  const t = useT();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{t.original.title}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((isOpen) => !isOpen)}
        onToggleTheme={toggleTheme}
        darkMode={theme.title === 'dark'}
      />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <main>
        <IntroContainer />
        <Experience />
        <Projects />
        <AboutMe />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}
