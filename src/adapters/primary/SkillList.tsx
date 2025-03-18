import React, { useEffect, useState } from 'react';
import { Skill } from '../../core/domain/entities/Skill';
import { GetSkillsUseCase } from '../../core/application/GetSkillsUseCase';
import { InMemorySkillRepository } from '../secondary/InMemorySkillRepository';

export const SkillList: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const repository = new InMemorySkillRepository();
        const useCase = new GetSkillsUseCase(repository);
        const skills = await useCase.execute(selectedCategory);
        setSkills(skills);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, [selectedCategory]);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <div className="skills-section">
      <div className="category-filters">
        <button
          className={!selectedCategory ? 'active' : ''}
          onClick={() => setSelectedCategory(undefined)}
        >
          Tous
        </button>
        {categories.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            {skill.icon && <img src={skill.icon} alt={skill.name} />}
            <h3>{skill.name}</h3>
            <div className="skill-level">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`level-dot ${i < skill.level ? 'filled' : ''}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 