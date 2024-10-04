import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Child components
import { Catalog } from './Catalog.tsx';
import { Login } from './Login.tsx';
import { Signup } from './Signup.tsx';
import { CourseContainer } from './CourseContainer.tsx';
import { EnrolledCatalog } from './EnrolledCatalog.tsx';
import { TeachCatalog } from './TeachCatalog.tsx';
import { Landing } from './Landing.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Landing />
      },
      {
        path: "catalog", // Changed to remove the leading slash
        element: <Catalog />
      },
      {
        path: "login", // Changed to remove the leading slash
        element: <Login />
      },
      {
        path: "signup", // Changed to remove the leading slash
        element: <Signup />
      },
      {
        path: "course/:id", // Changed to remove the leading slash
        element: <CourseContainer />
      },
      {
        path: "mylearning", // Changed to remove the leading slash
        element: <EnrolledCatalog />
      },
      {
        path: "myteaching", // Changed to remove the leading slash
        element: <TeachCatalog />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
