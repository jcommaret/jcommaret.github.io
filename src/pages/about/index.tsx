// External dependencies
import { IonIcon } from '@ionic/react';
import { addOutline } from 'ionicons/icons';

// Internal components & hooks
import Modal from '../../components/modal';
import { useModal } from '../../hooks/useModal';

// Types
import { Testimonial } from '../../types/types';

// Assets
import img from '../../assets/img/images';

// Data
import aboutData from '../../data/about.json';

// Styles
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
                <h2 className="page-title">A propos</h2>
            </header>

            <section className="about-text">
                {aboutData.aboutText.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </section>

            <section className="service">
                <h3>Activités</h3>
                <ul className="service-list">
                    {aboutData.services.map((service, index) => (
                        <li key={index} className="service-item">
                            <div className="service-icon-box">
                                <img className='service-icon-icon' src={img[service.icon as keyof typeof img]} alt="Web development icon" width="40" />
                            </div>
                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">{service.title}</h4>
                                <p className="service-item-text">{service.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        
            <section className="testimonials">
                <h3>Témoignages</h3>
                <ul className="testimonials-list">
                    {aboutData.testimonials.map((testimonial, index) => (
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
                                <div className="testimonials-expand-icon-wrapper">
                                    <IonIcon icon={addOutline} className="testimonials-expand-icon" />
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