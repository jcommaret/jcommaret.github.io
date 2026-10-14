import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../content/projects";
import { pageMeta } from "../lib/seo";
import type { Route } from "./+types/projects";

export const meta: Route.MetaFunction = () =>
  pageMeta({
    title: "Projets — Jérôme Commaret",
    description:
      "Mes réalisations en développement web et mobile : applications React Native, intégrations de Mistral AI, outils open source et projets personnels.",
    path: "/projets/",
  });

export default function Projects() {
  return (
    <>
      <header className="container page-header rise">
        <p className="eyebrow">Projets</p>
        <h1 className="display">
          Ce que j'ai <em>construit</em>
        </h1>
        <p className="lead">
          Applications mobiles, contributions open source et expérimentations autour de l'IA
          générative. Chaque projet renvoie vers son code source.
        </p>
      </header>

      <section className="section" aria-label="Liste des projets">
        <ul className="container project-grid">
          {projects.map((project) => (
            <li key={project.slug} className="reveal">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
