# Contribuer

## Prérequis

- Node.js ≥ 22.22 (version de référence dans [`.tool-versions`](.tool-versions))
- `npm install` installe les dépendances **et** active les hooks Git (via husky)

## Messages de commit : Conventional Commits

Tous les commits suivent la convention [Conventional Commits](https://www.conventionalcommits.org/fr/v1.0.0/).
Le hook `commit-msg` vérifie chaque message avec [commitlint](https://commitlint.js.org/), et la CI vérifie les commits **et le titre** de chaque pull request.

```
<type>(<scope optionnel>): <description à l'impératif, en minuscule>

[corps optionnel : le pourquoi du changement]

[pied optionnel : BREAKING CHANGE: …, Refs #12…]
```

### Types

| Type       | Usage                                                         |
| ---------- | ------------------------------------------------------------- |
| `feat`     | Nouvelle fonctionnalité visible (page, section, composant…)   |
| `fix`      | Correction de bug                                             |
| `docs`     | Documentation uniquement                                      |
| `style`    | Formatage du code, sans changement de comportement            |
| `refactor` | Restructuration du code, sans nouvelle fonctionnalité ni fix  |
| `perf`     | Amélioration de performance                                   |
| `test`     | Ajout ou correction de tests                                  |
| `build`    | Build, dépendances, configuration Vite / React Router         |
| `ci`       | Workflows GitHub Actions, Dependabot                          |
| `chore`    | Maintenance diverse (mises à jour de dépendances, outillage…) |
| `revert`   | Annulation d'un commit précédent                              |

### Scopes conseillés

`ui` · `content` · `seo` · `a11y` · `perf` · `deps` · `config` · `ci` · `release`

Un scope hors de cette liste déclenche un simple avertissement.

### Exemples

```
feat(content): ajoute le projet Voicia
fix(ui): corrige le débordement du hero sur mobile
docs: documente le déploiement sur GitHub Pages
chore(deps): met à jour react-router en 8.4
feat(ui)!: remplace la navigation latérale par un en-tête

BREAKING CHANGE: les anciennes URL en /#/ sont redirigées.
```

## Avant de committer

Le hook `pre-commit` lance [lint-staged](https://github.com/lint-staged/lint-staged) : ESLint et Prettier corrigent automatiquement les fichiers indexés.
Pour tout vérifier d'un coup :

```bash
npm run check
```

## Pull requests

- Une branche par sujet, nommée d'après le type : `feat/…`, `fix/…`, `docs/…`
- Le **titre** de la PR suit aussi la convention : il devient le message du commit en cas de « squash and merge »
- La CI doit être verte : lint, types, formatage, build et commits
