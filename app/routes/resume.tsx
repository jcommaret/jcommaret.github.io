import { Icon } from "../components/Icon";
import { careerStartYear, education, experiences } from "../content/resume";
import { pageMeta } from "../lib/seo";
import type { Route } from "./+types/resume";

export const meta: Route.MetaFunction = () =>
  pageMeta({
    title: "CV & parcours — Jérôme Commaret",
    description:
      "Mon parcours professionnel : Lead Front-end, développeur fullstack, CTO et chef de projet web. Expériences, compétences techniques et formation.",
    path: "/cv/",
  });

export default function Resume() {
  const yearsOfExperience = new Date().getFullYear() - careerStartYear;

  return (
    <>
      <header className="container page-header rise">
        <p className="eyebrow">CV</p>
        <h1 className="display">
          Mon <em>parcours</em>
        </h1>
        <p className="lead" suppressHydrationWarning>
          Plus de {yearsOfExperience} ans dans le digital&nbsp;: chef de projet web, CTO, lead tech
          puis développeur fullstack, en agence, en startup comme chez l'annonceur.
        </p>
      </header>

      <section className="section" aria-labelledby="experiences-title">
        <div className="container cv-section">
          <div className="cv-section__heading">
            <span className="service__icon">
              <Icon name="briefcase" size={22} />
            </span>
            <h2 id="experiences-title">Expériences</h2>
          </div>
          <ol className="timeline">
            {experiences.map((experience) => (
              <li
                key={`${experience.company}-${experience.period}`}
                className="timeline__item reveal"
              >
                <p className="timeline__period">{experience.period}</p>
                <h3 className="timeline__title">
                  {experience.role}{" "}
                  <span className="timeline__company">· {experience.company}</span>
                </h3>
                <p>{experience.description}</p>
                {experience.projects && (
                  <p className="timeline__meta">
                    <strong>Projets&nbsp;:</strong> {experience.projects.join(" · ")}
                  </p>
                )}
                {experience.tools && (
                  <p className="timeline__meta">
                    <strong>Outils&nbsp;:</strong> {experience.tools.join(", ")}
                  </p>
                )}
                {experience.stack && (
                  <ul className="tags" aria-label="Technologies">
                    {experience.stack.map((tech) => (
                      <li key={tech} className="tag">
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--divided" aria-labelledby="education-title">
        <div className="container cv-section">
          <div className="cv-section__heading">
            <span className="service__icon">
              <Icon name="graduation-cap" size={22} />
            </span>
            <h2 id="education-title">Formation</h2>
          </div>
          <ol className="timeline">
            {education.map((item) => (
              <li key={item.school} className="timeline__item reveal">
                <p className="timeline__period">{item.period}</p>
                <h3 className="timeline__title">{item.school}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
