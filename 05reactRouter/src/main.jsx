import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from '../home/home.jsx'
import About from '../about/about.jsx'
import Contact from '../contact/contact.jsx'
import User from '../user/user.jsx'
import Github, { githubInfoLoader } from '../github/github.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
       path:"",
       element:<Home />
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"user/:userid",
        element:<User/>
      },
      { loader: githubInfoLoader,
        path:"github",
        element:<Github/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
