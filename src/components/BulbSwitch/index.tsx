import { useId } from 'react';

interface BulbSwitchProps {
  onToggle: () => void;
  darkMode: boolean;
  /** Optional translated labels; defaults to Portuguese. */
  labels?: { toLight: string; toDark: string };
}

const filamentClasses =
  'absolute top-1/2 left-1/2 block h-[17px] w-[17.5px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full before:absolute before:top-[-4px] before:left-[15px] before:block before:h-[17px] before:w-[2.5px] before:rotate-[10deg] before:rounded-full before:border before:border-[#4a426b] before:transition-colors before:duration-700 before:content-[""] after:absolute after:top-[-4px] after:left-[-2px] after:block after:h-[17px] after:w-[2.5px] after:rotate-[-10deg] after:rounded-full after:border after:border-[#4a426b] after:transition-colors after:duration-700 after:content-[""] group-has-checked:before:border-[#fef4d5] group-has-checked:after:border-[#fef4d5]';

export default function BulbSwitch({
  onToggle,
  darkMode,
  labels = { toLight: 'Ativar tema claro', toDark: 'Ativar tema escuro' },
}: BulbSwitchProps) {
  const inputId = useId();
  const label = darkMode ? labels.toLight : labels.toDark;

  return (
    <div className="ml-2.5 shrink-0">
      <div className="group relative h-[25px] w-[65px]">
        <input
          id={inputId}
          type="checkbox"
          role="switch"
          checked={darkMode}
          onChange={onToggle}
          aria-checked={darkMode}
          aria-label={label}
          title={label}
          className="peer absolute top-0 left-0 z-20 h-full w-full cursor-pointer opacity-0"
        />
        <label
          htmlFor={inputId}
          aria-hidden="true"
          className="block h-[25px] w-[65px] rounded-[100px] bg-[#7b7394] shadow-[inset_0_0_20px_rgba(0,0,0,0.2),inset_0_0_5px_-2px_rgba(0,0,0,0.4)] transition-colors duration-400 group-has-checked:bg-[#39315a] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-cyan-300"
        >
          <i className="relative top-[3px] left-[2px] block h-5 w-5 rounded-full bg-[#4a426b] shadow-[inset_0_0_1px_3px_#4a426b,inset_0_0_6px_8px_#423964,0_20px_30px_-10px_rgba(0,0,0,0.4)] transition-all duration-700 group-has-checked:left-[42px] group-has-checked:bg-[#a7694a] group-has-checked:shadow-[inset_0_0_1px_3px_#a56758,inset_0_0_6px_8px_#6b454f,0_20px_30px_-10px_rgba(0,0,0,0.4),0_0_30px_50px_rgba(253,184,67,0.1)]">
            <span className="absolute top-1/2 left-1/2 block h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5a527b] shadow-[inset_0_0_0_4px_#635a84] transition-all duration-700 group-has-checked:bg-[#feed6b] group-has-checked:shadow-[inset_0_0_0_4px_#fdec6a,0_0_8px_7px_#bca83c,0_0_12px_9px_#a1664a] after:absolute after:top-1/2 after:left-1/2 after:block after:h-[7px] after:w-[7px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-[#7b7394] after:shadow-[0_0_2px_4px_#524a73] after:transition-all after:duration-700 after:content-[''] group-has-checked:after:bg-[#fef401] group-has-checked:after:shadow-[0_0_2px_4px_#fdb843]" />
            <span className={`${filamentClasses} -rotate-45`} />
            <span className={`${filamentClasses} rotate-45`} />
            <span>
              <i className="absolute right-[-5px] bottom-[23px] block h-px w-px rounded-full bg-[#d1b82b] opacity-0 transition-all duration-400 group-has-checked:animate-[spark1_2s_ease-in-out_0.4s]" />
              <i className="absolute right-[30px] bottom-0 block h-[3px] w-[3px] rounded-full bg-[#d1b82b] opacity-0 transition-all duration-400 group-has-checked:h-px group-has-checked:w-px group-has-checked:animate-[spark2_2.4s_ease-in-out_0.4s]" />
              <i className="absolute bottom-0 left-0 block h-[3px] w-[3px] rounded-full bg-[#d1b82b] opacity-0 transition-all duration-400 group-has-checked:h-px group-has-checked:w-px group-has-checked:animate-[spark3_2.4s_ease-in-out_0.9s]" />
              <i className="absolute bottom-5 left-5 block h-[3px] w-[3px] rounded-full bg-[#d1b82b] opacity-0 transition-all duration-400 group-has-checked:h-px group-has-checked:w-px group-has-checked:animate-[spark4_1.7s_ease-in-out_0.9s]" />
            </span>
          </i>
        </label>
      </div>
    </div>
  );
}
