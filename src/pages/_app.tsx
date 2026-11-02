import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Orbitron, Raleway, Roboto_Slab } from 'next/font/google';
import { useCallback, useEffect, useState } from 'react';
import '../styles/globals.css';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  display: 'swap',
});

type Theme = 'light' | 'dark';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      let savedTheme: string | null = null;

      try {
        savedTheme = localStorage.getItem('theme');
      } catch {
        // The theme still works when storage is unavailable.
      }

      setTheme(
        savedTheme === 'dark' ||
          (savedTheme === null &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
          ? 'dark'
          : 'light',
      );
      setMounted(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;

    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Ignore storage errors in privacy-restricted browsers.
    }
  }, [mounted, theme]);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <div
      className={`${orbitron.variable} ${raleway.variable} ${robotoSlab.variable} min-h-screen font-sans`}
    >
      <Head>
        <title>Felipe de Alcântara Monteiro | Engenheiro Full-Stack</title>
        <meta
          name="description"
          content="Portfólio de Felipe de Alcântara Monteiro, engenheiro full-stack especializado em React, Node e React Native."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component
        {...pageProps}
        toggleTheme={toggleTheme}
        theme={{ title: theme }}
      />
    </div>
  );
}
