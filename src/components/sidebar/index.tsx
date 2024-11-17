import { IonIcon } from '@ionic/react';
import { NavLink } from 'react-router-dom';
import { logoGithub, mailOutline, locationOutline, logoTwitter, logoMedium } from 'ionicons/icons';
import img from '../../assets/img/images';
import './index.scss';



function Sidebar() {
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={img.myAvatar} alt="Jérôme Commaret" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Jérôme Commaret">Jérôme Commaret</h1>
          <p className="title">Code, manage, innove</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn aria-label="Contactez moi">
          <span>
            <a href="mailto:jcommaret@gmail.com?subject=Contact%20depuis%20jcommaret.github.io&body=Bonjour%20J%C3%A9r%C3%B4me%2C%0A%0AJe%20souhaite%20travailler%20avec%20vous.%0A%0AMes%20coordonn%C3%A9es%20%3A%0A%0ANom%20%3A%20%0APr%C3%A9nom%20%3A%20%0AT%C3%A9l%C3%A9phone%20%3A%20%0AEmail%20%3A%20%0A%0ACordialement">
              Contactez-moi
            </a>
          </span>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={mailOutline}></IonIcon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <NavLink to="mailto:jcommaret@gmail.com" className="contact-link">jcommaret@gmail.com</NavLink>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={locationOutline}></IonIcon>  
            </div>

            <div className="contact-info">
              <p className="contact-title">Localisation</p>
              <address>Paris, FR</address>
            </div>

          </li>
        </ul>

        <div className="separator"></div>
        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <IonIcon icon={logoTwitter}></IonIcon>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <IonIcon icon={logoMedium}></IonIcon>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <IonIcon icon={logoGithub}></IonIcon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;