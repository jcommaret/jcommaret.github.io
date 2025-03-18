import { Experience } from '../domain/entities/Experience';
import { ExperienceRepository } from '../../ports/ExperienceRepository';

export class GetExperiencesUseCase {
  constructor(private readonly experienceRepository: ExperienceRepository) {}

  async execute(): Promise<Experience[]> {
    return this.experienceRepository.getAllExperiences();
  }
} 