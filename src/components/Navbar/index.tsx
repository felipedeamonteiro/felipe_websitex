'use client';
import React, { useState, useCallback, useEffect } from 'react';
import { useDeviceScreenSize } from '../../hooks/useDeviceScreenSize';
import BulbSwitch from '../BulbSwitch';
import styles from './Navbar.module.scss';
import { FaBars } from 'react-icons/fa';
import NeonButtonReal from '../Buttons/NeonButtonReal';
import clsx from 'clsx';

interface NavbarProps {
  toogle: () => void;
  handleDarkMode: () => void;
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  toogle,
  handleDarkMode,
  darkMode: isDarkMode,
}) => {
  const [viewNavBar, setViewNavBar] = useState<boolean>(false);

  const { isMobile, isTablet } = useDeviceScreenSize();

  const changeNavBarBackground = useCallback(() => {
    if (!isMobile && !isTablet && window.scrollY >= 180) {
      setViewNavBar(true);
    } else if (!isMobile && !isTablet && window.scrollY < 180) {
      setViewNavBar(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', changeNavBarBackground);
    return () => {
      window.removeEventListener('scroll', changeNavBarBackground);
    };
  }, [changeNavBarBackground]);

  return (
    <nav
      className={clsx([
        styles.navbar,
        !viewNavBar && styles.transparent,
        isDarkMode && styles.dark,
      ])}
    >
      <div className={styles.navbarContainer}>
        <a
          className={clsx([styles.navbarHome, isDarkMode && styles.dark])}
          href="#section-home"
        >
          HOME
        </a>

        {!isMobile && !isTablet ? (
          <ul className={styles.navMenu}>
            <BulbSwitch handleDarkMode={handleDarkMode} darkMode={isDarkMode} />
            <li className={styles.navItem}>
              {isDarkMode ? (
                <NeonButtonReal
                  href="#section-experiencia"
                  buttonColorHex="button1"
                >
                  Experiência
                </NeonButtonReal>
              ) : (
                <a
                  className={clsx([styles.navLinks, isDarkMode && styles.dark])}
                  href="#section-experiencia"
                >
                  EXPERIÊNCIA
                </a>
              )}
            </li>
            <li className={styles.navItem}>
              {isDarkMode ? (
                <NeonButtonReal
                  href="#section-projetos"
                  buttonColorHex="button2"
                >
                  Projetos
                </NeonButtonReal>
              ) : (
                <a
                  className={clsx([styles.navLinks, isDarkMode && styles.dark])}
                  href="#section-projetos"
                >
                  PROJETOS
                </a>
              )}
            </li>
            <li className={styles.navItem}>
              {isDarkMode ? (
                <NeonButtonReal
                  href="#section-sobreMim"
                  buttonColorHex="button3"
                >
                  Sobre Mim
                </NeonButtonReal>
              ) : (
                <a
                  className={clsx([styles.navLinks, isDarkMode && styles.dark])}
                  href="#section-sobreMim"
                >
                  SOBRE MIM
                </a>
              )}
            </li>
            <li className={styles.navItem}>
              {isDarkMode ? (
                <NeonButtonReal
                  href="#section-contato"
                  buttonColorHex="button4"
                >
                  Contato
                </NeonButtonReal>
              ) : (
                <a
                  className={clsx([styles.navLinks, isDarkMode && styles.dark])}
                  href="#section-contato"
                >
                  CONTATO
                </a>
              )}
            </li>
          </ul>
        ) : (
          <div className={styles.mobileContent}>
            <BulbSwitch handleDarkMode={handleDarkMode} darkMode={isDarkMode} />
            <div
              className={clsx([styles.mobileIcon, isDarkMode && styles.dark])}
              onClick={toogle}
            >
              <FaBars />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
