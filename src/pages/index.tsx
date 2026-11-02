import { useState } from 'react';
import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import IntroContainer from '../components/IntroContainer';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Sidebar from '../components/Sidebar';

interface HomeProps {
  toggleTheme: () => void;
  theme: {
    title: 'light' | 'dark';
  };
}

export default function Home({ toggleTheme, theme }: HomeProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
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
