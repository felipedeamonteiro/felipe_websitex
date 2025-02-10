'use client';

import {
  type ReactElement,
  type ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get initial theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    const initialDarkMode =
      savedTheme === 'dark' || (savedTheme === null && prefersDark);

    setIsDarkMode(initialDarkMode);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      if (isDarkMode) {
        document.documentElement.classList.add('dark-mode');
        document.documentElement.classList.remove('light-mode');
      } else {
        document.documentElement.classList.add('light-mode');
        document.documentElement.classList.remove('dark-mode');
      }
    }
  }, [isDarkMode, mounted]);

  const toggleTheme = (): void => {
    setIsDarkMode(!isDarkMode);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): React.ContextType<typeof ThemeContext> =>
  useContext(ThemeContext);
