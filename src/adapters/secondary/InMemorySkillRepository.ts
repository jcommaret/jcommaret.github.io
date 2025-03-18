import { Skill, SkillEntity } from '../../core/domain/entities/Skill';
import { SkillRepository } from '../../ports/SkillRepository';

export class InMemorySkillRepository implements SkillRepository {
  private skills: Skill[] = [];

  async getAllSkills(): Promise<Skill[]> {
    return this.skills;
  }

  async getSkillsByCategory(category: string): Promise<Skill[]> {
    return this.skills.filter(skill => skill.category === category);
  }

  async getSkillById(id: string): Promise<Skill | null> {
    return this.skills.find(skill => skill.id === id) || null;
  }

  async createSkill(skill: Omit<Skill, 'id'>): Promise<Skill> {
    const newSkill = new SkillEntity(
      crypto.randomUUID(),
      skill.name,
      skill.category,
      skill.level,
      skill.icon
    );
    this.skills.push(newSkill);
    return newSkill;
  }

  async updateSkill(id: string, skill: Partial<Skill>): Promise<Skill> {
    const index = this.skills.findIndex(s => s.id === id);
    if (index === -1) {
      throw new Error(`Skill with id ${id} not found`);
    }

    const updatedSkill = {
      ...this.skills[index],
      ...skill,
      id // Ensure id remains unchanged
    };

    this.skills[index] = updatedSkill;
    return updatedSkill;
  }

  async deleteSkill(id: string): Promise<void> {
    const index = this.skills.findIndex(s => s.id === id);
    if (index === -1) {
      throw new Error(`Skill with id ${id} not found`);
    }
    this.skills.splice(index, 1);
  }
} 