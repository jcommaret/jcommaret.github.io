import { IonIcon } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import img from '../../assets/img/images';
import './index.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  content: {
    text: string;
    technologies?: string;
    link?: string;
  };
  type: 'testimonial' | 'project';
}

function Modal({ isOpen, onClose, image, title, content, type }: ModalProps) {
  return (
    <div className={`modal-container ${isOpen ? 'active' : ''}`}>
      <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
      <section className={`modal-content-wrapper ${type}`}>
        <button className="modal-close-btn" aria-label="Fermer la fenêtre" onClick={onClose}>
          <IonIcon icon={closeOutline}></IonIcon>
        </button>
        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <img src={image} alt={title} width="80" data-modal-img />
          </figure>
          {type === 'testimonial' && <img src={img.iconQuote} alt="quote icon" />}
        </div>
        <div className="modal-content">
          <h4 className="h3 modal-title">{title}</h4>
          <div>
            <p>{content.text}</p>
            {type === 'project' && content.technologies && (
              <p className="technologies">
                <strong>Technologies utilisées :</strong> {content.technologies}
              </p>
            )}
            {type === 'project' && content.link && (
              <a href={content.link} target="_blank" rel="noopener noreferrer" className="project-link">
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