import { About, AboutEntity } from '../../core/domain/entities/About';
import { AboutRepository } from '../../ports/AboutRepository';

export class InMemoryAboutRepository implements AboutRepository {
  private about: About = new AboutEntity(
    '1',
    'John Doe',
    'Développeur Full Stack',
    'Passionné par le développement web et les nouvelles technologies',
    '/assets/photo.jpg',
    '/assets/cv.pdf'
  );

  async getAbout(): Promise<About> {
    return this.about;
  }

  async updateAbout(about: Partial<About>): Promise<About> {
    this.about = {
      ...this.about,
      ...about,
      id: this.about.id // Ensure id remains unchanged
    };
    return this.about;
  }
} 