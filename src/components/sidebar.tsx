// Library
import { IonIcon } from '@ionic/react';
// Navlink
import { NavLink } from 'react-router-dom';

// Icons
import { chevronDown, logoGithub, mailOutline, calendarOutline, locationOutline, logoTwitter, logoMedium } from 'ionicons/icons';

// Images
import img from '../assets/img/images';

function Sidebar() {
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={img.myAvatar} alt="Jérôme Commaret" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Richard hanrick">Jérôme Commaret</h1>
          <p className="title">Développeur React</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn aria-label="Contactez moi">
          <span>Contactez-moi</span>
          <IonIcon icon={chevronDown}></IonIcon>
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
              <IonIcon icon={calendarOutline}></IonIcon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Date de naissance</p>
              <time dateTime="1982-04-18">18 Avril 1982</time>
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