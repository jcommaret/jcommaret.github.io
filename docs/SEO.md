# SEO

## Ce qui est en place

### URL propres et HTML prérendu

Le site utilisait un `HashRouter` (`/#/projets`) : Google ignore tout ce qui suit le `#`, si bien que toutes les pages étaient vues comme une seule.

Depuis la v2, React Router prérend chaque route en HTML statique au build (`react-router.config.ts` : `ssr: false`, `prerender: true`) :

| URL                                    | Fichier généré                    |
| -------------------------------------- | --------------------------------- |
| `https://jcommaret.github.io/`         | `build/client/index.html`         |
| `https://jcommaret.github.io/projets/` | `build/client/projets/index.html` |
| `https://jcommaret.github.io/cv/`      | `build/client/cv/index.html`      |

Les robots, y compris ceux des réseaux sociaux qui n'exécutent pas JavaScript, reçoivent donc le contenu et les balises meta propres à chaque page.

Les URL canoniques et les liens internes utilisent un **slash final** (`/projets/`), car c'est l'adresse servie par GitHub Pages sans redirection.

### Anciennes URL

Les liens `/#/about`, `/#/projets` et `/#/resume` encore en circulation sont redirigés côté client vers `/`, `/projets/` et `/cv/` (voir `useLegacyHashRedirect` dans `app/root.tsx`).

### Balises meta

Chaque route exporte une fonction `meta` qui appelle `pageMeta()` (`app/lib/seo.ts`). Elle produit :

- `<title>` et `meta description`
- `link rel="canonical"`
- Open Graph (`og:title`, `og:description`, `og:url`, `og:image`…)
- Twitter Cards

### Données structurées

Un JSON-LD `Person` (nom, poste, compétences, réseaux sociaux, portrait) est injecté sur toutes les pages depuis `app/root.tsx`.

### Fichiers techniques

- `public/sitemap.xml` : à mettre à jour si une route est ajoutée
- `public/robots.txt` : pointe vers le sitemap
- `public/humans.txt`
- `404.html` : coquille SPA servie par GitHub Pages, l'application y affiche une page 404 en `noindex`

### Performance

- Images en WebP, de 6 à 37 Ko
- Polices auto-hébergées, avec préchargement des deux fichiers critiques
- Aucun framework UI ni bibliothèque d'icônes : les icônes sont des SVG en ligne

## Après un déploiement

1. Soumettre `https://jcommaret.github.io/sitemap.xml` dans [Google Search Console](https://search.google.com/search-console)
2. Vérifier les données structurées avec le [test des résultats enrichis](https://search.google.com/test/rich-results)
3. Vérifier l'aperçu social avec [opengraph.xyz](https://www.opengraph.xyz/)
4. Lancer un audit [PageSpeed Insights](https://pagespeed.web.dev/)

D'autres outils et pistes sont listés dans [seo-ressources.md](seo-ressources.md).
