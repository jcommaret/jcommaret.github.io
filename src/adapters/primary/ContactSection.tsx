import React, { useEffect, useState } from 'react';
import { Contact } from '../../core/domain/entities/Contact';
import { GetContactUseCase } from '../../core/application/GetContactUseCase';
import { InMemoryContactRepository } from '../secondary/InMemoryContactRepository';

export const ContactSection: React.FC = () => {
  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const repository = new InMemoryContactRepository();
        const useCase = new GetContactUseCase(repository);
        const contactData = await useCase.execute();
        setContact(contactData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;
  if (!contact) return null;

  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <div className="contact-info">
        <a href={`mailto:${contact.email}`} className="contact-item">
          <i className="fas fa-envelope"></i>
          {contact.email}
        </a>
        {contact.phone && (
          <a href={`tel:${contact.phone}`} className="contact-item">
            <i className="fas fa-phone"></i>
            {contact.phone}
          </a>
        )}
        {contact.linkedin && (
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
            <i className="fab fa-linkedin"></i>
            LinkedIn
          </a>
        )}
        {contact.github && (
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-item">
            <i className="fab fa-github"></i>
            GitHub
          </a>
        )}
        {contact.twitter && (
          <a href={contact.twitter} target="_blank" rel="noopener noreferrer" className="contact-item">
            <i className="fab fa-twitter"></i>
            Twitter
          </a>
        )}
      </div>
    </section>
  );
}; 