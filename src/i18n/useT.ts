import { useRouter } from 'next/router';
import { defaultLocale, isLocale, type Locale } from './config';
import en from './dictionaries/en';
import es from './dictionaries/es';
import ja from './dictionaries/ja';
import ptBR, { type Dictionary } from './dictionaries/pt-BR';

const dictionaries: Record<Locale, Dictionary> = {
  'pt-BR': ptBR,
  en,
  es,
  ja,
};

export function useLocale(): Locale {
  const { locale } = useRouter();
  return isLocale(locale) ? locale : defaultLocale;
}

export default function useT(): Dictionary {
  return dictionaries[useLocale()];
}
