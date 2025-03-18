import React, { useEffect, useState } from 'react';
import { About } from '../../core/domain/entities/About';
import { GetAboutUseCase } from '../../core/application/GetAboutUseCase';
import { InMemoryAboutRepository } from '../secondary/InMemoryAboutRepository';

export const AboutSection: React.FC = () => {
  const [about, setAbout] = useState<About | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const repository = new InMemoryAboutRepository();
        const useCase = new GetAboutUseCase(repository);
        const aboutData = await useCase.execute();
        setAbout(aboutData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;
  if (!about) return null;

  return (
    <section className="about-section">
      <div className="about-content">
        {about.photo && (
          <img src={about.photo} alt={about.name} className="profile-photo" />
        )}
        <div className="about-text">
          <h1>{about.name}</h1>
          <h2>{about.title}</h2>
          <p>{about.description}</p>
          {about.resume && (
            <a href={about.resume} className="resume-button" target="_blank" rel="noopener noreferrer">
              Télécharger mon CV
            </a>
          )}
        </div>
      </div>
    </section>
  );
}; 