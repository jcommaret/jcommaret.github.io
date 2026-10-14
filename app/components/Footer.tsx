import { contactHref, site } from "../content/site";
import { Icon } from "./Icon";
import { Socials } from "./Socials";

export function Footer() {
  return (
    <footer className="site-footer">
      <section className="container cta" aria-labelledby="cta-title">
        <p className="eyebrow">Contact</p>
        <h2 id="cta-title" className="display">
          Un projet en tête&nbsp;? <em>Parlons-en.</em>
        </h2>
        <p className="lead">
          Web, mobile, lead technique&nbsp;: je suis à votre écoute pour imaginer et construire
          votre prochain produit.
        </p>
        <a href={contactHref} className="button">
          <Icon name="mail" size={18} />
          {site.email}
        </a>
      </section>

      <div className="container site-footer__bottom">
        <p suppressHydrationWarning>
          © {new Date().getFullYear()} {site.name} ·{" "}
          <a href={site.repository} target="_blank" rel="noreferrer">
            Code source
          </a>
        </p>
        <Socials />
      </div>
    </footer>
  );
}
