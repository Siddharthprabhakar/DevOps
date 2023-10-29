import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

// Child components
import { Catalog } from './Catalog.tsx'
import { Login } from './Login.tsx'
import { Signup } from './Signup.tsx'
import { CourseContainer } from './CourseContainer.tsx'
import { EnrolledCatalog } from './EnrolledCatalog.tsx'
import { TeachCatalog } from './TeachCatalog.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/catalog",
        element: <Catalog />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path:"/course/:id",
        element: <CourseContainer />
      },
      {
        path:"/mylearning",
        element: <EnrolledCatalog />
      },
      {
        path:"/myteaching",
        element: <TeachCatalog />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
