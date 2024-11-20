import { IonIcon } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';

import { Project, Testimonial, ModalProps } from '../../types/types';

import './index.scss';

function Modal({ isOpen, onClose, type, data }: ModalProps) {
  const content = type === 'project' 
    ? (data as Project).content
    : (data as Testimonial).content;
    
  const isProject = type === 'project';
  const projectContent = isProject ? content as Project['content'] : null;
  
  return (
    <div className={`modal-container ${isOpen ? 'active' : ''}`}>
      <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
      <section className={`modal-content-wrapper ${type}`}>
        <button className="modal-close-btn" aria-label="Fermer la fenêtre" onClick={onClose}>
          <IonIcon icon={closeOutline}></IonIcon>
        </button>
        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <img src={data.image} alt={data.title} data-modal-img />
          </figure>
        </div>
        <div className="modal-content">
          <h4 className="h4 modal-title">{data.title}</h4>
          <div>
            <p>{content.text}</p>
            {isProject && projectContent?.technologies && (
              <p className="technologies">
                <strong>Technologies utilisées :</strong> {projectContent.technologies}
              </p>
            )}
            {isProject && projectContent?.link && (
              <a href={projectContent.link} target="_blank" rel="noopener noreferrer" className="project-link">
                Voir le projet
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Modal;