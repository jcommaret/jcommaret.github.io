# Migration vers BrowserRouter (optionnel mais recommandé)

## Pourquoi migrer ?

Le site utilise actuellement `HashRouter` qui génère des URLs avec `#` :
- ❌ `https://jcommaret.github.io/#/about`
- ❌ `https://jcommaret.github.io/#/resume`

Ces URLs sont **moins bien indexées par les moteurs de recherche**.

Avec `BrowserRouter`, les URLs seraient :
- ✅ `https://jcommaret.github.io/about`
- ✅ `https://jcommaret.github.io/resume`

## Comment migrer ?

### Étape 1 : Modifier src/main.tsx

```typescript
// Remplacer
import { HashRouter as Router, Routes, Route } from "react-router-dom"

// Par
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
```

### Étape 2 : Copier index.html vers 404.html

Pour GitHub Pages, créer `/dist/404.html` identique à `/dist/index.html`.

Cela permet à GitHub Pages de servir l'application React même quand l'utilisateur accède directement à `/about`.

### Étape 3 : Mettre à jour vite.config.ts

```typescript
export default defineConfig({
  plugins: [
    react(),
    sitemap({ 
      hostname: 'https://jcommaret.github.io', 
      changefreq: 'monthly', 
      priority: 0.8, 
      dynamicRoutes: [
        '/',
        '/about',      // Plus de #
        '/projets',    // Plus de #
        '/resume'      // Plus de #
      ],
      lastmod: new Date().toISOString(),
    })
  ],
  base: "/",  // Important !
  // ... reste de la config
});
```

### Étape 4 : Mettre à jour les URLs dans le code

Dans `src/utils/seo.ts` et tous les composants, remplacer :
- `${defaultSEO.siteUrl}#/about` → `${defaultSEO.siteUrl}about`
- `${defaultSEO.siteUrl}#/resume` → `${defaultSEO.siteUrl}resume`
- `${defaultSEO.siteUrl}#/projets` → `${defaultSEO.siteUrl}projets`

### Étape 5 : Rebuild et deploy

```bash
npm run build
npm run deploy
```

### Étape 6 : Vérifier

Après déploiement :
1. Tester toutes les URLs directement
2. Vérifier que le routing fonctionne
3. Tester les redirections 404
4. Re-soumettre le sitemap à Google Search Console

## Avantages

✅ **SEO amélioré** : URLs propres et indexables  
✅ **Partage social** : URLs plus professionnelles  
✅ **Analytics** : Meilleur tracking des pages  
✅ **UX** : URLs lisibles et bookmarkables  

## Inconvénients

⚠️ **Compatibilité GitHub Pages** : Nécessite une configuration spéciale  
⚠️ **Redirections existantes** : Les anciens liens avec `#` ne fonctionneront plus automatiquement  

## Alternative : Garder HashRouter mais l'optimiser

Si la migration est trop complexe, vous pouvez :

1. **Garder HashRouter** (comme actuellement)
2. **Ajouter un système de redirections** pour les moteurs de recherche
3. **Utiliser prerender.io ou react-snap** pour le pré-rendu

Exemple avec react-snap :

```bash
npm install --save-dev react-snap
```

Dans package.json :

```json
{
  "scripts": {
    "postbuild": "react-snap"
  },
  "reactSnap": {
    "inlineCss": true,
    "minifyHtml": true
  }
}
```

Cela génère des versions HTML statiques de chaque page pour les moteurs de recherche.

## Décision

La migration vers BrowserRouter est **recommandée** mais **non obligatoire**.

Les améliorations SEO déjà implémentées dans ce projet amélioreront significativement le référencement, même avec HashRouter.

