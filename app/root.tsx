import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./styles/app.css";

import geistFont from "@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?url";
import serifFont from "@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2?url";
import { useEffect, type ReactNode } from "react";
import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
} from "react-router";
import type { Route } from "./+types/root";
import portrait from "./assets/portrait.webp";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { site } from "./content/site";
import { personJsonLd } from "./lib/seo";
import { useHydrated } from "./lib/useHydrated";

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
  { rel: "author", type: "text/plain", href: "/humans.txt" },
  ...[geistFont, serifFont].map((href) => ({
    rel: "preload",
    href,
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous" as const,
  })),
];

// Appliqué avant le premier rendu pour éviter un flash du mauvais thème.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

const analyticsScript = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","${site.googleAnalyticsId}");`;

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={site.name} />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#faf8f3" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0f1115" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(portrait)) }}
        />
        {import.meta.env.PROD && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${site.googleAnalyticsId}`}
            />
            <script dangerouslySetInnerHTML={{ __html: analyticsScript }} />
          </>
        )}
      </head>
      <body>
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// Les anciennes URL utilisaient un HashRouter (`/#/projets`) : on les redirige.
const legacyHashRoutes: Record<string, string> = {
  "#/about": "/",
  "#/projets": "/projets/",
  "#/resume": "/cv/",
  "#/blog": "/",
};

function useLegacyHashRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const target = legacyHashRoutes[window.location.hash];
    if (target) navigate(target, { replace: true });
  }, [navigate]);
}

export default function App() {
  useLegacyHashRedirect();

  return (
    <>
      <Header />
      <main id="contenu">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

// Coquille SPA (404.html) : toutes les pages réelles étant prérendues, elle ne sert
// qu'aux URL inconnues. Volontairement vide pour ne figer aucun lien actif.
export function HydrateFallback() {
  return <main id="contenu" aria-busy="true" />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  // Le premier rendu doit correspondre au HTML de la coquille, sinon React signale
  // une erreur d'hydratation ; la page d'erreur s'affiche juste après.
  const hydrated = useHydrated();
  if (!hydrated) return <HydrateFallback />;

  const notFound = isRouteErrorResponse(error) && error.status === 404;
  const title = notFound ? "Page introuvable" : "Une erreur est survenue";

  return (
    <>
      <title>{`${title} — ${site.name}`}</title>
      <meta name="robots" content="noindex" />
      <Header />
      <main id="contenu" className="container error-page rise">
        <p className="eyebrow">{notFound ? "Erreur 404" : "Oups"}</p>
        <h1 className="display">{title}</h1>
        <p className="lead">
          {notFound
            ? "Cette page n'existe pas ou a été déplacée. Le plus simple est de repartir de l'accueil."
            : "Désolé, quelque chose s'est mal passé. Vous pouvez réessayer ou revenir à l'accueil."}
        </p>
        <Link to="/" className="button">
          Retour à l'accueil
        </Link>
        {import.meta.env.DEV && error instanceof Error && <pre>{error.stack}</pre>}
      </main>
      <Footer />
    </>
  );
}
