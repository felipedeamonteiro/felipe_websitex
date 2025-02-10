import type { Metadata } from 'next';
import {
  Roboto,
  Orbitron,
  Montserrat,
  Permanent_Marker,
  Kaushan_Script,
  Roboto_Slab,
} from 'next/font/google';
import style from './HomeLayout.module.scss';
import { ThemeProvider } from '@/hooks/ThemeContext';

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-permanent-marker',
});

const kaushanScript = Kaushan_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-kaushan-script',
});

const orbitron700 = Orbitron({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-orbitron500',
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

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto-slab',
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
        className={`${permanentMarker.variable} ${orbitron700.variable} ${montserrat400.variable} ${roboto.variable} ${kaushanScript.variable} ${robotoSlab.variable}`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
