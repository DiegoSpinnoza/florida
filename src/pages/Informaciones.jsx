import PageLayout, { PageHeader } from '../components/layout/PageLayout'
import { Calendar, Clock, ArrowRight, X } from 'lucide-react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { useState } from 'react'

const newsMock = [
  {
    id: 1,
    title: 'Victoria histórica en la Liga Regional',
    excerpt: 'Nuestro equipo de Primera División logra una victoria importante que nos posiciona en los primeros lugares de la tabla.',
    content: 'En un partido emocionante, nuestro equipo de Primera División consiguió una victoria por 3-1 que nos coloca en la cima de la tabla de posiciones. Los goles fueron marcados por Alexis Sánchez (2) y Arturo Vidal. La próxima fecha jugaremos como visitantes contra el líder del grupo.',
    date: new Date(Date.now() - 86400000 * 2),
    category: 'Partidos'
  },
  {
    id: 2,
    title: 'Inscripciones abiertas para categorías infantiles',
    excerpt: 'Estamos buscando nuevos talentos para nuestras divisiones infantiles. No te pierdas esta oportunidad.',
    content: 'Las inscripciones para las categorías Sub-8, Sub-10, Sub-12 y Sub-14 están abiertas! Ven a probar tu talento en nuestras instalaciones de la Florida. Los requisitos son: certificado de nacimiento, examen médico y muchas ganas de jugar fútbol.',
    date: new Date(Date.now() - 86400000 * 5),
    category: 'Inscripciones'
  },
  {
    id: 3,
    title: 'Remodelación de cancha Osman Perez Freire',
    excerpt: 'Completamos la renovación del pasto sintético y la iluminación LED de nuestra cancha principal.',
    content: 'Después de 3 semanas de trabajo, la cancha principal Osman Pérez Freire luce renovada con un nuevo pasto sintético de última generación y un sistema de iluminación LED de alta eficiencia. Los equipos ya pueden entrenar y jugar en condiciones óptimas.',
    date: new Date(Date.now() - 86400000 * 10),
    category: 'Instalaciones'
  },
  {
    id: 4,
    title: 'Nuevo uniforme oficial 2026',
    excerpt: 'Presentamos nuestro nuevo uniforme oficial con diseño moderno y materiales de alta calidad.',
    content: 'Presentamos nuestro nuevo uniforme para la temporada 2026! Con un diseño que rinde homenaje a nuestros colores tradicionales (dorado y negro), fabricado con materiales transpirables y resistentes. Ya disponible en nuestra tienda oficial.',
    date: new Date(Date.now() - 86400000 * 15),
    category: 'Club'
  }
]

export default function Informaciones() {
  const [selectedNews, setSelectedNews] = useState(null)

  return (
    <PageLayout>
      <PageHeader
        title="Informaciones"
        description="Noticias, anuncios y actualizaciones del Club Deportivo Florida."
      />

      <div className="max-w-4xl mx-auto space-y-3">
        {newsMock.map((news) => (
          <div
            key={news.id}
            className="relative overflow-hidden border border-[#c7a86b]/15 rounded-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1 hover:border-[#c7a86b]/40 hover:shadow-[0_8px_30px_rgba(199,168,107,0.15)]"
            style={{
              background: `radial-gradient(100% 100% at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 100%), linear-gradient(180deg, rgba(23,23,23,0.95) 0%, rgba(10,10,10,0.98) 100%)`
            }}
            onClick={() => setSelectedNews(news)}
          >
            <div className="p-4 sm:p-5">
              {/* Category */}
              <div className="mb-2">
                <span className="px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider bg-[#c7a86b]/20 text-[#c7a86b] border border-[#c7a86b]/30">
                  {news.category}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-outfit font-bold text-base sm:text-lg text-white mb-2 leading-tight">
                  {news.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-2 mb-3">
                  {news.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[10px] sm:text-xs text-neutral-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="text-[#c7a86b]" />
                      <span>{format(news.date, "d 'de' MMMM", { locale: es })}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-[#c7a86b] hover:text-white transition-colors">
                    Leer más
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedNews(null)}
          />

          {/* Modal Content */}
          <div className="relative bg-neutral-900/95 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto animate-fade-in-up">
            {/* Close Button */}
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            >
              <X size={18} className="text-white" />
            </button>

            {/* Content */}
            <div className="p-5 sm:p-7">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider bg-[#c7a86b]/20 text-[#c7a86b] border border-[#c7a86b]/30 mb-3">
                {selectedNews.category}
              </span>
              <h2 className="font-outfit font-bold text-xl sm:text-2xl text-white mb-4 leading-tight">
                {selectedNews.title}
              </h2>
              <div className="flex items-center gap-3 text-xs text-neutral-500 mb-6">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#c7a86b]" />
                  <span>{format(selectedNews.date, "d 'de' MMMM", { locale: es })}</span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {selectedNews.content}
              </p>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  )
}
