import { IonIcon } from '@ionic/react';
import { bookOutline } from 'ionicons/icons';
import resumeData from '../../data/resume.json';
import { pageSEO, defaultSEO } from '../../utils/seo';

import './index.scss';
import { Helmet } from 'react-helmet-async';

function Resume() {
  const pageName = resumeData.pageName;
  return(
    <>
      <Helmet>
          <title>{pageSEO.resume.title}</title>
          <meta name="description" content={pageSEO.resume.description} />
          <meta name="keywords" content={pageSEO.resume.keywords} />
          <meta property="og:title" content={pageSEO.resume.title} />
          <meta property="og:description" content={pageSEO.resume.description} />
          <meta property="og:url" content={`${defaultSEO.siteUrl}#/resume`} />
          <meta name="twitter:title" content={pageSEO.resume.title} />
          <meta name="twitter:description" content={pageSEO.resume.description} />
          <link rel="canonical" href={`${defaultSEO.siteUrl}#/resume`} />
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