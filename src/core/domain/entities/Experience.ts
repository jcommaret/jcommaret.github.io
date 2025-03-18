export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  location: string;
  technologies: string[];
  achievements: string[];
}

export class ExperienceEntity implements Experience {
  constructor(
    public readonly id: string,
    public readonly company: string,
    public readonly position: string,
    public readonly description: string,
    public readonly startDate: Date,
    public readonly location: string,
    public readonly technologies: string[],
    public readonly achievements: string[],
    public readonly endDate?: Date
  ) {}
} 