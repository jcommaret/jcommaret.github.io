import { Contact } from '../core/domain/entities/Contact';

export interface ContactRepository {
  getContact(): Promise<Contact>;
  updateContact(contact: Partial<Contact>): Promise<Contact>;
} 