# jcommaret.github.io

Portfolio de **Jérôme Commaret**, développeur fullstack et lead front-end à Paris.
→ [jcommaret.github.io](https://jcommaret.github.io/)

## Stack

- [React 19](https://react.dev/) et [React Router 8](https://reactrouter.com/) en mode framework
- **Prérendu statique** : chaque page est générée en HTML au build (SEO, partage social), puis hydratée côté client
- [Vite 8](https://vite.dev/) et [TypeScript](https://www.typescriptlang.org/) strict
- CSS moderne sans préprocesseur : `@layer`, imbrication native, couleurs `oklch()`, thèmes clair et sombre avec `light-dark()`, View Transitions, animations au défilement
- Polices auto-hébergées via [Fontsource](https://fontsource.org/) : Geist, Geist Mono, Instrument Serif
- Hébergement sur [GitHub Pages](https://pages.github.com/), publié automatiquement par GitHub Actions

## Démarrer

```bash
npm install
npm run dev
```

| Script              | Rôle                                                          |
| ------------------- | ------------------------------------------------------------- |
| `npm run dev`       | Serveur de développement                                      |
| `npm run build`     | Build de production et prérendu des pages dans `build/client` |
| `npm run preview`   | Sert le build de production en local                          |
| `npm run typecheck` | Génère les types des routes puis lance TypeScript             |
| `npm run lint`      | ESLint                                                        |
| `npm run format`    | Formate le code avec Prettier                                 |
| `npm run check`     | Lint, types et formatage, comme en CI                         |

## Structure

```
app/
├── root.tsx          Document HTML, thème, analytics, page d'erreur / 404
├── routes.ts         Déclaration des routes : /, /projets/, /cv/
├── routes/           Une page par fichier, avec ses balises meta
├── components/       En-tête, pied de page, cartes, icônes…
├── content/          Contenu typé : profil, projets, CV, témoignages
├── lib/seo.ts        Balises meta, Open Graph et JSON-LD
├── styles/           Design tokens, base, composants, animations
└── assets/           Portrait et visuels des projets (WebP)
public/               favicon, robots.txt, sitemap.xml, humans.txt
```

Pour modifier le contenu (projets, expériences, témoignages), il suffit d'éditer les fichiers de `app/content/`.

## Déploiement

Chaque push sur `master` publie le site : le workflow [`deploy.yml`](.github/workflows/deploy.yml) lance `npm run build`, puis envoie `build/client` sur GitHub Pages. Pour le relancer à la main, utiliser « Run workflow » dans l'onglet Actions, ou :

```bash
gh workflow run deploy.yml
```

La source de GitHub Pages doit être réglée sur **GitHub Actions** (Settings → Pages → Build and deployment → Source).

Le script `postbuild` copie la coquille SPA en `404.html` : GitHub Pages la sert pour toute URL inconnue, et l'application affiche alors sa page 404.

## SEO

Voir [docs/SEO.md](docs/SEO.md).

## Contribuer

Les commits suivent [Conventional Commits](https://www.conventionalcommits.org/fr/v1.0.0/), vérifiés par commitlint en local et en CI. Voir [CONTRIBUTING.md](CONTRIBUTING.md).

## Licence

Code sous licence [GNU GPL v3](LICENSE.MD). Toute version modifiée doit rester sous GPL v3, avec son code source disponible.

La première version de ce site s'appuyait sur le template vCard de [codewithsadee](https://github.com/codewithsadee). La v2 est une refonte complète.
