import { IonIcon } from '@ionic/react';
import { bookOutline } from 'ionicons/icons';

function Resume() {
  return(
    <article className="resume active">
        <header>
          <h2 className="h2 page-title">CV</h2>
        </header>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <IonIcon icon={bookOutline} />
            </div>
            <h3 className="h3">Mes Expériences</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Développeur Fullstack @ Crowdaa</h4>
              <span>Janvier 2024 - Juin 2024</span>
              <p className="timeline-text">
                Crowdaa est un SAAS, cloud no code qui permet aux utilisateur créer des applications iOS / Android sans écrire une seule ligne de code.
                En tant que développeur fullstack, j'ai eu pour mission de développer des fonctionnalités sur le back-end et le front-end.
                <br />
                <b>Projets :</b> Systemik RH (plateforme de formation pour les RH)- Kaltaresa (plateforme de réservation de restaurant - beauté)
                <br />
                <b>Technologies utilisées :</b> Wordpress, Javascript, PHP, MAMP, Wordpress, Flutter, React, CI/CD 
                <br />
                <b>Outils :</b> Scrum, Jira, GitLab, Slack.
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Front-End Manager @ LeLynx.fr</h4>
              <span>Février 2021 - Juillet 2022</span>
              <p className="timeline-text">
                Le Lynx est un comparateur d'assurance en ligne.
                En tant que Front-End Manager, j'ai eu pour mission de développer des fonctionnalités, mais aussi d'encardrer une équipe de 2 développeurs.
                <br />
                <b>Projets :</b> Le Lynx.fr - Demenagez-malynx.fr
                <br />
                <b>Technologies utilisées :</b> Wordpress, Javascript, PHP, MAMP, Angular, CI/CD 
                <br />
                <b>Outils :</b> Scrum, Jira, Bitbucket, Trello, Slack.
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
              <p className="timeline-text">Meet My Job etait une startup qui proposait aux particuliers, de découvrir les métiers de l'artisanat</p>
            </li>
            
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Digital Activation Manager @ The CocaCola Company France</h4>
              <span>Décembre 2013 - Octobre 2014</span>
              <p className="timeline-text">Au sein de Coca-cola, j'ai travaillé sur les 12 sites des 12 marques du groupe.</p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Chef de projet web @ Diverses entreprises (Tequila Rapido, Publicis Modem...)</h4>
              <span>Mars 2011 - Juin 2013</span>
              <p className="timeline-text">Suite à mes études à Hétic, j'ai eu l'opportunité de travailler pour de petites agences de communication, aussi bien que pour de très grand groupes</p>
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

        
      </article>
    );
}
export default Resume;