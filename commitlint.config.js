/** @type {import('@commitlint/types').UserConfig} */
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Scopes conseillés (avertissement seulement) — voir CONTRIBUTING.md
    "scope-enum": [
      1,
      "always",
      ["ui", "content", "seo", "a11y", "perf", "deps", "config", "ci", "release"],
    ],
  },
  // Les corps de commit de Dependabot (notes de version) dépassent les longueurs de ligne.
  ignores: [(message) => message.includes("Signed-off-by: dependabot[bot]")],
};
