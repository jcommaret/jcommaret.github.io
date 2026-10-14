import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("projets", "routes/projects.tsx"),
  route("cv", "routes/resume.tsx"),
] satisfies RouteConfig;
