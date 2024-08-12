// Library
import { IonIcon } from "@ionic/react";

// Icons
import { chevronDown, eyeOutline } from "ionicons/icons";

// Images
import img from '../assets/img/images';

function Portfolio() {
  return (
    <article className="portfolio active">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="select-item">
            <button className="active" data-filter-btn aria-label="Tout les projets">
              Tout les projets
            </button>
          </li>
          <li className="select-item">
            <button data-select-item aria-label="Projets personnels">Personnal projects</button>
          </li>
          
          <li className="select-item">
            <button data-filter-btn aria-label="Applications">Applications</button>
          </li>

          <li className="select-item">
            <button data-filter-btn aria-label="Web dev">Web development</button>
          </li>
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>
              Select category
              
            </div>
            
            <ul className="select-list">
          <li className="select-item">
            <button className="active" data-filter-btn aria-label="Tout les projets">
              Tout les projets
            </button>
          </li>
          <li className="select-item">
            <button data-select-item aria-label="Projets personnels">Personnal projects</button>
          </li>
          
          <li className="select-item">
            <button data-filter-btn aria-label="Applications">Applications</button>
          </li>

          <li className="select-item">
            <button data-filter-btn aria-label="Web dev">Web development</button>
          </li>
        </ul>
            <div className="select-icon">
              <IonIcon icon={chevronDown} />
            </div>
          </button>  
        </div>
        
        <ul className="project-list">
          <li
            className="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>
                <img
                  src={img.projectImage1}
                  alt="finance"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Finance</h3>

              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className="project-item  active"
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
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Orizon</h3>

              <p className="project-category">Web development</p>
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
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Fundo</h3>

              <p className="project-category">Web design</p>
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
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Brawlhalla</h3>

              <p className="project-category">Applications</p>
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
                  src={img.projectImage5}
                  alt="dsm."
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">DSM.</h3>

              <p className="project-category">Web design</p>
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
                  src={img.projectImage6}
                  alt="metaspark"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">MetaSpark</h3>

              <p className="project-category">Web design</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img
                  src={img.projectImage7}
                  alt="summary"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Summary</h3>

              <p className="project-category">Web development</p>
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
                  src={img.projectImage8}
                  alt="task manager"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Task Manager</h3>

              <p className="project-category">Applications</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img
                  src={img.projectImage9}
                  alt="arrival"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Arrival</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}
export default Portfolio;
