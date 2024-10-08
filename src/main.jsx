import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import GlobalStyle from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './routes'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={Routes}/>
    <GlobalStyle/>
    <ToastContainer autoClose={1000} theme='dark'/>
  </StrictMode>,
)
