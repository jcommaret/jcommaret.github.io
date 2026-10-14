export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  projects?: string[];
  stack?: string[];
  tools?: string[];
};

export type Education = {
  school: string;
  period: string;
  description: string;
};

// Du plus récent au plus ancien.
export const experiences: Experience[] = [
  {
    role: "Intervenant",
    company: "Efrei",
    period: "Nov. 2024",
    description:
      "En tant que chargé de TD, j'ai appris aux étudiants à utiliser Angular, Flutter et Firebase pour développer des applications mobiles et web.",
    stack: ["Angular", "Flutter", "Firebase"],
  },
  {
    role: "Développeur Fullstack",
    company: "Crowdaa",
    period: "Janv. 2024 — Juin 2024",
    description:
      "Crowdaa est un SaaS no code qui permet de créer des applications iOS et Android sans écrire une seule ligne de code. J'y ai développé des fonctionnalités côté back-end comme côté front-end.",
    projects: [
      "Systemik RH (plateforme de formation pour les RH)",
      "Kaltaresa (réservation restaurant & beauté)",
    ],
    stack: ["WordPress", "JavaScript", "PHP", "Flutter", "React", "CI/CD"],
    tools: ["Scrum", "Jira", "GitLab", "Slack"],
  },
  {
    role: "Front-End Manager",
    company: "LeLynx.fr",
    period: "Mars 2021 — Nov. 2021",
    description:
      "Le Lynx est un comparateur d'assurances en ligne. J'y ai développé des fonctionnalités et encadré une équipe de deux développeurs.",
    projects: ["LeLynx.fr", "Demenagez-malynx.fr"],
    stack: ["WordPress", "JavaScript", "PHP", "Angular", "CI/CD"],
    tools: ["Scrum", "Jira", "Bitbucket", "Trello", "Slack"],
  },
  {
    role: "Développeur Fullstack",
    company: "ImagineApp",
    period: "Juil. 2019 — Janv. 2021",
    description: "ImagineApp est une ESN.",
  },
  {
    role: "Développeur Front-End",
    company: "SQLI",
    period: "Sept. 2018 — Mai 2019",
    description: "SQLI est une ESN.",
  },
  {
    role: "Développeur Fullstack",
    company: "Eexpand",
    period: "Mai 2017 — Sept. 2018",
    description: "Eexpand édite un LinkedIn de l'import-export.",
  },
  {
    role: "Lead Tech Front",
    company: "Publicis Sapient (ex-DigitasLBi)",
    period: "Juin 2015 — Nov. 2015",
    description: "Publicis Sapient est un acteur digital du groupe Publicis.",
  },
  {
    role: "CTO",
    company: "MeetMyJob",
    period: "Oct. 2014 — Mai 2015",
    description:
      "MeetMyJob était une startup qui proposait aux particuliers de découvrir les métiers de l'artisanat.",
  },
  {
    role: "Digital Activation Manager",
    company: "The Coca-Cola Company France",
    period: "Déc. 2013 — Oct. 2014",
    description: "Au sein de Coca-Cola, j'ai travaillé sur les 12 sites des 12 marques du groupe.",
  },
  {
    role: "Chef de projet web",
    company: "Tequila Rapido, Publicis Modem…",
    period: "Mars 2011 — Juin 2013",
    description:
      "Après mes études à Hétic, j'ai travaillé aussi bien pour de petites agences de communication que pour de très grands groupes.",
  },
];

export const education: Education[] = [
  {
    school: "OpenClassrooms",
    period: "2021 — 2022",
    description: "Formation de développeur d'applications JavaScript / React.",
  },
  {
    school: "Georgia Tech",
    period: "2021 — 2022",
    description: "Certification en Innovation Leadership.",
  },
  {
    school: "Hétic",
    period: "2007 — 2010",
    description:
      "Master d'expert en ingénierie et management des technologies de l'information et de la communication.",
  },
];

/** Année de début de carrière, utilisée pour le compteur d'années d'expérience. */
export const careerStartYear = 2011;
