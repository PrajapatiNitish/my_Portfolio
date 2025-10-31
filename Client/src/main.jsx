import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './Pages/Main/MainPage.jsx';
import Skills from './Pages/Skills/Skills.jsx'
import Projects from './Pages/Projects/Projects.jsx';
import Internship from './Pages/Internship/Internship.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },

      {
        path: "/Skills",
        element: <Skills />,
      },

      {
        path: "/Projects",
        element: <Projects />,
      },

      {
        path: "/Internship",
        element: <Internship />,
      },
    ],
  },
]);

createRoot(document.getElementById('global-page')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
