import { Experience } from '../core/domain/entities/Experience';

export interface ExperienceRepository {
  getAllExperiences(): Promise<Experience[]>;
  getExperienceById(id: string): Promise<Experience | null>;
  createExperience(experience: Omit<Experience, 'id'>): Promise<Experience>;
  updateExperience(id: string, experience: Partial<Experience>): Promise<Experience>;
  deleteExperience(id: string): Promise<void>;
} 