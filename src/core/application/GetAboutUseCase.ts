import { About } from '../domain/entities/About';
import { AboutRepository } from '../../ports/AboutRepository';

export class GetAboutUseCase {
  constructor(private readonly aboutRepository: AboutRepository) {}

  async execute(): Promise<About> {
    return this.aboutRepository.getAbout();
  }
} 