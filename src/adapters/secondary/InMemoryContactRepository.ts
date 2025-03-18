import { Contact, ContactEntity } from '../../core/domain/entities/Contact';
import { ContactRepository } from '../../ports/ContactRepository';

export class InMemoryContactRepository implements ContactRepository {
  private contact: Contact = new ContactEntity(
    '1',
    'contact@example.com',
    '+33 6 00 00 00 00',
    'https://linkedin.com/in/example',
    'https://github.com/example',
    'https://twitter.com/example'
  );

  async getContact(): Promise<Contact> {
    return this.contact;
  }

  async updateContact(contact: Partial<Contact>): Promise<Contact> {
    this.contact = {
      ...this.contact,
      ...contact,
      id: this.contact.id // Ensure id remains unchanged
    };
    return this.contact;
  }
} 