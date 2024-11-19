import { useModal } from '../hooks/useModal';

import { Project } from '../types/types';
import Modal from '../components/modal';
import img from '../assets/img/images';
import projectsData from '../data/projects.json';

function Portfolio() {
  const { 
    isModalOpen, 
    selectedItem: selectedProject, 
    openModal, 
    closeModal 
  } = useModal<Project>({
    image: '',
    title: '',
    category: '',
    content: {
      text: '',
      technologies: '',
      link: ''
    }
  });
  
  return (
    <article className="portfolio active">
      <header>
        <h2 className="h2 article-title">Mes projets</h2>
      </header>

      <section className="projects">
        <ul className="project-list">
          {projectsData.projects.map((project, index) => (
            <li key={index} className="project-item active" onClick={() => openModal({
              image: img[project.image as keyof typeof img],
              title: project.title,
              category: project.category,
              content: project.content
            })}>
              <figure className="project-img">
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
        type="project"
        data={selectedProject}
      />
    </article>
  );
}
export default Portfolio;
