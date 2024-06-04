'use client';
import React from 'react';
import style from './Sidebar.module.scss';
import { clsx } from 'clsx';
import { FaTimes } from 'react-icons/fa';

interface SidebarProps {
  isDarkMode: boolean;
  isOpen: boolean;
  toogle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isDarkMode, isOpen, toogle }) => {
  return (
    <aside
      className={clsx([style.sidebarContainer, `${isOpen && style.opened}`])}
      onClick={toogle}
    >
      <div className={style.iconDiv} onClick={toogle}>
        <FaTimes
          className={clsx([
            isDarkMode ? style.darkFatimes : style.lightFatimes,
          ])}
        />
      </div>
      <div className={clsx([style.sidebarWrapper, isDarkMode && style.dark])}>
        <ul className={style.sidebarMenu}>
          <li>
            <a
              className={clsx([
                style.sidebarMenuLink,
                isDarkMode && style.darkMenuLink,
              ])}
              href="#section-experiencia"
              onClick={toogle}
            >
              EXPERIÊNCIA
            </a>
          </li>
          <li>
            <a
              className={clsx([
                style.sidebarMenuLink,
                isDarkMode && style.darkMenuLink,
              ])}
              href="#section-projetos"
              onClick={toogle}
            >
              PROJETOS
            </a>
          </li>
          <li>
            <a
              className={clsx([
                style.sidebarMenuLink,
                isDarkMode && style.darkMenuLink,
              ])}
              href="#section-sobreMim"
              onClick={toogle}
            >
              SOBRE MIM
            </a>
          </li>
          <li>
            <a
              className={clsx([
                style.sidebarMenuLink,
                isDarkMode && style.darkMenuLink,
              ])}
              href="#section-contato"
              onClick={toogle}
            >
              CONTATO
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
