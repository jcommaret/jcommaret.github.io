import type { Project } from "../content/projects";
import { Icon } from "./Icon";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className={`project-card__media project-card__media--${project.fit ?? "cover"}`}>
        <img src={project.image} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="project-card__body">
        <p className="project-card__kind">{project.kind}</p>
        <h3 className="project-card__title">
          <a href={project.href} className="project-card__link" target="_blank" rel="noreferrer">
            {project.title}
          </a>
          <Icon name="arrow-up-right" size={18} />
        </h3>
        <p className="project-card__description">{project.description}</p>
        <ul className="tags" aria-label="Technologies">
          {project.stack.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
