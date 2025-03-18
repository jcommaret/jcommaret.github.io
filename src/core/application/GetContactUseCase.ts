import { Contact } from '../domain/entities/Contact';
import { ContactRepository } from '../../ports/ContactRepository';

export class GetContactUseCase {
  constructor(private readonly contactRepository: ContactRepository) {}

  async execute(): Promise<Contact> {
    return this.contactRepository.getContact();
  }
} 