# Portfolio — Christophe Van Engelen

Portfolio personnel construit avec Astro, Tailwind CSS et MDX.

## 🚀 Stack

- **Framework** : [Astro](https://astro.build) v5
- **Styling** : [Tailwind CSS](https://tailwindcss.com) v4
- **Content** : MDX pour les case studies et articles
- **Deployment** : Cloudflare Pages

## 📁 Structure

```
/
├── public/              # Assets statiques
├── src/
│   ├── components/      # Composants Astro
│   │   ├── home/        # Sections homepage
│   │   ├── layout/      # Header, Footer
│   │   ├── ui/          # Composants réutilisables
│   │   └── work/        # Composants case study
│   ├── content/
│   │   ├── projects/    # Case studies (MDX)
│   │   └── notes/       # Articles (MDX)
│   ├── layouts/         # Layouts de page
│   ├── pages/           # Routes
│   └── styles/          # CSS global + tokens
└── package.json
```

## 🧞 Commandes

| Commande | Action |
| :------- | :----- |
| `pnpm install` | Installer les dépendances |
| `pnpm dev` | Lancer le serveur de dev (`localhost:4321`) |
| `pnpm build` | Build de production (`./dist/`) |
| `pnpm preview` | Preview du build local |

## 🌐 Déploiement

### Cloudflare Pages

1. Connecter le repo GitHub à Cloudflare Pages
2. Configuration de build :
   - **Build command** : `pnpm build`
   - **Build output directory** : `dist`
   - **Node version** : 20+

### DNS (Infomaniak)

1. Aller dans la gestion DNS du domaine
2. Ajouter un enregistrement CNAME :
   - **Nom** : `@` ou `www`
   - **Cible** : `<project>.pages.dev`
3. Ou utiliser les nameservers Cloudflare

## 📝 Ajouter du contenu

### Nouveau case study

Créer un fichier `.mdx` dans `src/content/projects/` :

```mdx
---
title: "Nom du projet"
tagline: "Sous-titre"
description: "Description courte"
role: "Mon rôle"
duration: "Durée"
year: "2024"
tags: ["Tag1", "Tag2"]
impact:
  - metric: "Métrique"
    value: "+X%"
---

## Impact Snapshot

...
```

### Nouvel article

Créer un fichier `.mdx` dans `src/content/notes/`.

## 🎨 Design Tokens

Les tokens sont définis dans `src/styles/global.css` :

- **Couleurs** : Neutrals + Accent (Indigo #4F46E5)
- **Typography** : Inter (body) + Cal Sans (display)
- **Spacing** : Système fluide avec `clamp()`
- **Shadows** : 5 niveaux

## ✅ Checklist avant déploiement

- [ ] Remplacer les placeholders d'images
- [ ] Mettre à jour les liens sociaux
- [ ] Configurer le domaine dans `astro.config.mjs`
- [ ] Tester le responsive (320px → 1920px)
- [ ] Vérifier l'accessibilité (navigation clavier, contrastes)
- [ ] Run `pnpm build` sans erreurs

---

Built with ❤️ using Astro
