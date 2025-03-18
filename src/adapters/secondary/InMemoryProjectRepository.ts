import { Project, ProjectEntity } from '../../core/domain/entities/Project';
import { ProjectRepository } from '../../ports/ProjectRepository';

export class InMemoryProjectRepository implements ProjectRepository {
  private projects: Project[] = [];

  async getAllProjects(): Promise<Project[]> {
    return this.projects;
  }

  async getProjectById(id: string): Promise<Project | null> {
    return this.projects.find(project => project.id === id) || null;
  }

  async createProject(project: Omit<Project, 'id'>): Promise<Project> {
    const newProject = new ProjectEntity(
      crypto.randomUUID(),
      project.title,
      project.description,
      project.technologies,
      project.imageUrl,
      project.startDate,
      project.githubUrl,
      project.liveUrl,
      project.endDate
    );
    this.projects.push(newProject);
    return newProject;
  }

  async updateProject(id: string, project: Partial<Project>): Promise<Project> {
    const index = this.projects.findIndex(p => p.id === id);
    if (index === -1) {
      throw new Error(`Project with id ${id} not found`);
    }

    const updatedProject = {
      ...this.projects[index],
      ...project,
      id // Ensure id remains unchanged
    };

    this.projects[index] = updatedProject;
    return updatedProject;
  }

  async deleteProject(id: string): Promise<void> {
    const index = this.projects.findIndex(p => p.id === id);
    if (index === -1) {
      throw new Error(`Project with id ${id} not found`);
    }
    this.projects.splice(index, 1);
  }
} 