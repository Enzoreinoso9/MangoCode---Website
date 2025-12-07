import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'

const App = () => {
  return (

    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politicayprivacidad" element={<PoliticaPrivacidad />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

// Fuerza scroll al inicio en cada cambio de ruta
const ScrollToTop = () => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  return null
}
