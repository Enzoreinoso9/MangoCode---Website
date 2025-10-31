import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politicayprivacidad" element={<PoliticaPrivacidad />} />
      </Routes>
    </Router>
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
