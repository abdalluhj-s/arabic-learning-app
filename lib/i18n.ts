export const locales = ['ar', 'en', 'ru', 'uz'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ar';

export const localeNames: Record<Locale, string> = {
  ar: 'العربية',
  en: 'English',
  ru: 'Русский',
  uz: 'O\'zbek'
};

export const localeDirections: Record<Locale, 'rtl' | 'ltr'> = {
  ar: 'rtl',
  en: 'ltr',
  ru: 'ltr',
  uz: 'ltr'
};

export const getDirection = (locale: Locale): 'rtl' | 'ltr' => {
  return localeDirections[locale];
};
