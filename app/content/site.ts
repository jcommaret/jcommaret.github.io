export const site = {
  name: "Jérôme Commaret",
  tagline: "Code, manage, innove.",
  location: "Paris, France",
  url: "https://jcommaret.github.io",
  email: "jcommaret@gmail.com",
  repository: "https://github.com/jcommaret/jcommaret.github.io",
  description:
    "Développeur Fullstack spécialisé en React, React Native et Flutter. Lead Front-end expérimenté basé à Paris.",
  ogImage: "https://jcommaret.github.io/og-image.jpg",
  googleAnalyticsId: "G-12CLFHGWVR",
} as const;

export type SocialIcon = "github" | "x" | "medium";

export const socials: { label: string; href: string; icon: SocialIcon }[] = [
  { label: "GitHub", href: "https://github.com/jcommaret", icon: "github" },
  { label: "X (Twitter)", href: "https://x.com/jcommaret", icon: "x" },
  { label: "Medium", href: "https://medium.com/@jcommaret", icon: "medium" },
];

const mailBody = `Bonjour Jérôme,

Je souhaite travailler avec vous.

Mes coordonnées :

Nom :
Prénom :
Téléphone :
Email :

Cordialement`;

export const contactHref = `mailto:${site.email}?subject=${encodeURIComponent(
  "Contact depuis jcommaret.github.io",
)}&body=${encodeURIComponent(mailBody)}`;
