import { useState } from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'
import { 
  LayoutDashboard, Calendar, Trophy, ListOrdered, 
  Users, UserCheck, CalendarDays, Menu, X, LogOut
} from 'lucide-react'

const adminLinks = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/partidos', label: 'Partidos', icon: Calendar },
  { href: '/admin/resultados', label: 'Resultados', icon: Trophy },
  { href: '/admin/tabla', label: 'Tabla Posiciones', icon: ListOrdered },
  { href: '/admin/jugadores', label: 'Jugadores', icon: Users },
  { href: '/admin/convocatorias', label: 'Convocatorias', icon: UserCheck },
  { href: '/admin/arriendos', label: 'Arriendos', icon: CalendarDays },
]

export default function AdminLayout() {
  const [isOpen, setIsOpen] = useState(true)
  const location = useLocation()
  const pathname = location.pathname

  const handleSignOut = () => {
    // Manejar signOut y redirigir
  }

  return (
    <div className="flex min-h-screen bg-neutral-950">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 p-4 bg-green-600 rounded-full text-white shadow-lg lg:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside 
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-neutral-900 border-r border-neutral-800 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white font-outfit font-black text-xl">
                CF
              </div>
              <div>
                <div className="font-outfit font-bold text-lg text-white leading-tight">Admin Panel</div>
                <div className="text-xs text-green-500 font-semibold uppercase">Ver Sitio Web</div>
              </div>
            </Link>
          </div>

          <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
            {adminLinks.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href || (link.href !== '/admin' && pathname.startsWith(link.href))
              
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-green-500/10 text-green-400 font-medium' 
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                  }`}
                >
                  <Icon size={20} className={isActive ? 'text-green-500' : ''} />
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="p-4 border-t border-neutral-800">
            <button 
              onClick={handleSignOut}
              className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
            >
              <LogOut size={20} />
              Cerrar Sesión
            </button>
          </div>
        </div>
      </aside>

      <main className={`flex-1 transition-all duration-300 ${isOpen ? 'lg:ml-64' : ''}`}>
        <div className="p-8 max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
