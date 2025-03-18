export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
  icon?: string;
}

export class SkillEntity implements Skill {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly category: string,
    public readonly level: number,
    public readonly icon?: string
  ) {}
} 