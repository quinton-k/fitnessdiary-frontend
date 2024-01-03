import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './context/AuthProvider'
import { ThemeProvider } from "./context/ThemeProvider";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <ThemeProvider>
        <Routes>
          <Route path='/*' element={<App/>}/>
        </Routes>
      </ThemeProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
