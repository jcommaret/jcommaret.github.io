import type { MetaDescriptor } from "react-router";
import { site, socials } from "../content/site";

type PageMeta = {
  title: string;
  description: string;
  /** Chemin canonique, avec slash final (GitHub Pages sert `/projets/index.html`). */
  path: string;
};

export function pageMeta({ title, description, path }: PageMeta): MetaDescriptor[] {
  const url = new URL(path, `${site.url}/`).href;

  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: site.name },
    { property: "og:locale", content: "fr_FR" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: site.ogImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: `${site.name} — ${site.tagline}` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: site.ogImage },
  ];
}

export function personJsonLd(image: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: `${site.url}/`,
    image: new URL(image, site.url).href,
    jobTitle: "Développeur Fullstack",
    description: site.description,
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
    knowsAbout: [
      "React",
      "React Native",
      "Flutter",
      "JavaScript",
      "TypeScript",
      "Développement web",
      "Développement mobile",
      "Lead Front-end",
      "CI/CD",
      "Scrum",
      "Kanban",
    ],
    sameAs: socials.map((social) => social.href),
  };
}
