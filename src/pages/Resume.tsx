// Library
import { IonIcon } from '@ionic/react';

// Icons
import { bookOutline } from 'ionicons/icons';


function Resume() {
  return(
    <article className="resume active">
        <header>
          <h2 className="h2 article-title">CV</h2>
        </header>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <IonIcon icon={bookOutline} />
            </div>
            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Développeur Fullstack @ Crowdaa</h4>
              <span>Janvier 2024 - Juin 2024</span>
              <p className="timeline-text">
                Crowdaa est un SASS, cloud no code qui permet aux utilisateur créer des applications iOS / Android sans écrire une seule ligne de code.
                En tant que développeur fullstack, j'ai pour mission de développer des fonctionnalités sur le back-end et le front-end.
                <br />
                <b>Projets :</b> Systemik RH (plateforme de formation pour les RH)- Kaltaresa (plateforme de réservation de restaurant - beauté)
                <br />
                <b>Technologies utilisées :</b> Wordpress, Javascript, PHP, MAMP, Wordpress, Flutter, React, CI/CD 
                <br />
                <b>Outils :</b> Scrum, Jira, Git, Bitbucket, Trello, Slack.
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Front-End Manager @ LeLynx.fr</h4>
              <span>Février 2021 - Juillet 2022</span>
              <p className="timeline-text">
                LeLynx.fr est un comparateur d'assurance en ligne.
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Développeur Fullstack @ ImagineApp</h4>
              <span>Juillet 2019 - Janv. 2021</span>
              <p className="timeline-text">Imagine app est une ESN</p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Développeur Front-End @ SQLI</h4>
              <span>Juillet 2019 - Janv. 2021</span>
              <p className="timeline-text">SQLI est une ESN</p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Développeur Fullstack @ Eexpand</h4>
              <span>Juillet 2019 - Janv. 2021</span>
              <p className="timeline-text">Eexpand édite un Linkedin de l'import-export</p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Lead Tech Front @ Publicis-Sapient - (former DigitasLbi)</h4>
              <span>Juillet 2019 - Janv. 2021</span>
              <p className="timeline-text">Publicis-sapient, est un acteur digital du groupe Publicis</p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">CTO @ MeetMyJob</h4>
              <span>Juillet 2019 - Janv. 2021</span>
              <p className="timeline-text">Meet My Job etait une startup qui proposait aux particulier, de découvrir les métiers de l'artisanat</p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Digital Activation Manager @ The CocaCola Company France</h4>
              <span>Décembre 2013 - Octobre 2014</span>
              <p className="timeline-text">As t'on besoin de présenter Coca-Cola ?</p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Chef de projet web @ Diverses entreprises (Tequila Rapido, Publicis Modem...)</h4>
              <span>Mars 2011 - Juin 2013</span>
              <p className="timeline-text">expert</p>
            </li>

          </ol>
        </section>


        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <IonIcon icon={bookOutline} />
            </div>

            <h3 className="h3">Scolarité et certifications</h3>
          </div>

          <ol className="timeline-list">
            
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Openclassrooms</h4>
              <span>2021 — 2022</span>
              <p className="timeline-text">
                Formation de développeur d'applications javascript/react
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Georgia Tech</h4>
              <span>2021 — 2022</span>
              <p className="timeline-text">
                Certification en Innovation leadership
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Hétic</h4>
              <span>2007-2010</span>
              <p className="timeline-text">
                Diplôme de Master d'expert en ingénierie et management des technologies de l'information et de la communication
              </p>
            </li>
          </ol>
        </section>

        <section className="skill">
          <h3 className="h3 skills-title">My skills</h3>
          <ul className="skills-list content-card">
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Web design</h5>
                <data value="80">80%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill"></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Graphic design</h5>
                <data value="70">70%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill"></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Branding</h5>
                <data value="90">90%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill"></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">WordPress</h5>
                <data value="50">50%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill"></div>
              </div>
            </li>
          </ul>
        </section>
      </article>
    );
}
export default Resume;