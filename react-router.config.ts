import type { Config } from "@react-router/dev/config";

export default {
  // GitHub Pages ne sert que des fichiers statiques : pas de SSR à l'exécution,
  // mais chaque route est prérendue en HTML au build (SEO, partage social).
  ssr: false,
  prerender: true,
} satisfies Config;
