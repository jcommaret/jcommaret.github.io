// React entry point for the application
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { HashRouter as Router, Routes, Route } from "react-router-dom"

// Import the pages
import Root from "./pages/root"
import About from "./pages/About"
import Resume from "./pages/Resume"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import ErrorPage from "./pages/ErrorPage"

// Render the application
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
          <Route index element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="projets" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
