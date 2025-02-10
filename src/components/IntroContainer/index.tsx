import React from 'react';
import styles from './IntroContainer.module.scss';
import lightBackground from '../../../public/brightsky.jpg';
import darkBackground from '../../../public/blue_night_sky.jpg';
import clsx from 'clsx';

interface IntroContainerProps {
  darkMode: boolean;
}

const IntroContainer: React.FC<IntroContainerProps> = ({ darkMode }) => {
  return (
    <section
      id="section-home"
      className={clsx([styles.introContainer, darkMode && styles.dark])}
      style={{
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${darkMode ? darkBackground.src : lightBackground.src})`,
      }}
    >
      {darkMode && (
        <div className={clsx([styles.shootingStarContainer])}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      <div className={clsx([styles.introTextContainer])}>
        <h3 className={clsx([styles.h3, darkMode && styles.dark])}>
          Felipe de Alcântara Monteiro
        </h3>
        <h1 className={clsx([styles.h1, darkMode && styles.dark])}>
          ENGENHEIRO FULLSTACK REACT, NODE &amp; REACT-NATIVE
        </h1>
      </div>
    </section>
  );
};

export default IntroContainer;
