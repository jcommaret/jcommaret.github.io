import { Experience, ExperienceEntity } from '../../core/domain/entities/Experience';
import { ExperienceRepository } from '../../ports/ExperienceRepository';

export class InMemoryExperienceRepository implements ExperienceRepository {
  private experiences: Experience[] = [];

  async getAllExperiences(): Promise<Experience[]> {
    return this.experiences;
  }

  async getExperienceById(id: string): Promise<Experience | null> {
    return this.experiences.find(experience => experience.id === id) || null;
  }

  async createExperience(experience: Omit<Experience, 'id'>): Promise<Experience> {
    const newExperience = new ExperienceEntity(
      crypto.randomUUID(),
      experience.company,
      experience.position,
      experience.description,
      experience.startDate,
      experience.location,
      experience.technologies,
      experience.achievements,
      experience.endDate
    );
    this.experiences.push(newExperience);
    return newExperience;
  }

  async updateExperience(id: string, experience: Partial<Experience>): Promise<Experience> {
    const index = this.experiences.findIndex(e => e.id === id);
    if (index === -1) {
      throw new Error(`Experience with id ${id} not found`);
    }

    const updatedExperience = {
      ...this.experiences[index],
      ...experience,
      id // Ensure id remains unchanged
    };

    this.experiences[index] = updatedExperience;
    return updatedExperience;
  }

  async deleteExperience(id: string): Promise<void> {
    const index = this.experiences.findIndex(e => e.id === id);
    if (index === -1) {
      throw new Error(`Experience with id ${id} not found`);
    }
    this.experiences.splice(index, 1);
  }
} 