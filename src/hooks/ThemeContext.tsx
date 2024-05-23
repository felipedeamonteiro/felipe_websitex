'use client';

import {
  type ReactElement,
  type ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';

interface ThemeProviderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeProviderProps>({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = (): void => {
    setIsDarkMode(!isDarkMode);
    // document.documentElement.classList.toggle('dark');
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): React.ContextType<typeof ThemeContext> =>
  useContext(ThemeContext);
