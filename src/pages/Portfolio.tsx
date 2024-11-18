// Library
import { IonIcon } from "@ionic/react";
import { useState } from 'react';
import { eyeOutline } from "ionicons/icons";
import img from '../assets/img/images';

import Modal from '../components/modal';
import projectsData from '../data/projects.json';
import { Project } from '../types/types';

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project>({
    id: 0,
    image: '',
    title: '',
    category: '',
    content: {
      text: '',
      technologies: '',
      link: ''
    }
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = (project: Project) => {
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
              id: project.id,
              image: img[project.image as keyof typeof img],
              title: project.title,
              category: project.category,
              content: project.content
            })}>
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>
                <img src={img[project.image as keyof typeof img]} alt={project.title} loading="eager" />
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
