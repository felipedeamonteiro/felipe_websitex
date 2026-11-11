export const locales = ['pt-BR', 'en', 'es', 'ja'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'pt-BR';

export const localeLabels: Record<Locale, { short: string; name: string }> = {
  'pt-BR': { short: 'PT', name: 'Português' },
  en: { short: 'EN', name: 'English' },
  es: { short: 'ES', name: 'Español' },
  ja: { short: '日本語', name: '日本語' },
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

/** Locale-prefixed path for plain <a> tags (next/link adds this itself). */
export function localePath(locale: Locale, path: string): string {
  return locale === defaultLocale ? path : `/${locale}${path}`;
}
