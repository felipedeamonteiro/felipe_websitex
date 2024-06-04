'use client';
import React from 'react';
import style from './BulbSwitch.module.scss';

interface BulbSwitchProps {
  handleDarkMode: () => void;
  darkMode: boolean;
}

const BulbSwitch: React.FC<BulbSwitchProps> = ({
  handleDarkMode,
  darkMode,
}) => {
  return (
    <div className={style.bulbContainer}>
      <div className={style.switch}>
        <input
          type="checkbox"
          defaultChecked={darkMode}
          onChange={handleDarkMode}
          name="toggle"
        />
        <label htmlFor="toggle">
          <i className={style.bulb}>
            <span className={style.bulbCenter}></span>
            <span className={style.filament1}></span>
            <span className={style.filament2}></span>
            <span className={style.sparks}>
              <i className={style.spark1}></i>
              <i className={style.spark2}></i>
              <i className={style.spark3}></i>
              <i className={style.spark4}></i>
            </span>
          </i>
        </label>
      </div>
    </div>
  );
};

export default BulbSwitch;
