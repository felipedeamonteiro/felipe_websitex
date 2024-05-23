import type { Metadata } from 'next';
import {
  Roboto,
  Orbitron,
  Montserrat,
  Permanent_Marker,
} from 'next/font/google';
import style from './HomeLayout.module.scss';
import { ThemeProvider } from '@/hooks/ThemeContext';

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-permanent-marker',
});

const orbitron700 = Orbitron({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-orbitron700',
});

const montserrat400 = Montserrat({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-montserrat400',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto400',
});

export const metadata: Metadata = {
  title: 'Felipe Monteiro',
  description: 'Fullstack Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return (
    <html lang="en" className={style.initialBody}>
      <body
        className={`${permanentMarker.variable} ${orbitron700.variable} ${montserrat400.variable} ${roboto.variable}`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
