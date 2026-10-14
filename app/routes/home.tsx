import { Link } from "react-router";
import portrait from "../assets/portrait.webp";
import { Icon } from "../components/Icon";
import { ProjectCard } from "../components/ProjectCard";
import { Socials } from "../components/Socials";
import { intro, services, testimonials } from "../content/about";
import { projects } from "../content/projects";
import { careerStartYear, experiences } from "../content/resume";
import { contactHref, site } from "../content/site";
import { pageMeta } from "../lib/seo";
import type { Route } from "./+types/home";

export const meta: Route.MetaFunction = () =>
  pageMeta({
    title: "Jérôme Commaret — Développeur Fullstack React, React Native & Flutter à Paris",
    description:
      "Développeur Fullstack spécialisé en React, React Native et Flutter. Lead Front-end expérimenté basé à Paris, du web au mobile, de la gestion de projet technique à la CI/CD.",
    path: "/",
  });

const serviceIcons = { lead: "users", mobile: "smartphone" } as const;

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .replace(/[^\p{L}]/gu, "");
}

export default function Home() {
  const yearsOfExperience = new Date().getFullYear() - careerStartYear;
  const featured = projects.filter((project) => project.featured);

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="rise">
            <p className="badge">
              <span className="badge__dot" aria-hidden="true" />
              {site.location}
            </p>
            <h1 className="display hero__title">
              {site.name}
              <span className="visually-hidden"> — </span>
              <em>{site.tagline}</em>
            </h1>
            <p className="lead">
              Développeur fullstack et lead front-end, je conçois des applications web et mobiles
              avec React, React Native et Flutter — pour des grands groupes comme pour des startups.
            </p>
            <div className="hero__actions">
              <a href={contactHref} className="button">
                <Icon name="mail" size={18} />
                Me contacter
              </a>
              <Link to="/projets/" className="button button--ghost" viewTransition>
                Voir mes projets
                <Icon name="arrow-right" size={18} />
              </Link>
            </div>
            <Socials />
          </div>

          <figure className="hero__portrait rise">
            <img
              src={portrait}
              alt={`Portrait illustré de ${site.name}`}
              width={640}
              height={640}
              fetchPriority="high"
            />
            <figcaption className="hero__stat">
              <strong suppressHydrationWarning>{yearsOfExperience}+</strong>
              <span>
                ans dans
                <br />
                le digital
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--divided" aria-labelledby="about-title">
        <div className="container about">
          <header className="section-heading reveal">
            <p className="eyebrow">01 — À propos</p>
            <h2 id="about-title" className="display">
              Je code, je manage, <em>j'innove.</em>
            </h2>
          </header>
          <div className="reveal">
            <div className="about__text">
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="stats" role="list">
              <li>
                <strong suppressHydrationWarning>{yearsOfExperience}+</strong>
                <span>années d'expérience</span>
              </li>
              <li>
                <strong>{experiences.length}</strong>
                <span>postes, de chef de projet à CTO</span>
              </li>
              <li>
                <strong>{projects.length}</strong>
                <span>projets à découvrir</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--divided" aria-labelledby="services-title">
        <div className="container">
          <header className="section-heading reveal">
            <p className="eyebrow">02 — Activités</p>
            <h2 id="services-title" className="display">
              Ce que je <em>fais</em>
            </h2>
          </header>
          <ul className="services">
            {services.map((service) => (
              <li key={service.title} className="card service reveal">
                <span className="service__icon">
                  <Icon name={serviceIcons[service.icon]} size={22} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--divided" aria-labelledby="projects-title">
        <div className="container">
          <header className="section-heading section-heading--row reveal">
            <div>
              <p className="eyebrow">03 — Projets récents</p>
              <h2 id="projects-title" className="display">
                Mes dernières <em>réalisations</em>
              </h2>
            </div>
            <Link to="/projets/" className="button button--ghost" viewTransition>
              Tous les projets
              <Icon name="arrow-right" size={18} />
            </Link>
          </header>
          <ul className="project-grid">
            {featured.map((project) => (
              <li key={project.slug} className="reveal">
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--divided" aria-labelledby="testimonials-title">
        <div className="container">
          <header className="section-heading reveal">
            <p className="eyebrow">04 — Témoignages</p>
            <h2 id="testimonials-title" className="display">
              Ils ont travaillé <em>avec moi</em>
            </h2>
          </header>
          <div className="testimonials">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.author} className="card testimonial reveal">
                <blockquote lang={testimonial.lang}>
                  <p>{testimonial.quote}</p>
                </blockquote>
                <figcaption>
                  <span className="avatar" aria-hidden="true">
                    {initials(testimonial.author)}
                  </span>
                  {testimonial.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
