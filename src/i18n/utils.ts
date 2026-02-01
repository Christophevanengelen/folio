import { ui, type UIKey } from './ui';
import { DEFAULT_LOCALE, type Locale } from './config';

// Get translation for a key
export function t(locale: Locale, key: UIKey): string {
  return ui[locale][key] ?? ui[DEFAULT_LOCALE][key] ?? key;
}

// Create a translation function bound to a locale
export function useTranslations(locale: Locale) {
  return function translate(key: UIKey): string {
    return t(locale, key);
  };
}
