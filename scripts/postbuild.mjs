// GitHub Pages sert 404.html pour toute URL inconnue : on y place la coquille SPA
// générée par React Router, qui affiche alors la page 404 de l'application.
import { copyFile } from "node:fs/promises";

const outDir = new URL("../build/client/", import.meta.url);

await copyFile(new URL("__spa-fallback.html", outDir), new URL("404.html", outDir));
console.log("✓ build/client/404.html");
