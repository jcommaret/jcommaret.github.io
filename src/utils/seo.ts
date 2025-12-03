/**
 * SEO utilities and configurations for the portfolio site
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
}

export const defaultSEO = {
  siteName: "Jérôme Commaret",
  siteUrl: "https://jcommaret.github.io/",
  defaultImage: "https://opengraph.b-cdn.net/production/images/89750128-d4c1-444f-b6b5-e41ee112b0c1.jpg?token=jnpzfGGTGRQ-VdJv0lLP9vppgkTSfDjNumq_3vbb1rc&height=630&width=1200&expires=33259666954",
  defaultDescription: "Développeur Fullstack spécialisé en React, React Native et Flutter. Lead Front-end expérimenté basé à Paris.",
};

export const pageSEO = {
  home: {
    title: "Jérôme Commaret - Développeur Fullstack React, React Native & Flutter à Paris",
    description: "Développeur Fullstack spécialisé en React, React Native et Flutter. Lead Front-end expérimenté basé à Paris avec expertise en développement web et mobile.",
    keywords: "développeur fullstack, react, react native, flutter, lead front-end, développeur mobile, développeur web, Paris, JavaScript, TypeScript",
  },
  about: {
    title: "À propos - Jérôme Commaret",
    description: "Développeur Fullstack spécialisé en React, React Native et Flutter. Lead Front-end expérimenté basé à Paris avec expertise en développement web et mobile, gestion de projet technique et CI/CD.",
    keywords: "à propos, développeur fullstack, compétences, expérience, témoignages",
  },
  resume: {
    title: "CV & Expériences - Jérôme Commaret",
    description: "Découvrez mon parcours professionnel, mes compétences techniques et mon expérience en tant que Lead Front-end et développeur fullstack.",
    keywords: "cv, curriculum vitae, expériences, compétences techniques, formation, parcours professionnel",
  },
  portfolio: {
    title: "Projets & Portfolio - Jérôme Commaret",
    description: "Découvrez mes réalisations en développement web et mobile : applications React, React Native, Flutter et projets innovants.",
    keywords: "portfolio, projets, réalisations, applications web, applications mobile, react projects, flutter projects",
  },
};

/**
 * Generate structured data for a person (JSON-LD)
 */
export const generatePersonStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jérôme Commaret",
    "url": defaultSEO.siteUrl,
    "jobTitle": "Développeur Fullstack",
    "description": defaultSEO.defaultDescription,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paris",
      "addressCountry": "FR"
    },
    "knowsAbout": [
      "React",
      "React Native", 
      "Flutter",
      "JavaScript",
      "TypeScript",
      "Web Development",
      "Mobile Development",
      "Lead Frontend",
      "CI/CD",
      "Scrum",
      "Kanban"
    ],
    "sameAs": [
      defaultSEO.siteUrl
    ]
  };
};

/**
 * Generate breadcrumb structured data (JSON-LD)
 */
export const generateBreadcrumbStructuredData = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

