import { Link } from 'react-router-dom';

export default function TopHeader() {
  return (
  <div className="flex items-center justify-center py-3 md:py-12">
<Link to="/" className="flex items-center justify-center gap-4">
  {/* Línea izquierda */}
  <div className="w-24 h-px bg-gradient-to-l from-[#c7a86b]/45 via-[#c7a86b]/40 to-transparent" />

  {/* Logo */}
  <img
    src="/images/flologo.png"
    alt="Club Florida"
    className="w-6 h-6 shrink-0 "
  />

  {/* Línea derecha */}
  <div className="w-24 h-px bg-gradient-to-r from-[#c7a86b]/45 via-[#c7a86b]/40 to-transparent" />
</Link>
</div>
  );
}
