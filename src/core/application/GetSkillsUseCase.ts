import { Skill } from '../domain/entities/Skill';
import { SkillRepository } from '../../ports/SkillRepository';

export class GetSkillsUseCase {
  constructor(private readonly skillRepository: SkillRepository) {}

  async execute(category?: string): Promise<Skill[]> {
    if (category) {
      return this.skillRepository.getSkillsByCategory(category);
    }
    return this.skillRepository.getAllSkills();
  }
} 