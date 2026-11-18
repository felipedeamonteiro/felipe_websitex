import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import useT from '../../i18n/useT';
import { navigationLinks } from '../../utils/navigation';
import BulbSwitch from '../BulbSwitch';
import NeonButtonReal from '../Buttons/NeonButtonReal';
import LanguageSwitcher from '../shared/LanguageSwitcher';

interface NavbarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  onToggleTheme: () => void;
  darkMode: boolean;
}

export default function Navbar({
  isSidebarOpen,
  onToggleSidebar,
  onToggleTheme,
  darkMode,
}: NavbarProps) {
  const t = useT();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => setHasScrolled(window.scrollY > 32);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showBackground = hasScrolled || isSidebarOpen;
  const bulbLabels = { toLight: t.nav.toLight, toDark: t.nav.toDark };

  return (
    <nav
      aria-label={t.nav.primary}
      className={`sticky top-0 z-50 flex h-20 w-full justify-center transition-colors duration-300 ${
        showBackground ? 'bg-(--nav-background) shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="flex h-full w-full max-w-337.5 items-center justify-between px-5 sm:px-8">
        <a
          href="#section-home"
          className="font-display rounded-sm text-xl font-bold text-(--accent) transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:text-2xl"
        >
          {t.original.home}
        </a>

        <ul className="hidden items-center gap-1 lg:flex xl:gap-3">
          <li className="mr-2 flex items-center gap-3">
            <LanguageSwitcher variant="classic" />
            <BulbSwitch
              onToggle={onToggleTheme}
              darkMode={darkMode}
              labels={bulbLabels}
            />
          </li>
          {navigationLinks.map((link) => (
            <li key={link.href}>
              {darkMode ? (
                <NeonButtonReal href={link.href} buttonColorHex={link.color}>
                  {t.original.nav[link.key]}
                </NeonButtonReal>
              ) : (
                <a
                  href={link.href}
                  className="rounded-sm px-3 py-2 text-sm font-bold text-(--accent) uppercase transition-colors hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 xl:px-5 xl:text-base"
                >
                  {t.original.nav[link.key]}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher variant="classic" />
          <BulbSwitch
            onToggle={onToggleTheme}
            darkMode={darkMode}
            labels={bulbLabels}
          />
          <button
            type="button"
            aria-label={isSidebarOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-controls="mobile-navigation"
            aria-expanded={isSidebarOpen}
            onClick={onToggleSidebar}
            className="flex h-11 w-11 items-center justify-center rounded-md text-2xl text-(--accent) transition hover:bg-black/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            <FaBars aria-hidden="true" />
          </button>
        </div>
      </div>
    </nav>
  );
}
