import fr from '@/locales/fr/common.json';
import en from '@/locales/en/common.json';

export type Dictionary = typeof fr;

const dictionaries: Record<string, Dictionary> = {
  fr,
  en,
};

export const defaultLocale = 'fr';
export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];

export function getDictionary(lang: string): Dictionary {
  return dictionaries[lang] || dictionaries[defaultLocale];
}

export function isSupportedLocale(locale: any): locale is Locale {
  return locales.includes(locale);
}
