import { Skill } from '../core/domain/entities/Skill';

export interface SkillRepository {
  getAllSkills(): Promise<Skill[]>;
  getSkillsByCategory(category: string): Promise<Skill[]>;
  getSkillById(id: string): Promise<Skill | null>;
  createSkill(skill: Omit<Skill, 'id'>): Promise<Skill>;
  updateSkill(id: string, skill: Partial<Skill>): Promise<Skill>;
  deleteSkill(id: string): Promise<void>;
} 