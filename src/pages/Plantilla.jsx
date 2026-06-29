import PageLayout, { PageHeader } from '../components/layout/PageLayout'
import { useState } from 'react'
import { Search } from 'lucide-react'

const squadMock = [
  { first_name: 'Claudio', last_name: 'Bravo',    position: 'Arquero',        jersey_number: 1,  rut: '12.345.678-9',  phone: '+56 9 1234 5678', category: 'Primera División' },
  { first_name: 'Gary',     last_name: 'Medel',    position: 'Defensa',        jersey_number: 17, rut: '15.234.567-8',  phone: '+56 9 2345 6789', category: 'Primera División' },
  { first_name: 'Arturo',   last_name: 'Vidal',    position: 'Mediocampista',  jersey_number: 8,  rut: '18.345.678-7',  phone: '+56 9 3456 7890', category: 'Primera División' },
  { first_name: 'Alexis',   last_name: 'Sánchez',  position: 'Delantero',      jersey_number: 7,  rut: '21.456.789-6',  phone: '+56 9 4567 8901', category: 'Primera División' },
  { first_name: 'Eduardo',  last_name: 'Vargas',   position: 'Delantero',      jersey_number: 11, rut: '24.567.890-5',  phone: '+56 9 5678 9012', category: 'Reserva' },
  { first_name: 'Charles',  last_name: 'Aránguiz', position: 'Mediocampista',  jersey_number: 20, rut: '27.678.901-4',  phone: '+56 9 6789 0123', category: 'Reserva' },
  { first_name: 'Mauricio', last_name: 'Isla',     position: 'Defensa',        jersey_number: 4,  rut: '30.789.012-3',  phone: '+56 9 7890 1234', category: 'Sub-17' },
  { first_name: 'Eugenio',  last_name: 'Mena',     position: 'Defensa',        jersey_number: 2,  rut: '33.890.123-2',  phone: '+56 9 8901 2345', category: 'Sub-15' },
]

const categories = ['Todos', 'Primera División', 'Reserva', 'Sub-17', 'Sub-15']

export default function Plantilla() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')

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
        label="Nuestros Jugadores"
        title="Plantilla"
        highlight="Oficial"
        description="Conoce a los guerreros que defienden los colores del Club Deportivo Florida en la presente temporada."
      />

      {/* Search Input */}
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search size={18} className="text-neutral-400" />
        </div>
        <input
          type="text"
          placeholder="Buscar jugador por nombre o RUT..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-neutral-900/60 border border-white/8 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-[#c7a86b]/50 focus:ring-2 focus:ring-[#c7a86b]/20"
        />
      </div>

      {/* Category Filters */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory mb-4 sm:mb-6 pb-1">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 border shrink-0 snap-start ${
              selectedCategory === category
                ? 'bg-[#c7a86b]/20 text-white border-[#c7a86b] shadow-[0_0_10px_rgba(199,168,107,0.3)]'
                : 'text-[#c7a86b] border-[#c7a86b]/30 hover:bg-[#c7a86b]/10 hover:border-[#c7a86b]/50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Players List */}
      <div className="bg-neutral-900/60 border border-white/8 rounded-2xl overflow-hidden">
        {filteredPlayers.length === 0 ? (
          <div className="p-8 text-center text-neutral-400">
            No se encontraron jugadores
          </div>
        ) : (
          <div className="divide-y divide-white/8">
            {filteredPlayers.map((player, idx) => (
              <div key={idx} className="px-4 sm:px-6 py-4 flex items-center justify-between">
                <div>
                  <h3 className="font-outfit font-bold text-white">
                    {player.first_name} <span className="text-[#c7a86b]">{player.last_name}</span>
                  </h3>
                  <p className="text-xs text-neutral-500 font-mono">{player.rut}</p>
                </div>
                {player.jersey_number && (
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[#c7a86b]/10 border border-[#c7a86b]/20">
                    <span className="font-outfit font-black text-sm text-white">
                      {player.jersey_number}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  )
}
