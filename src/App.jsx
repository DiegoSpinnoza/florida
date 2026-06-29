import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'

import Home from './pages/Home'
import Informaciones from './pages/Informaciones'
import Tabla from './pages/Tabla'
import Partidos from './pages/Partidos'
import Resultados from './pages/Resultados'
import Plantilla from './pages/Plantilla'

// Admin
import AdminLayout from './pages/admin/AdminLayout'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function PublicLayout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="flex flex-col h-screen relative overflow-hidden">
      {!isHome && <div className="boxers-grain" />}
      <Navbar />
      <main className={`flex-1 relative z-10 overflow-y-auto ${isHome ? '' : 'pt-16 pb-16 md:pt-16 md:pb-0'}`}>
        <Outlet key={pathname} />
      </main>
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* SPA Routing */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="informaciones" element={<Informaciones />} />
          <Route path="tabla" element={<Tabla />} />
          <Route path="partidos" element={<Partidos />} />
          <Route path="resultados" element={<Resultados />} />
          <Route path="plantilla" element={<Plantilla />} />
        </Route>

        {/* Admin (fuera del layout público) */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="partidos" element={<div>Partidos Admin</div>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
