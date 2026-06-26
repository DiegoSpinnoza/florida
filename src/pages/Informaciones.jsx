import PageLayout, { PageHeader } from '../components/layout/PageLayout'
import { Card } from '../components/ui/Card'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

const newsMock = [
  {
    id: 1,
    title: 'Victoria histórica en la Liga Regional',
    excerpt: 'Nuestro equipo de Primera División logra una victoria importante que nos posiciona en los primeros lugares de la tabla.',
    date: new Date(Date.now() - 86400000 * 2),
    category: 'Partidos',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Inscripciones abiertas para categorías infantiles',
    excerpt: 'Estamos buscando nuevos talentos para nuestras divisiones infantiles. No te pierdas esta oportunidad.',
    date: new Date(Date.now() - 86400000 * 5),
    category: 'Inscripciones',
    image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Remodelación de cancha Osman Perez Freire',
    excerpt: 'Completamos la renovación del pasto sintético y la iluminación LED de nuestra cancha principal.',
    date: new Date(Date.now() - 86400000 * 10),
    category: 'Instalaciones',
    image: 'https://images.unsplash.com/photo-1518605328461-0b32f143093b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Nuevo uniforme oficial 2026',
    excerpt: 'Presentamos nuestro nuevo uniforme oficial con diseño moderno y materiales de alta calidad.',
    date: new Date(Date.now() - 86400000 * 15),
    category: 'Club',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1000&auto=format&fit=crop'
  }
]

export default function Informaciones() {
  return (
    <PageLayout>
      <PageHeader
        title="Informaciones"
        description="Noticias, anuncios y actualizaciones del Club Deportivo Florida."
      />

      <div className="max-w-4xl mx-auto space-y-6">
        {newsMock.map((news) => (
          <Card key={news.id} className="overflow-hidden border border-white/8 rounded-2xl bg-neutral-900/60 hover:border-white/15 transition-all duration-200 group">
            <div className="flex flex-col sm:flex-row">
              {/* Image */}
              <div className="sm:w-48 h-48 sm:h-auto relative overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#c7a86b]/20 text-[#c7a86b] border border-[#c7a86b]/30">
                    {news.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-outfit font-bold text-lg sm:text-xl text-white mb-3 leading-tight">
                    {news.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                    {news.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/6">
                  <div className="flex items-center gap-4 text-xs text-neutral-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#c7a86b]" />
                      <span>{format(news.date, "d 'de' MMMM", { locale: es })}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={13} className="text-[#c7a86b]" />
                      <span>{format(news.date, "HH:mm")} hrs</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-1.5 text-xs font-semibold text-[#c7a86b] hover:text-white transition-colors">
                    Leer más
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </PageLayout>
  )
}
