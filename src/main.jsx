import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footwear from './pages/Footwear.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import TrainingPage from './pages/TrainingPage.jsx'
import JerseysPage from './pages/JerseysPage.jsx'
import KeeperPage from './pages/KeeperPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import NavBar from './components/NavBar.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ItemPage from './pages/ItemPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Footwear",
    element: <Footwear />,
    errorElement: <ErrorPage />,
  },
  {
    path: "ItemPage",
    element: <ItemPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "TrainingPage",
    element: <TrainingPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "JerseysPage",
    element: <JerseysPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "KeeperPage",
    element: <KeeperPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "BlogPage",
    element: <BlogPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "NavBar",
    element: <NavBar/>,
    errorElement: <ErrorPage/>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router = {router} />
)
