import { IonIcon } from '@ionic/react';
import { bookOutline } from 'ionicons/icons';
import resumeData from '../../data/resume.json';
import siteData from '../../data/site.json';

import './index.scss';
import { Helmet } from 'react-helmet-async';

function Resume() {
  const siteName = siteData.name;
  const pageName = resumeData.pageName; 
  const pageDescription = resumeData.pageDescription;   
  return(
    <>
      <Helmet title={ siteName + ' - ' + pageName }
          meta={[
            { name: 'description', content: pageDescription },
            { property: 'og:title', content: siteName + ' - ' + pageName },
            { property: 'og:description', content: pageDescription },
            { property: 'twitter:title', content: siteName + ' - ' + pageName }, 
            { property: 'twitter:description', content: pageDescription },
          ]}>
      </Helmet>

      <article className="resume active">
        <header>
          <h2>{pageName}</h2>
        </header>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <IonIcon icon={bookOutline} />
            </div>
            <h3>Mes Expériences</h3>
          </div>

          <ol className="timeline-list">
            {resumeData.experiences.map((experience, index) => (
              <li key={index} className="timeline-item">
                <h4 className="h4 timeline-item-title">{experience.title}</h4>
                <span>{experience.period}</span>
                <p className="timeline-text">
                  {experience.description}
                  {experience.projects && (
                    <>
                      <br />
                      <b>Projets :</b> {experience.projects}
                    </>
                  )}
                  {experience.technologies && (
                    <>
                      <br />
                      <b>Technologies utilisées :</b> {experience.technologies}
                    </>
                  )}
                  {experience.tools && (
                    <>
                      <br />
                      <b>Outils :</b> {experience.tools}
                    </>
                  )}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <IonIcon icon={bookOutline} />
            </div>
            <h3>Scolarité et certifications</h3>
          </div>

          <ol className="timeline-list">
            {resumeData.education.map((education, index) => (
              <li key={index} className="timeline-item">
                <h4 className="h4 timeline-item-title">{education.school}</h4>
                <span>{education.period}</span>
                <p className="timeline-text">
                  {education.description}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </article>
    </>
  );
}

export default Resume;