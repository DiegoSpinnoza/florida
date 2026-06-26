import PageLayout, { PageHeader } from '../components/layout/PageLayout'
import { PlayerCard } from '../components/players/PlayerCard'
import { Button } from '../components/ui/Button'

const squadMock = [
  { first_name: 'Claudio', last_name: 'Bravo',    position: 'Arquero',        jersey_number: 1,  rut: '12.345.678-9',  phone: '+56 9 1234 5678' },
  { first_name: 'Gary',     last_name: 'Medel',    position: 'Defensa',        jersey_number: 17, rut: '15.234.567-8',  phone: '+56 9 2345 6789' },
  { first_name: 'Arturo',   last_name: 'Vidal',    position: 'Mediocampista',  jersey_number: 8,  rut: '18.345.678-7',  phone: '+56 9 3456 7890' },
  { first_name: 'Alexis',   last_name: 'Sánchez',  position: 'Delantero',      jersey_number: 7,  rut: '21.456.789-6',  phone: '+56 9 4567 8901' },
  { first_name: 'Eduardo',  last_name: 'Vargas',   position: 'Delantero',      jersey_number: 11, rut: '24.567.890-5',  phone: '+56 9 5678 9012' },
  { first_name: 'Charles',  last_name: 'Aránguiz', position: 'Mediocampista',  jersey_number: 20, rut: '27.678.901-4',  phone: '+56 9 6789 0123' },
  { first_name: 'Mauricio', last_name: 'Isla',     position: 'Defensa',        jersey_number: 4,  rut: '30.789.012-3',  phone: '+56 9 7890 1234' },
  { first_name: 'Eugenio',  last_name: 'Mena',     position: 'Defensa',        jersey_number: 2,  rut: '33.890.123-2',  phone: '+56 9 8901 2345' },
]

export default function Plantilla() {
  return (
    <PageLayout>
      <PageHeader
        label="Nuestros Jugadores"
        title="Plantilla"
        highlight="Oficial"
        description="Conoce a los guerreros que defienden los colores del Club Deportivo Florida en la presente temporada."
      />

      <div className="flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory mb-4 sm:mb-6 pb-1">
        <Button variant="primary" className="shrink-0 snap-start bg-[#c7a86b]/20 text-white border-[#c7a86b] shadow-[0_0_10px_rgba(199,168,107,0.3)]">Primera División</Button>
        <Button variant="ghost" className="shrink-0 snap-start text-[#c7a86b] border-[#c7a86b]/30 hover:bg-[#c7a86b]/10 hover:border-[#c7a86b]/50">Reserva</Button>
        <Button variant="ghost" className="shrink-0 snap-start text-[#c7a86b] border-[#c7a86b]/30 hover:bg-[#c7a86b]/10 hover:border-[#c7a86b]/50">Sub-17</Button>
        <Button variant="ghost" className="shrink-0 snap-start text-[#c7a86b] border-[#c7a86b]/30 hover:bg-[#c7a86b]/10 hover:border-[#c7a86b]/50">Sub-15</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {squadMock.map((player, idx) => (
          <div key={idx}>
            <PlayerCard player={player} />
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
