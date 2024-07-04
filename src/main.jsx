import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import DashBoard from './Routes/DashBoard.jsx'
import Login from './Routes/Login.jsx'
import NotFound from './Routes/NotFound.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<DashBoard/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"*",
    element:<NotFound/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
