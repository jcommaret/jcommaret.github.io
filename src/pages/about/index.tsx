// External dependencies
import { IonIcon } from '@ionic/react';
import { addOutline } from 'ionicons/icons';

// Internal components & hooks
import Modal from '../../components/modal';
import { useModal } from '../../hooks/useModal';

// Types
import { Testimonial } from '../../types/types';

// Assets & data
import img from '../../assets/img/images';
import testimonialData from '../../data/testimonials.json';
import './index.scss';

function About() {
    const { 
        isModalOpen, 
        selectedItem: selectedTestimonial, 
        openModal, 
        closeModal 
    } = useModal<Testimonial>({
        image: '',
        title: '',
        content: {
            text: ''
        }
    });

    return(
            <article className="about active" data-page="about">
                <header>
                <h2 className="h2 article-title">A propos</h2>
            </header>

            <section className="about-text">
                <p>Je suis un développeur web et mobile basé à Paris.</p>
                <p>Avec un regard porté sur les performances, je code, je manage, et j'innove.</p>
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
                    {testimonialData.testimonials.map((testimonial, index) => (
                        <li key={index} className="testimonials-item">
                            <div 
                                className="content-card" 
                                data-testimonials-item 
                                onClick={() => openModal({
                                    image: img[testimonial.image as keyof typeof img],
                                    title: testimonial.title,
                                    content: testimonial.content
                                })}
                            >
                                <figure className="testimonials-avatar-box">
                                    <img 
                                        src={img[testimonial.image as keyof typeof img]} 
                                        alt={testimonial.title} 
                                        data-testimonials-avatar 
                                    />
                                </figure>
                                <h4 className="h4 testimonials-item-title">
                                    {testimonial.title}
                                </h4>
                                <div className="testimonials-text">
                                    <p>{testimonial.content.text}</p>
                                </div>
                                <div className="testimonial-expand-icon-wrapper">
                                    <IonIcon icon={addOutline} className="testimonial-expand-icon" />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            
            <Modal 
                isOpen={isModalOpen}
                onClose={closeModal}
                type="testimonial"
                data={selectedTestimonial}
            />
        </article> 
    );
}
export default About;