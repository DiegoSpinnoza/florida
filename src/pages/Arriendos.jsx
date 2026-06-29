import PageLayout, { PageHeader } from '../components/layout/PageLayout'
import { Clock } from 'lucide-react'

export default function Arriendos() {
  return (
    <PageLayout>
      <PageHeader
        label="Instalaciones"
        title="Arriendo de"
        highlight="Canchas"
        description="Reserva nuestra cancha principal para tus partidos, entrenamientos o eventos."
      />

      <div className="max-w-3xl mx-auto">
        <div className="bg-neutral-900/60 border border-white/8 rounded-2xl overflow-hidden text-center py-16 sm:py-24 px-6">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#c7a86b]/10 border border-[#c7a86b]/30 rounded-full mb-6">
            <Clock size={32} className="text-[#c7a86b]" />
          </div>
          <h2 className="font-outfit font-black text-2xl sm:text-3xl text-white mb-4">
            Próximamente
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md mx-auto">
            Estamos trabajando en la funcionalidad de reserva de canchas. ¡Muy pronto podrás reservar online!
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
