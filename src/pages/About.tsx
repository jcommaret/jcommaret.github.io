import { useState } from 'react';
import { IonIcon } from '@ionic/react';
// Images
import img from '../assets/img/images';
// Icons
import { closeOutline } from 'ionicons/icons';

interface Testimonial {
  image: string;
  name: string;
  text: string;
}

function About() {
    const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial>({
        image: '',
        name: '',
        text: ''
    });
    
    const openModal = (image: string, name: string, text: string) => {
        setSelectedTestimonial({ image, name, text });
        const modalContainer = document.querySelector('.modal-container');
        const overlay = document.querySelector('.overlay');
        
        if (modalContainer && overlay) {
            modalContainer.classList.add('active');
            overlay.classList.add('active');
        }
    };
    
    const closeModal = () => {
        const modalContainer = document.querySelector('.modal-container');
        const overlay = document.querySelector('.overlay');
        
        if (modalContainer && overlay) {
            modalContainer.classList.remove('active');
            overlay.classList.remove('active');
        }
    };

    return(
            <article className="about active" data-page="about">
                <header>
                <h2 className="h2 article-title">A propos</h2>
            </header>

            <section className="about-text">
                <p>Je suis un développeur web et mobile basé à Paris.</p>
                <p>Avec un regard porté sur les perfonmances, je code, je manage, et j'innove.</p>
                <p>Polyvalent, j'ai déjà travaillé pour des grands groupes internationnaux mais également pour des startups. J'ai une très bonne maitrise de la chaine de production grâce à des expériences en gestion de projet technique et fonctionnelle.</p>
            </section>
        
            <section className="service">
                <h3 className="h3 service-title">Activités</h3>
                <ul className="service-list">
                    <li className="service-item">
                    <div className="service-icon-box">
                        <img className='service-icon-icon' src={img.iconDev} alt="Web development icon" width="40" />
                    </div>
                    <div className="service-content-box">
                        <h4 className="h4 service-item-title">Lead Front</h4>
                        <p className="service-item-text">Lead d'équipe, Scrum, Kanban, mise en place de CI/CD, gestion des niveau de seniorité, de compétences...</p>
                    </div>
                    </li>
                    <li className="service-item">
                    <div className="service-icon-box">
                        <img src={img.iconApp} alt="mobile app icon" width="40" />
                    </div>
                    <div className="service-content-box">
                        <h4 className="h4 service-item-title">Applications mobile</h4>
                        <p className="service-item-text">Dévelopemment d'applications, de sites webs, en utilisant React, Vite, Flutter, Wordpress...</p>
                    </div>
                    </li>
                </ul>
            </section>
            
            <section className="testimonials">
                <h3 className="h3 testimonials-title">Témoignages</h3>
                <ul className="testimonials-list">
                    <li className="testimonials-item">
                    <div className="content-card" data-testimonials-item onClick={() => openModal(img.avatarImage1, 'Rhose E.', "I had the pleasure to work with Jérôme and if you need someone who has great managerial skills and who is also a technical profile, you should definitely hire him. His knowledge of the production chain makes him great at doing what he does. He is a person who can adapt and learn quickly, and his mobile / e-commerce and localisation skills, makes him a valuable person in every teams, to build really great digital product.")}>
                        <figure className="testimonials-avatar-box">
                            <img src={img.avatarImage1} alt="Rhose E." data-testimonials-avatar />
                        </figure>
                        <h4 className="h4 testimonials-item-title" data-testimonials-title>Rhose E.</h4>
                        <div className="testimonials-text" data-testimonials-text>
                            <p>I had the pleasure to work with Jérôme and if you need someone who has great managerial skills and who is also a technical profile, you should definitely hire him. His knowledge of the production chain makes him great at doing what he does. He is a person who can adapt and learn quickly, and his mobile / e-commerce and localisation skills, makes him a valuable person in every teams, to build really great digital product.</p>
                        </div>
                    </div>
                    </li>
                    <li className="testimonials-item">
                    <div className="content-card" data-testimonials-item onClick={() => openModal(img.avatarImage2, 'Nathalie D.', "Je n'ai pas rencontré beaucoup de personnes comme Jérôme dans ma carrière. J'ai eu l'occasion de travailler avec lui pendant 6 mois alors qu'il était \"Web & Mobile Project Manager \"chez Régime Coach et nous avons collaboré sur des projets d'envergure. C'est un geek assumé, qui paradoxalement a su faire preuve d'une grande pédagogie et de proximité avec les équipes métiers. Très au fait de l'écosystème dans lequel il a développé ses domaines de compétences, Jérôme est un expert en gestion de projets digitaux tant sur le plan technique que stratégique. Il est également capable d'une grande adaptabilité qui peut se révéler un véritable atout pour toute entreprise qui l'emploierait.")}>
                        <figure className="testimonials-avatar-box">
                            <img src={img.avatarImage2} alt="Nathalie D." data-testimonials-avatar />
                        </figure>
                        <h4 className="h4 testimonials-item-title" data-testimonials-title>Nathalie D.</h4>
                        <div className="testimonials-text" data-testimonials-text>
                            <p>Je n'ai pas rencontré beaucoup de personnes comme Jérôme dans ma carrière. J'ai eu l'occasion de travailler avec lui pendant 6 mois alors qu'il était "Web & Mobile Project Manager "chez Régime Coach et nous avons collaboré sur des projets d'envergure. C'est un geek assumé, qui paradoxalement a su faire preuve d'une grande pédagogie et de proximité avec les équipes métiers. Très au fait de l'écosystème dans lequel il a développé ses domaines de compétences, Jérôme est un expert en gestion de projets digitaux tant sur le plan technique que stratégique. Il est également capable d'une grande adaptabilité qui peut se révéler un véritable atout pour toute entreprise qui l'emploierait.</p>
                        </div>
                    </div>
                    </li>
                    <li className="testimonials-item">
                    <div className="content-card" data-testimonials-item onClick={() => openModal(img.avatarImage3, 'Camille R.', "J'ai toujours connu Jérôme avec des idées fraîches, créatives et ambitieuses. Nous avons eu l'occasion de travailler ensemble pour le compte d'un de mes projets, sur des problématiques techniques et marketing pointues. Faire l'expérience de ses talents et expertises n'a pas été une surprise, Jérôme est quelqu'un de vraiment très très fiable et passionné par son métier. C'est le genre de personne qui pousse les autres vers le haut et qui le fait avec beaucoup de sentiments et de modestie.")}>
                        <figure className="testimonials-avatar-box">
                            <img src={img.avatarImage3} alt="Camille R." data-testimonials-avatar />
                        </figure>
                        <h4 className="h4 testimonials-item-title" data-testimonials-title>Camille R.</h4>
                        <div className="testimonials-text" data-testimonials-text>
                            <p>J'ai toujours connu Jérôme avec des idées fraîches, créatives et ambitieuses. Nous avons eu l'occasion de travailler ensemble pour le compte d'un de mes projets, sur des problématiques techniques et marketing pointues. Faire l'expérience de ses talents et expertises n'a pas été une surprise, Jérôme est quelqu'un de vraiment très très fiable et passionné par son métier. C'est le genre de personne qui pousse les autres vers le haut et qui le fait avec beaucoup de sentiments et de modestie.</p>
                        </div>
                    </div>
                    </li>
                    <li className="testimonials-item">
                    <div className="content-card" data-testimonials-item onClick={() => openModal(img.avatarImage4, 'Julien K.', "Ce fut un plaisir de travailler avec Jerome dans le cadre de la plateforme Preditt. Ses compétences et son écoute ont permis d'atteindre nos objectifs !")}>
                        <figure className="testimonials-avatar-box">
                            <img src={img.avatarImage4} alt="Julien K." width="30" data-testimonials-avatar />
                        </figure>
                        <h4 className="h4 testimonials-item-title" data-testimonials-title>Julien K.</h4>
                        <div className="testimonials-text" data-testimonials-text>
                            <p>Ce fut un plaisir de travailler avec Jerome dans le cadre de la plateforme Preditt. Ses compétences et son écoute ont permis d'atteindre nos objectifs !</p>
                        </div>
                    </div>
                    </li>
                </ul>
            </section>
            
            <div className="modal-container" data-modal-container>
                <div className="overlay" data-overlay onClick={closeModal}></div>
                <section className="testimonials-modal">
                    <button className="modal-close-btn" data-modal-close-btn aria-label="Fermer la fenêtre" onClick={closeModal}>
                        <IonIcon icon={closeOutline}></IonIcon>
                    </button>
                    <div className="modal-img-wrapper">
                    <figure className="modal-avatar-box">
                        <img src={selectedTestimonial.image} alt={selectedTestimonial.name} width="80" data-modal-img />
                    </figure>
                        <img src={img.iconQuote} alt="quote icon" />
                    </div>
                    <div className="modal-content">
                        <h4 className="h3 modal-title" data-modal-title>{selectedTestimonial.name}</h4>
                        <div data-modal-text>
                            <p>{selectedTestimonial.text}</p>
                        </div>
                    </div>
                </section>
            </div>
        </article> 
    );
}
export default About;