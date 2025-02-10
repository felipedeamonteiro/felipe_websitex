'use client';
import Navbar from '@/components/Navbar';
// import Sidebar from '@/components/Sidebar';
import { useState, type JSX } from 'react';
import { useTheme } from '@/hooks/ThemeContext';
import IntroContainer from '@/components/IntroContainer';
// import styles from './Home.module.scss';

export default function Home(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toogleSidebar = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <Sidebar isOpen={isOpen} toogle={toogleSidebar} isDarkMode={isDarkMode} /> */}
      <Navbar
        toogle={toogleSidebar}
        handleDarkMode={toggleTheme}
        darkMode={isDarkMode}
      />
      <IntroContainer darkMode={isDarkMode} />
      {/* <Experience darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <AboutMe darkMode={darkMode} />
      <ContactMe darkMode={darkMode} />
      <Footer darkMode={darkMode} /> */}
    </>
  );
}
