export const intro = [
  "Je suis un développeur front-end basé à Paris. À l'aise aussi bien sur le web que sur mobile, je suis à votre disposition pour réaliser vos projets.",
  "Avec un regard porté sur les performances, je code, je manage, et j'innove.",
  "Polyvalent, j'ai déjà travaillé pour des grands groupes internationaux mais également pour des startups.",
  "J'ai une très bonne maîtrise de la chaîne de production grâce à des expériences en gestion de projet technique et fonctionnelle.",
];

export type ServiceIcon = "lead" | "mobile";

export const services: { icon: ServiceIcon; title: string; description: string }[] = [
  {
    icon: "lead",
    title: "Lead Front",
    description:
      "Lead d'équipe, Scrum, Kanban, mise en place de CI/CD, gestion des niveaux de séniorité et de compétences…",
  },
  {
    icon: "mobile",
    title: "Applications web & mobile",
    description:
      "Développement d'applications et de sites web avec React, React Native, Vite, Flutter, WordPress…",
  },
];

export const testimonials: { author: string; quote: string; lang?: string }[] = [
  {
    author: "Sonja T.",
    quote:
      "J'ai eu l'occasion de travailler sur plusieurs projets avec Jérôme alors que j'étais responsable éditoriale. Ce dernier est toujours à l'écoute des demandes qui lui sont faites. Extrêmement compétent dans son domaine, il sait être pédagogue quand il le faut. Il sait prioriser et travaille toujours avec beaucoup de sérieux et d'enthousiasme. Ses connaissances des nouvelles technologies et des nouveaux médias font de lui un élément indispensable pour une entreprise. Il sait relever les challenges qui lui sont proposés.",
  },
  {
    author: "Camille R.",
    quote:
      "J'ai toujours connu Jérôme avec des idées fraîches, créatives et ambitieuses. Nous avons eu l'occasion de travailler ensemble pour le compte d'un de mes projets, sur des problématiques techniques et marketing pointues. Faire l'expérience de ses talents et expertises n'a pas été une surprise, Jérôme est quelqu'un de vraiment très très fiable et passionné par son métier. C'est le genre de personne qui pousse les autres vers le haut et qui le fait avec beaucoup de sentiments et de modestie.",
  },
  {
    author: "Nathalie D.",
    quote:
      "Je n'ai pas rencontré beaucoup de personnes comme Jérôme dans ma carrière. J'ai eu l'occasion de travailler avec lui pendant 6 mois alors qu'il était Web & Mobile Project Manager chez Régime Coach et nous avons collaboré sur des projets d'envergure. C'est un geek assumé, qui paradoxalement a su faire preuve d'une grande pédagogie et de proximité avec les équipes métiers. Très au fait de l'écosystème dans lequel il a développé ses domaines de compétences, Jérôme est un expert en gestion de projets digitaux tant sur le plan technique que stratégique. Il est également capable d'une grande adaptabilité qui peut se révéler un véritable atout pour toute entreprise qui l'emploierait.",
  },
  {
    author: "Rose E.",
    lang: "en",
    quote:
      "I had the pleasure to work with Jérôme and if you need someone who has great managerial skills and who is also a technical profile, you should definitely hire him. His knowledge of the production chain makes him great at doing what he does. He is a person who can adapt and learn quickly, and his mobile / e-commerce and localisation skills, makes him a valuable person in every teams, to build really great digital product.",
  },
];
