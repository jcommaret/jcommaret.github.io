import { Project } from '../core/domain/entities/Project';

export interface ProjectRepository {
  getAllProjects(): Promise<Project[]>;
  getProjectById(id: string): Promise<Project | null>;
  createProject(project: Omit<Project, 'id'>): Promise<Project>;
  updateProject(id: string, project: Partial<Project>): Promise<Project>;
  deleteProject(id: string): Promise<void>;
} 