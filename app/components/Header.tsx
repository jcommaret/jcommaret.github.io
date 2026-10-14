import { Link, NavLink } from "react-router";
import { contactHref, site } from "../content/site";
import { ThemeToggle } from "./ThemeToggle";

// Slash final : GitHub Pages sert `/projets/index.html` à l'adresse `/projets/`.
const navigation = [
  { to: "/", label: "À propos" },
  { to: "/projets/", label: "Projets" },
  { to: "/cv/", label: "CV" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="brand" viewTransition>
          <span className="brand__mark" aria-hidden="true">
            JC
          </span>
          <span className="brand__name">{site.name}</span>
          <span className="visually-hidden">— Accueil</span>
        </Link>

        <nav aria-label="Navigation principale">
          <ul className="nav">
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className="nav__link" end={item.to === "/"} viewTransition>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <ThemeToggle />
          <a href={contactHref} className="button button--small">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
