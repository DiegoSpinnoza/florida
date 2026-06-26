import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Home from './pages/Home'
import Informaciones from './pages/Informaciones'
import Tabla from './pages/Tabla'
import Partidos from './pages/Partidos'
import Resultados from './pages/Resultados'
import Plantilla from './pages/Plantilla'
import Arriendos from './pages/Arriendos'

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
    <div className="flex flex-col min-h-screen bg-zinc-900 relative">
      {/* Light effect background for all pages except home */}
      {!isHome && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c7a86b]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#f4e4c9]/3 rounded-full blur-3xl" />
        </div>
      )}
      <Navbar />
      <main className={`flex-1 relative z-10 ${isHome ? '' : 'pt-[var(--navbar-height)] pb-16'}`}>
        <Outlet key={pathname} />
      </main>
      {/* {!isHome && <Footer />} */}
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
          <Route path="arriendos" element={<Arriendos />} />
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
