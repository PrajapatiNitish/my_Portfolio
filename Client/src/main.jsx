import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Pages/Main/Main.jsx';
import Skills from './Pages/Skills/Skills.jsx'
import Projects from './Pages/Projects/Projects.jsx';
import Internship from './Pages/Internship/Internship.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />
      },

      {
        path: "/Skills",
        element: <Skills />
      },

      {
        path: "/Projects",
        element: <Projects />
      },

      {
        path: "/Internship",
        element: <Internship />
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
