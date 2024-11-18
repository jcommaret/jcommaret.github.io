// Library
import { IonIcon } from "@ionic/react";
import { useState } from 'react';
import { eyeOutline } from "ionicons/icons";
import img from '../assets/img/images';

import Modal from '../components/modal';
import projectsData from '../data/projects.json';

// Définissez un type pour les clés possibles de l'objet img
type ImageKeys = keyof typeof img;

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
          {projectsData.projects.map((project) => (
            <li key={project.id} className="project-item active" onClick={() => openModal({
              image: img[project.image as ImageKeys],
              title: project.title,
              content: project.content
            })}>
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>
                <img src={img[project.image as ImageKeys]} alt={project.title} loading="eager" />
              </figure>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">{project.category}</p>
            </li>
          ))}
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
