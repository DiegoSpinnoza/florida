import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Share2 } from 'lucide-react'

const footerLinks = [
  { path: '/partidos', label: 'Próximos Partidos' },
  { path: '/resultados', label: 'Últimos Resultados' },
  { path: '/tabla', label: 'Tabla de Posiciones' },
  { path: '/plantilla', label: 'Nuestra Plantilla' },
  { path: '/arriendos', label: 'Arrendar Cancha' },
]

export default function Footer() {
  return (
    <footer
      className="relative pt-12 pb-6 mt-auto"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c7a86b]/30 to-transparent" />
      <div className="container-app">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Club info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center font-outfit font-black text-sm text-white shrink-0"
                style={{ background: 'linear-gradient(135deg,#1e3a8a,#3b82f6)', boxShadow: '0 4px 16px rgba(59,130,246,0.3)' }}
              >
                CF
              </div>
              <span className="font-outfit font-black text-base text-white tracking-tight">Club Florida</span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed mb-5">
              Fomentando el deporte, el compañerismo y la sana competencia desde 1995.
            </p>
            <div className="flex gap-2">
              {['Instagram', 'Facebook', 'Twitter'].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-neutral-500 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/8 transition-all duration-200"
                >
                  <Share2 size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-outfit font-bold text-xs text-neutral-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-0.5 h-3 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full" />
              Secciones
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-neutral-500 hover:text-blue-400 text-sm font-semibold transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-neutral-700" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-outfit font-bold text-xs text-neutral-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-0.5 h-3 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full" />
              Contacto
            </h3>
            <ul className="flex flex-col gap-3.5">
              {[
                { icon: <MapPin size={15} />, content: <>Av. La Florida 1234<br />La Florida, Santiago</> },
                { icon: <Phone size={15} />, content: '+56 9 1234 5678' },
                { icon: <Mail size={15} />, content: 'contacto@clubflorida.cl' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5 shrink-0">{item.icon}</span>
                  <span className="text-neutral-500 text-sm leading-normal font-medium">{item.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-5 text-center">
          <p className="text-xs text-neutral-600 font-medium">
            &copy; {new Date().getFullYear()} Club Deportivo Florida. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
