import React, { useEffect, useState } from 'react';
import { Experience } from '../../core/domain/entities/Experience';
import { GetExperiencesUseCase } from '../../core/application/GetExperiencesUseCase';
import { InMemoryExperienceRepository } from '../secondary/InMemoryExperienceRepository';

export const ExperienceList: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const repository = new InMemoryExperienceRepository();
        const useCase = new GetExperiencesUseCase(repository);
        const experiences = await useCase.execute();
        setExperiences(experiences);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <div className="experiences-timeline">
      {experiences.map((experience) => (
        <div key={experience.id} className="experience-card">
          <div className="experience-header">
            <h3>{experience.position}</h3>
            <span className="company">{experience.company}</span>
          </div>
          <div className="experience-dates">
            {experience.startDate.toLocaleDateString()} -{' '}
            {experience.endDate
              ? experience.endDate.toLocaleDateString()
              : 'Présent'}
          </div>
          <div className="experience-location">{experience.location}</div>
          <p className="experience-description">{experience.description}</p>
          <div className="experience-technologies">
            {experience.technologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
          <ul className="experience-achievements">
            {experience.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}; 