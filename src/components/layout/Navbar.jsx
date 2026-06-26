import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const navLinks = [
  { path: '/informaciones', label: 'INFORMACIONES' },
  { path: '/tabla', label: 'TABLAS' },
  { path: '/partidos', label: 'PRÓXIMOS PARTIDOS' },
  { path: '/resultados', label: 'RESULTADOS' },
  { path: '/plantilla', label: 'PLANTILLA' },
  { path: '/arriendos', label: 'ARRIENDOS' },
];

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
    <nav
      data-scrolled={scrolled ? 'true' : 'false'}
      data-open={isOpen ? 'true' : 'false'}
      className={`
  fixed inset-x-0 top-0 z-50
  border-b border-transparent
  bg-transparent data-[scrolled=true]:border-white/5 data-[scrolled=true]:bg-zinc-900/70 data-[scrolled=true]:backdrop-blur-md data-[scrolled=true]:backdrop-contrast-125 data-[scrolled=true]:backdrop-saturate-150
  h-16 data-[open=true]:h-dvh sm:h-18 sm:data-[open=true]:h-dvh md:h-20 md:data-[open=true]:h-20
  transition-[background-color,backdrop-filter,border-color,height]
  duration-500 ease-out font-cinzel
`}>
      <div className="container-app relative z-[70]">
        <div className="flex h-16 items-center justify-between px-1 sm:h-18 sm:px-2 md:h-20">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="group relative flex items-center gap-3 no-underline"
          >
            <img
              src="/images/flologo.png"
              alt="Logo"
              className={`w-8 h-9 md:w-11 md:h-12 flex items-center justify-center font-outfit font-black text-base text-white shrink-0 transition-all duration-500 ease-out ${isOpen
                ? 'scale-110 saturate-200 contrast-125 brightness-125'
                : 'scale-100 saturate-100 contrast-100 brightness-100'
                }`}
            />

          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
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
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[70] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-[#f4e4c9] transition-colors hover:bg-white/20 md:hidden"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            <span className="relative block h-5 w-5" aria-hidden="true">
              <span className={`absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-out ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-all duration-200 ease-out ${isOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`} />
              <span className={`absolute left-0 bottom-1 block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-out ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute inset-0 z-[60] min-h-dvh md:hidden transition-all duration-300 ease-out ${isOpen
          ? 'visible opacity-100 translate-y-0'
          : 'invisible opacity-0 -translate-y-4 pointer-events-none'
          }`}
        style={{ background: 'rgba(0,0,0,0.94)', backdropFilter: 'blur(22px)' }}
      >
        <div
          className={`pointer-events-none absolute left-1/2 top-0 h-[58dvh] w-[78vw] max-w-md -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(199,168,107,0.34)_0%,rgba(199,168,107,0.16)_28%,rgba(199,168,107,0.06)_52%,transparent_78%)] blur-2xl transition-all duration-700 ease-out ${isOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-8 opacity-0 scale-75'}`}
        />
        <div
          className={`pointer-events-none absolute left-1/2 top-[42dvh] h-24 w-24 -translate-x-1/2 rounded-full bg-[#c7a86b]/15 blur-3xl transition-all duration-700 ease-out ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
        />
        <div className="container-app relative z-10 flex min-h-dvh flex-col justify-center py-28">
          <div className="mx-auto flex w-full max-w-sm flex-col gap-3 px-6">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-6 py-4 text-3xl font-anybody font-bold transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'} ${isActive
                    ? 'text-[#c7a86b]'
                    : 'text-neutral-200 hover:text-white hover:bg-white/5'
                  }`
                }
                style={{ transitionDelay: isOpen ? `${index * 45}ms` : '0ms' }}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
