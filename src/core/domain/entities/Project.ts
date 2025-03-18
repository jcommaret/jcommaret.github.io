export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  startDate: Date;
  githubUrl?: string;
  liveUrl?: string;
  endDate?: Date;
}

export class ProjectEntity implements Project {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly technologies: string[],
    public readonly imageUrl: string,
    public readonly startDate: Date,
    public readonly githubUrl?: string,
    public readonly liveUrl?: string,
    public readonly endDate?: Date
  ) {}
} 