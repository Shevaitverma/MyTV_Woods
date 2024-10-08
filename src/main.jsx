import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/tailwind.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routes}/>
  </React.StrictMode>,
)
