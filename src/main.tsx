// React entry point for the application
import * as React from "react";
import * as ReactDOM from "react-dom/client";

// Import the createBrowserRouter function
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Import the pages
import Root from "./pages/root.tsx"
import About from "./pages/About.tsx"
import Resume from "./pages/Resume.tsx"
import Portfolio from "./pages/Portfolio.tsx";
import Contact from "./pages/Contact.tsx";

// Create a browser router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
