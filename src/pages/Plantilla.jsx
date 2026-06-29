import PageLayout, { PageHeader } from '../components/layout/PageLayout'
import { useState } from 'react'
import { Search } from 'lucide-react'
import SpotlightSearchModal from '../components/modals/SpotlightSearchModal'

const squadMock = [
  { first_name: 'Claudio', last_name: 'Bravo',    position: 'Arquero',        jersey_number: 1,  rut: '12.345.678-9',  phone: '+56 9 1234 5678', category: 'Primera División' },
  { first_name: 'Gary',     last_name: 'Medel',    position: 'Defensa',        jersey_number: 17, rut: '15.234.567-8',  phone: '+56 9 2345 6789', category: 'Primera División' },
  { first_name: 'Arturo',   last_name: 'Vidal',    position: 'Mediocampista',  jersey_number: 8,  rut: '18.345.678-7',  phone: '+56 9 3456 7890', category: 'Primera División' },
  { first_name: 'Alexis',   last_name: 'Sánchez',  position: 'Delantero',      jersey_number: 7,  rut: '21.456.789-6',  phone: '+56 9 4567 8901', category: 'Reserva' },
  { first_name: 'Charles',  last_name: 'Aránguiz', position: 'Mediocampista',  jersey_number: 20, rut: '27.678.901-4',  phone: '+56 9 6789 0123', category: 'Reserva' },
  { first_name: 'Mauricio', last_name: 'Isla',     position: 'Defensa',        jersey_number: 4,  rut: '30.789.012-3',  phone: '+56 9 7890 1234', category: 'Sub-17' },
  { first_name: 'Eugenio',  last_name: 'Mena',     position: 'Defensa',        jersey_number: 2,  rut: '33.890.123-2',  phone: '+56 9 8901 2345', category: 'Sub-15' },
]

const categories = ['Todos', 'Primera División', 'Reserva', 'Sub-17', 'Sub-15']

export default function Plantilla() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [isSpotlightOpen, setIsSpotlightOpen] = useState(false)

  const filteredPlayers = squadMock.filter(player => {
    const matchesSearch = 
      (player.first_name + ' ' + player.last_name).toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.rut.includes(searchTerm)
    const matchesCategory = selectedCategory === 'Todos' || player.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <PageLayout>
      <PageHeader
        title="PLANTILLA OFICIAL"
        description="Conoce a los guerreros que defienden los colores del Club Deportivo Florida en la presente temporada."
      />

      <div className="max-w-5xl mx-auto">
        {/* Search Input */}
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search size={16} className="text-neutral-400" />
          </div>
          {/* Mobile: opens modal */}
          <input
            type="text"
            placeholder="Buscar jugador por nombre o RUT..."
            className="w-full pl-9 pr-3 py-2.5 sm:py-3 bg-neutral-900/60 border border-white/8 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-[#c7a86b]/50 focus:ring-2 focus:ring-[#c7a86b]/20 text-sm sm:hidden cursor-pointer"
            onClick={() => setIsSpotlightOpen(true)}
            readOnly
          />
          {/* Desktop: normal search */}
          <input
            type="text"
            placeholder="Buscar jugador por nombre o RUT..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="hidden sm:block w-full pl-9 pr-3 py-2.5 sm:py-3 bg-neutral-900/60 border border-white/8 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-[#c7a86b]/50 focus:ring-2 focus:ring-[#c7a86b]/20 text-sm"
          />
        </div>
        {/* Category Filters */}
        <div
          className="relative px-3 sm:px-4 py-2 sm:py-3 border border-[#c7a86b]/25 mb-4 sm:mb-6 backdrop-blur-sm overflow-hidden"
          style={{
            background: `
      radial-gradient(100% 100% at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 100%),
      linear-gradient(180deg, rgba(23,23,23,0.98) 0%, rgba(10,10,10,0.98) 100%)
    `,
          }}
        >
          {/* Esquina superior izquierda */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#c7a86b]/50" />

          {/* Esquina superior derecha */}
          <div className="absolute top-0 right-0 w-2 h-2 border-t-1 border-r-1 border-[#c7a86b]/50" />

          {/* Esquina inferior izquierda */}
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#c7a86b]/50" />

          {/* Esquina inferior derecha */}
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#c7a86b]/50" />

          {/* Contenido */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className='flex gap-2 items-center text-[#c7a86b] sm:py-1 text-[8px] sm:text-[10px]'>
              <span aria-hidden="true" className="sort-label-mark"></span>
              <span className="font-bold uppercase tracking-wider">
                Ordenar por
              </span>
            </div>

            <div className="flex flex-wrap gap-1 sm:gap-1.5 justify-center">
              {categories.map((category) => {
                const isSelected = selectedCategory === category
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`
    px-1.5 sm:px-2 py-0.5 sm:py-1 text-[8px] sm:text-[9px]
    font-bold uppercase tracking-wider
    transition-colors duration-200 border shrink-0 rounded-sm

    hover:-translate-y-[1px]
    hover:shadow-[0_6px_14px_rgba(199,168,107,0.25)]
    hover:border-[#c7a86b]/60
    hover:brightness-110

    ${isSelected
                        ? 'text-black border-[#c7a86b] shadow-[0_0_14px_rgba(199,168,107,0.45)] hover:shadow-[0_0_18px_rgba(199,168,107,0.55)]'
                        : 'bg-black text-neutral-400 border-[#c7a86b]/40 hover:bg-[#c7a86b]/5'
                      }
  `}
                    style={
                      isSelected
                        ? {
                          background: `
            linear-gradient(
              180deg,
              color-mix(in srgb, #c7a86b 95%, white) 0%,
              #c7a86b 65%,
              color-mix(in srgb, #c7a86b 75%, black) 100%
            )
          `,
                          boxShadow: "0 0 16px rgba(199,168,107,0.35)"
                        }
                        : undefined
                    }
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Players List */}
        <div 
          className="border border-[#c7a86b]/15 rounded-2xl overflow-hidden relative shadow-[0_4px_20px_rgba(199,168,107,0.05)]"
          style={{
            background: `linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(23,23,23,0.85) 50%, rgba(10,10,10,0.95) 100%)`
          }}
        >
          {filteredPlayers.length === 0 ? (
            <div className="p-6 sm:p-8 text-center text-neutral-400 text-sm relative z-10">
              No se encontraron jugadores
            </div>
          ) : (
            <div className="divide-y divide-white/8 relative z-10">
              {filteredPlayers.map((player, idx) => (
                <div key={idx} className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex items-center justify-between hover:bg-white/5 transition-colors duration-200">
                  <div>
                    <h3 className="font-outfit font-bold text-white text-sm sm:text-base">
                      {player.first_name} <span className="text-[#c7a86b]">{player.last_name}</span>
                    </h3>
                    <p className="text-[10px] sm:text-xs text-neutral-500 font-mono">{player.rut}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Spotlight Search Modal */}
      <SpotlightSearchModal
        isOpen={isSpotlightOpen}
        onClose={() => setIsSpotlightOpen(false)}
        players={squadMock}
      />
    </PageLayout>
  )
}
