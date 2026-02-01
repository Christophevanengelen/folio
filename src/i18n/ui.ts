// UI translations for navigation, buttons, and common elements

export const ui = {
  en: {
    // Navigation
    'nav.work': 'Work',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.notes': 'Notes',
    'nav.contact': 'Contact',

    // Header
    'header.logo.aria': 'Christophe Van Engelen - Home',
    'header.menu.open': 'Open menu',
    'header.menu.close': 'Close menu',

    // Footer
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with Astro · Deployed on Cloudflare Pages',
    'footer.tagline': 'Design leader & product strategist.',
    'footer.tagline2': 'From framing to production.',

    // Skip link
    'skip.main': 'Skip to main content',

    // Language
    'lang.switch': 'Language',
    'lang.current': 'EN',
  },
  fr: {
    // Navigation
    'nav.work': 'Réalisations',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.notes': 'Notes',
    'nav.contact': 'Contact',

    // Header
    'header.logo.aria': 'Christophe Van Engelen - Accueil',
    'header.menu.open': 'Ouvrir le menu',
    'header.menu.close': 'Fermer le menu',

    // Footer
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
    'footer.built': 'Construit avec Astro · Déployé sur Cloudflare Pages',
    'footer.tagline': 'Design leader & product strategist.',
    'footer.tagline2': 'Du cadrage à la mise en production.',

    // Skip link
    'skip.main': 'Aller au contenu principal',

    // Language
    'lang.switch': 'Langue',
    'lang.current': 'FR',
  },
} as const;

export type UIKey = keyof typeof ui.en;
