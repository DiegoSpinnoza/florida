import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Newspaper, Trophy, Users } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'HOME', icon: Home },
  { path: '/informaciones', label: 'NOTICIAS', icon: Newspaper },
  { path: '/tabla', label: 'TABLA', icon: Trophy },
  { path: '/partidos', label: 'PARTIDOS', icon: Calendar },
  { path: '/resultados', label: 'RESULTADOS', icon: Trophy },
  { path: '/plantilla', label: 'PLANTILLA', icon: Users },
  { path: '/arriendos', label: 'ARRIENDOS', icon: Trophy, disabled: true },
];

// Top navbar links for desktop (only non-disabled)
const desktopNavLinks = navLinks.filter((link) => !link.disabled);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop Top Navbar */}
      <nav
        data-scrolled={scrolled ? 'true' : 'false'}
        className={`
          fixed inset-x-0 top-0 z-50 hidden md:flex
          border-b border-transparent
          bg-transparent data-[scrolled=true]:border-white/5 data-[scrolled=true]:bg-zinc-900/70 data-[scrolled=true]:backdrop-blur-md
          h-16
          transition-all
          font-cinzel
        `}
      >
        <div className="container-app relative z-[70] flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="group relative flex items-center gap-3 no-underline"
          >
            <img
              src="/images/flologo.png"
              alt="Logo"
              className="w-11 h-12 flex items-center justify-center font-outfit font-black text-base text-white shrink-0"
            />
          </Link>

          {/* Desktop Links */}
          <div className="flex items-center gap-2">
            {desktopNavLinks.map((link) => (
              <div key={link.path} className="relative flex flex-col items-center">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `
                      relative px-2 py-2.5 text-[11px] font-semibold transition-all duration-300
                      text-neutral-200
                      before:absolute before:left-1/2 before:-translate-x-1/2
                      before:w-[90%] before:h-[2px]
                      before:rounded-full before:pointer-events-none
                      before:transition-all before:duration-300
                      before:origin-center
                      before:bg-gradient-to-r
                      before:from-transparent
                      before:via-[#c7a86b]/40
                      before:to-transparent
                      before:scale-x-0
                      ${isActive
                        ? `
                            text-[#f4e4c9] font-bold
                            before:-top-0
                            before:opacity-100
                            before:scale-x-100
                            before:via-[#c7a86b]/80
                            before:shadow-[0_0_14px_rgba(199,168,107,0.55)]
                          `
                        : `
                            before:-bottom-0
                            before:opacity-0
                            hover:text-[#f4e4c9]
                            hover:before:opacity-100
                            hover:before:scale-x-100
                            hover:before:via-[#c7a86b]/35
                          `
                      }
                    `
                  }
                >
                  {link.label}
                </NavLink>
              </div>
            ))}
            {/* Arriendos disabled */}
            <div className="relative flex flex-col items-center">
              <span className="relative px-2 py-2.5 text-[11px] font-semibold text-neutral-500 cursor-not-allowed flex flex-col items-center gap-1">
                ARRIENDOS
                <span className="text-[9px] text-neutral-600">PRÓXIMAMENTE</span>
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Dock */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-zinc-900/90 backdrop-blur-md border-t border-white/10">
        <div className="flex items-center justify-around py-2 px-1">
          {navLinks.slice(0, 6).map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center py-1 px-2 gap-0.5 transition-all
                  ${isActive ? 'text-[#c7a86b]' : 'text-neutral-400'}`
                }
              >
                <Icon size={20} />
                <span className="text-[9px] font-medium">{link.label}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </>
  );
}
