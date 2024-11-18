import { IonIcon } from '@ionic/react';
import { NavLink } from 'react-router-dom';
import { logoGithub, mailOutline, locationOutline, logoTwitter, logoMedium } from 'ionicons/icons';
import img from '../../assets/img/images';
import './index.scss';
import { Contact, Social } from '../../types/types';

function Sidebar() {
  
  const contacts: Contact[] = [
    { icon: mailOutline, title: 'Email', link: 'mailto:jcommaret@gmail.com' },
    { icon: locationOutline, title: 'Localisation', link: 'https://www.google.com/maps/search/?api=1&query=Paris' },
  ];

  const socials: Social[] = [
    { icon: logoTwitter, link: 'https://twitter.com/jcommaret' },
    { icon: logoMedium, link: 'https://medium.com/@jcommaret' },
    { icon: logoGithub, link: 'https://github.com/jcommaret' },
  ];

  return (
    <aside className="sidebar">
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
          {contacts.map((contact, index) => (
            <li key={index} className="contact-item">
              <div className="icon-box">
                <IonIcon icon={contact.icon}></IonIcon>
              </div>
              <div className="contact-info">
                <p className="contact-title">{contact.title}</p>
                {contact.title === 'Email' ? (
                  <NavLink to={contact.link} className="contact-link">jcommaret@gmail.com</NavLink>
                ) : (
                  <address>Paris, FR</address>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="separator"></div>
        <ul className="social-list">
          {socials.map((social, index) => (
            <li key={index} className="social-item">
              <a href={social.link} className="social-link">
                <IonIcon icon={social.icon}></IonIcon>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;