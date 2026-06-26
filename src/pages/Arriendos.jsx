import PageLayout, { PageHeader } from '../components/layout/PageLayout'
import { RentalCalendar } from '../components/rentals/RentalCalendar'
import { RentalForm } from '../components/rentals/RentalForm'
import { MapPin, Info, CheckCircle2 } from 'lucide-react'

export default function Arriendos() {
  return (
    <PageLayout>
      <PageHeader
        label="Instalaciones"
        title="Arriendo de"
        highlight="Canchas"
        description="Reserva nuestra cancha principal para tus partidos, entrenamientos o eventos."
      />

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-neutral-900/60 border border-white/8 rounded-2xl overflow-hidden">
          <div className="h-[200px] sm:h-[280px] relative bg-neutral-800">
            <img
              src="https://images.unsplash.com/photo-1518605328461-0b32f143093b?q=80&w=2070&auto=format&fit=crop"
              alt="Cancha Club Florida"
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
              <div className="flex items-center gap-2 text-[#c7a86b] font-semibold mb-2 text-xs sm:text-sm">
                <MapPin size={14} className="sm:size-16" /> Av. La Florida 1234
              </div>
              <h3 className="font-outfit font-black text-xl sm:text-2xl md:text-3xl text-white m-0">
                Osman Perez Freire
              </h3>
            </div>
          </div>
          <div className="px-4 sm:px-6 py-3 sm:py-4 flex flex-wrap gap-3 sm:gap-5 border-t border-white/8">
            {['Pasto Sintético', 'Iluminación LED', 'Camarines', 'Estacionamiento'].map((feat) => (
              <div key={feat} className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold text-neutral-400">
                <CheckCircle2 size={14} className="sm:size-16 text-[#c7a86b] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div>
            <h3 className="font-outfit font-bold text-sm sm:text-base text-white mb-2">
              Disponibilidad
            </h3>
            <p className="text-[10px] sm:text-xs text-neutral-500 mb-4">
              Revisa los horarios disponibles para esta semana.
            </p>
            <RentalCalendar />
          </div>
          <div>
            <RentalForm />
            <div className="mt-4 flex items-start gap-3 p-3 sm:p-4 bg-[#c7a86b]/10 border border-[#c7a86b]/20 rounded-xl text-[10px] sm:text-xs text-neutral-400 leading-relaxed">
              <Info size={14} className="sm:size-16 text-[#c7a86b] shrink-0 mt-0.5" />
              <p className="m-0">
                Una vez enviada la solicitud, el administrador revisará la disponibilidad y te enviaremos
                una <strong className="text-[#c7a86b]">confirmación por WhatsApp</strong>. También recibirás un recordatorio 24 horas antes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
