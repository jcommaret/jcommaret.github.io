// Library
import { IonIcon } from "@ionic/react";
import { useState } from 'react';

// Icons
import { eyeOutline } from "ionicons/icons";

// Images
import img from '../assets/img/images';

// Components
import Modal from '../components/modal';


function Portfolio() {
  const [selectedProject, setSelectedProject] = useState({
    image: '',
    title: '',
    content: {
      text: '',
      technologies: '',
      link: ''
    }
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <article className="portfolio active">
      <header>
        <h2 className="h2 article-title">Mes sides projects</h2>
      </header>

      <section className="projects">
        <ul className="project-list">
          
          <li className="project-item active" data-filter-item data-category="web development">
            <div onClick={() => openModal({
              image: img.projectImage1,
              title: 'Ce portfolio',
              content: {
                text: 'Portfolio personnel développé avec React et TypeScript',
                technologies: 'Gh-pages - Vite.js - React.js - Typescript',
                link: 'https://github.com/votre-repo'
              }
            })}>
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>
                <img src={img.projectImage1} alt="téhou" loading="eager" />
              </figure>
              <h3 className="project-title">Ce portfolio</h3>
              <p className="project-category">Gh-pages - Vite.js - React.js - Typescript</p>
            </div>
          </li>

          <li className="project-item active" data-filter-item data-category="web development">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>
                <img src={img.projectImage1} alt="téhou" loading="eager" />
              </figure>
              <h3 className="project-title">Téhou</h3>
              <p className="project-category">Application iOS/Android</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img
                  src={img.projectImage2}
                  alt="orizon"
                  loading="eager"
                />
              </figure>

              <h3 className="project-title">Rabmarac</h3>

              <p className="project-category">Application iOS/Android - Site web</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="web design"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img
                  src={img.projectImage3}
                  alt="fundo"
                  loading="eager"
                />
              </figure>

              <h3 className="project-title">Prorata</h3>

              <p className="project-category">Application iOS/Android - Site web</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="applications"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img
                  src={img.projectImage4}
                  alt="brawlhalla"
                  loading="eager"
                />
              </figure>

              <h3 className="project-title">GDEF</h3>

              <p className="project-category">Application iOS/Android</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="web design"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>
                <img src={img.projectImage1} alt="metaspark"
                  loading="eager"
                />
              </figure>
              <h3 className="project-title">Portfolio</h3>
              <p className="project-category">Thème Wordpress</p>
            </a>
          </li> 

          <li
            className="project-item  active"
            data-filter-item
            data-category="web design"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>
                <img src={img.projectImage1} alt="metaspark"
                  loading="eager"
                />
              </figure>
              <h3 className="project-title">Void</h3>
              <p className="project-category">Editeur de code propulsé par AI</p>
            </a>
          </li> 






        </ul>
      </section>

      <Modal 
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedProject.image}
        title={selectedProject.title}
        content={selectedProject.content}
        type="project"
      />
    </article>
  );
}
export default Portfolio;
