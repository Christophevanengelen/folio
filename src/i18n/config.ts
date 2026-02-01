// i18n Configuration
// Change DEFAULT_LOCALE to switch the default language

export const DEFAULT_LOCALE = 'en' as const;

export const LOCALES = {
  en: 'English',
  fr: 'Français',
} as const;

export type Locale = keyof typeof LOCALES;

export const LOCALE_CODES = Object.keys(LOCALES) as Locale[];

// Get locale from URL path
export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  if (firstSegment && firstSegment in LOCALES) {
    return firstSegment as Locale;
  }
  return DEFAULT_LOCALE;
}

// Get path without locale prefix
export function getPathWithoutLocale(pathname: string): string {
  const locale = getLocaleFromPath(pathname);
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] === locale) {
    segments.shift();
  }
  return '/' + segments.join('/');
}

// Build localized path
export function getLocalizedPath(path: string, locale: Locale): string {
  const cleanPath = path.startsWith('/') ? path : '/' + path;
  const pathWithoutLocale = getPathWithoutLocale(cleanPath);
  return `/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
}

// Get alternate language path (for language switcher)
export function getAlternatePath(pathname: string, targetLocale: Locale): string {
  const pathWithoutLocale = getPathWithoutLocale(pathname);
  return getLocalizedPath(pathWithoutLocale, targetLocale);
}

// Get all hreflang links for SEO
export function getHrefLangLinks(pathname: string, siteUrl: string): { locale: Locale; href: string }[] {
  const pathWithoutLocale = getPathWithoutLocale(pathname);
  return LOCALE_CODES.map(locale => ({
    locale,
    href: new URL(getLocalizedPath(pathWithoutLocale, locale), siteUrl).toString(),
  }));
}
