'use client';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';
// import styles from './Home.module.scss';

export default function Home(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toogleSidebar = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toogle={toogleSidebar} />
      {/* <Navbar
        toogle={toogleSidebar}
        handleDarkMode={handleDarkMode}
        darkMode={darkMode}
      /> */}
      <h1>Aoba</h1>
      {/* <IntroContainer darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <AboutMe darkMode={darkMode} />
      <ContactMe darkMode={darkMode} />
      <Footer darkMode={darkMode} /> */}
    </>
  );
}
