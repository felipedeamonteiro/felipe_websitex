import { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { navigationLinks } from '../../utils/navigation';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <aside
      id="mobile-navigation"
      aria-label="Menu de navegação"
      aria-hidden={!isOpen}
      inert={!isOpen}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className={`fixed inset-0 z-[60] grid place-items-center bg-[#00a9bb] transition-all duration-300 lg:hidden ${
        isOpen
          ? 'visible translate-y-0 opacity-100'
          : 'invisible -translate-y-full opacity-0'
      }`}
    >
      <button
        ref={closeButtonRef}
        type="button"
        aria-label="Fechar menu"
        onClick={onClose}
        className="absolute top-5 right-5 flex h-12 w-12 items-center justify-center rounded-md text-3xl text-white transition hover:bg-black/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <FaTimes aria-hidden="true" />
      </button>
      <ul className="w-full space-y-3 px-8 text-center">
        {navigationLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={onClose}
              className="font-display block rounded-md px-4 py-5 text-xl text-white uppercase transition hover:bg-black/10 hover:text-[#06072a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
