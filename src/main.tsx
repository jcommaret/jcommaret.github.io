// React entry point for the application
import * as React from "react"
import * as ReactDOM from "react-dom/client"

// Import the createBrowserRouter function
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Import the pages
import Root from "./pages/root"
import About from "./pages/About"
import Resume from "./pages/Resume"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import ErrorPage from "./pages/ErrorPage"

// Create a browser router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <About />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/resume",
        element: <Resume />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/blog",
        element: <Blog />
      } 
    ],
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
