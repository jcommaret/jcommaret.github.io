// Library
import { IonIcon } from '@ionic/react';

// Icons
import { chevronDown } from 'ionicons/icons';
import { mailOutline } from 'ionicons/icons';
import { calendarOutline } from 'ionicons/icons';
import { locationOutline } from 'ionicons/icons';
import { phonePortraitOutline } from 'ionicons/icons';
import { logoTwitter } from 'ionicons/icons';
import { logoInstagram } from 'ionicons/icons';

function Sidebar() {
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="./assets/images/my-avatar.png" alt="Richard hanrick" width="80"></img>
        </figure>
        <div className="info-content">
          <h1 className="name" title="Richard hanrick">Jérôme Commaret</h1>
          <p className="title">Lead / Front-End developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
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
              <a href="mailto:jcommaret@gmail.com" className="contact-link">jcommaret@gmail.com</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={phonePortraitOutline}></IonIcon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Téléphone</p>
              <a href="tel:+33.6.43.35.78.96" className="contact-link">+33.6.43.35.78.96</a>
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
              <IonIcon icon={logoInstagram}></IonIcon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;