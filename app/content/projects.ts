import gdef from "../assets/projects/gdef.webp";
import miaou from "../assets/projects/miaou.webp";
import portfolio from "../assets/projects/portfolio.webp";
import tgv from "../assets/projects/tgv.webp";
import voicia from "../assets/projects/voicia.webp";
import voidMistral from "../assets/projects/void-mistral.webp";
import voidEditor from "../assets/projects/void.webp";

export type Project = {
  slug: string;
  title: string;
  kind: string;
  description: string;
  stack: string[];
  href: string;
  image: string;
  /** `contain` pour les visuels à fond blanc qu'il ne faut pas rogner (logos…). */
  fit?: "cover" | "contain";
  featured?: boolean;
};

// Du plus récent au plus ancien.
export const projects: Project[] = [
  {
    slug: "voicia",
    title: "Voicia",
    kind: "Application mobile",
    description:
      "Une application de conversation vocale avec Mistral AI : reconnaissance vocale et synthèse vocale (text-to-speech).",
    stack: ["React Native", "TypeScript", "Mistral AI"],
    href: "https://github.com/jcommaret/voicetral",
    image: voicia,
    featured: true,
  },
  {
    slug: "miaou",
    title: "Miaou",
    kind: "Application mobile",
    description:
      "Trois semaines avant la sortie de l'application Le Chat, j'ai créé cette application mobile pour discuter avec Mistral AI.",
    stack: ["React Native", "TypeScript", "Mistral AI"],
    href: "https://github.com/jcommaret/miaou",
    image: miaou,
    featured: true,
  },
  {
    slug: "void-mistral",
    title: "Void × Mistral",
    kind: "Contribution open source",
    description:
      "J'ai intégré Mistral dans Void, un IDE propulsé par l'IA, pour utiliser les différents modèles de Mistral directement dans l'éditeur.",
    stack: ["TypeScript", "React", "Mistral SDK"],
    href: "https://github.com/voideditor/void",
    image: voidMistral,
    fit: "contain",
    featured: true,
  },
  {
    slug: "tgv",
    title: "TGV Boilerplate",
    kind: "Boilerplate",
    description:
      "Persuadé qu'il était possible de déployer un site statique avec navigation sur GitHub Pages, j'ai créé ce boilerplate pour me faciliter la vie.",
    stack: ["Vite", "React", "TypeScript", "GitHub Pages"],
    href: "https://github.com/jcommaret/tgv",
    image: tgv,
  },
  {
    slug: "gdef",
    title: "GDEF",
    kind: "Application mobile",
    description: "Le grand dictionnaire estonien-français, dans la poche.",
    stack: ["React Native", "Expo"],
    href: "https://github.com/jcommaret/GDEF",
    image: gdef,
  },
  {
    slug: "void",
    title: "Void",
    kind: "Application desktop",
    description: "Un IDE open source utilisant l'IA, disponible sur macOS, Linux et Windows.",
    stack: ["Electron", "TypeScript", "React", "Tailwind CSS"],
    href: "https://github.com/voideditor/void",
    image: voidEditor,
  },
  {
    slug: "portfolio",
    title: "Ce portfolio",
    kind: "Site web",
    description:
      "Mon portfolio personnel, prérendu en HTML statique et déployé sur GitHub Pages. Le code est ouvert.",
    stack: ["React", "React Router", "TypeScript", "Vite"],
    href: "https://github.com/jcommaret/jcommaret.github.io",
    image: portfolio,
  },
];
