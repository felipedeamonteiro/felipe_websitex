import { FaRegLightbulb } from 'react-icons/fa';

interface BulbSwitchProps {
  onToggle: () => void;
  darkMode: boolean;
}

export default function BulbSwitch({ onToggle, darkMode }: BulbSwitchProps) {
  const label = darkMode ? 'Ativar tema claro' : 'Ativar tema escuro';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={darkMode}
      aria-label={label}
      title={label}
      onClick={onToggle}
      className="relative h-8 w-16 shrink-0 rounded-full border border-white/30 bg-[#7b7394] shadow-inner transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 dark:bg-[#39315a]"
    >
      <span
        className={`absolute top-0.5 left-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#4a426b] text-[#b8b1ce] shadow-md transition-all duration-300 dark:left-8 dark:bg-[#feed6b] dark:text-[#6b454f]`}
      >
        <FaRegLightbulb aria-hidden="true" />
      </span>
    </button>
  );
}
