import React, { useEffect, useState } from 'react';
import { Project } from '../../core/domain/entities/Project';
import { GetProjectsUseCase } from '../../core/application/GetProjectsUseCase';
import { InMemoryProjectRepository } from '../secondary/InMemoryProjectRepository';

export const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const repository = new InMemoryProjectRepository();
        const useCase = new GetProjectsUseCase(repository);
        const projects = await useCase.execute();
        setProjects(projects);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img src={project.imageUrl} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="technologies">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
          <div className="project-links">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Voir le projet
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}; 