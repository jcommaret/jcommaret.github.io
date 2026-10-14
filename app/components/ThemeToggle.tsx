import { Icon } from "./Icon";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  const stored = document.documentElement.dataset.theme;
  if (stored === "light" || stored === "dark") return stored;
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  function toggle() {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    const apply = () => {
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {
        // Stockage indisponible (navigation privée…) : le choix vaut pour la session.
      }
    };

    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (document.startViewTransition && !reduceMotion) {
      document.startViewTransition(apply);
    } else {
      apply();
    }
  }

  return (
    <button
      type="button"
      className="icon-button"
      onClick={toggle}
      aria-label="Basculer entre thème clair et sombre"
      title="Changer de thème"
    >
      <Icon name="moon" size={18} className="theme-toggle__moon" />
      <Icon name="sun" size={18} className="theme-toggle__sun" />
    </button>
  );
}
