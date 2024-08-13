// Library
import { IonIcon } from "@ionic/react";

// Icons
import { eyeOutline } from "ionicons/icons";

// Images
import img from '../assets/img/images';


function Portfolio() {
  return (
    <article className="portfolio active">
      <header>
        <h2 className="h2 article-title">Mes sides projects</h2>
      </header>

      <section className="projects">
        <ul className="project-list">
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
        </ul>
      </section>
    </article>
  );
}
export default Portfolio;
