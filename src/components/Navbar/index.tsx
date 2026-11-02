import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { navigationLinks } from '../../utils/navigation';
import BulbSwitch from '../BulbSwitch';
import NeonButtonReal from '../Buttons/NeonButtonReal';

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
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => setHasScrolled(window.scrollY > 32);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showBackground = hasScrolled || isSidebarOpen;

  return (
    <nav
      aria-label="Navegação principal"
      className={`sticky top-0 z-50 flex h-20 w-full justify-center transition-colors duration-300 ${
        showBackground
          ? 'bg-[var(--nav-background)] shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="flex h-full w-full max-w-[1350px] items-center justify-between px-5 sm:px-8">
        <a
          href="#section-home"
          className="font-display rounded-sm text-xl font-bold text-[var(--accent)] transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:text-2xl"
        >
          HOME
        </a>

        <ul className="hidden items-center gap-1 lg:flex xl:gap-3">
          <li className="mr-2 flex items-center">
            <BulbSwitch onToggle={onToggleTheme} darkMode={darkMode} />
          </li>
          {navigationLinks.map((link) => (
            <li key={link.href}>
              {darkMode ? (
                <NeonButtonReal href={link.href} buttonColorHex={link.color}>
                  {link.label}
                </NeonButtonReal>
              ) : (
                <a
                  href={link.href}
                  className="rounded-sm px-3 py-2 text-sm font-bold text-[var(--accent)] uppercase transition-colors hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 xl:px-5 xl:text-base"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 lg:hidden">
          <BulbSwitch onToggle={onToggleTheme} darkMode={darkMode} />
          <button
            type="button"
            aria-label={isSidebarOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-controls="mobile-navigation"
            aria-expanded={isSidebarOpen}
            onClick={onToggleSidebar}
            className="flex h-11 w-11 items-center justify-center rounded-md text-2xl text-[var(--accent)] transition hover:bg-black/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            <FaBars aria-hidden="true" />
          </button>
        </div>
      </div>
    </nav>
  );
}
