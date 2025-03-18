import { About } from '../core/domain/entities/About';

export interface AboutRepository {
  getAbout(): Promise<About>;
  updateAbout(about: Partial<About>): Promise<About>;
} 