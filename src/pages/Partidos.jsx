import { useState } from 'react'
import PageLayout, { PageHeader } from '../components/layout/PageLayout'
import { MatchCard } from '../components/matches/MatchCard'

const upcomingMatchesMock = [
  { home_team: 'Club Florida', away_team: 'Chile Wanderers', match_date: '2026-06-27T09:30:00.000Z', venue: 'Cancha Principal, Club Florida', competition: 'Osman Perez Freire', division: { name: '3ª Infantil' } },
  { home_team: 'Club Florida', away_team: 'Chile Wanderers', match_date: '2026-06-27T10:45:00.000Z', venue: 'Cancha Principal, Club Florida', competition: 'Osman Perez Freire', division: { name: '2ª Infantil' } },
  { home_team: 'Club Florida', away_team: 'Chile Wanderers', match_date: '2026-06-27T12:00:00.000Z', venue: 'Cancha Principal, Club Florida', competition: 'Liga Regional', division: { name: '1ª Infantil' } },
  { home_team: 'Club Florida', away_team: 'Chile Wanderers', match_date: '2026-06-27T13:30:00.000Z', venue: 'Cancha Principal, Club Florida', competition: 'Liga Regional', division: { name: 'Juvenil' } },
  { home_team: 'Club Florida', away_team: 'Chile Wanderers', match_date: '2026-06-27T15:30:00.000Z', venue: 'Cancha Principal, Club Florida', competition: 'Liga Regional', division: { name: 'Seniors' } },
  { home_team: 'Club Florida', away_team: 'Chile Wanderers', match_date: '2026-06-28T10:00:00.000Z', venue: 'Cancha Principal, Club Florida', competition: 'Osman Perez Freire', division: { name: '3ª Adulta' } },
  { home_team: 'Club Florida', away_team: 'Chile Wanderers', match_date: '2026-06-28T12:00:00.000Z', venue: 'Cancha Principal, Club Florida', competition: 'Liga Regional', division: { name: '2ª Adulta' } },
  { home_team: 'Club Florida', away_team: 'Chile Wanderers', match_date: '2026-06-28T14:30:00.000Z', venue: 'Cancha Principal, Club Florida', competition: 'Liga Regional', division: { name: '1ª Adulta' } },
]

const filters = [
  { id: 'Todos',           label: 'Todos' },
  { id: 'Infantiles',      label: 'Infantiles' },
  { id: 'Juveniles',       label: 'Juveniles' },
  { id: 'Adultos/Seniors', label: 'Adultos y Seniors' },
]

export default function Partidos() {
  const [filter, setFilter] = useState('Todos')

  const filtered = upcomingMatchesMock.filter(m => {
    if (filter === 'Todos') return true
    if (filter === 'Infantiles')      return m.division.name.includes('Infantil')
    if (filter === 'Juveniles')       return m.division.name.includes('Juvenil')
    if (filter === 'Adultos/Seniors') return m.division.name.includes('Adulta') || m.division.name.includes('Seniors')
    return true
  })

  return (
    <PageLayout>
      <PageHeader
        label="Calendario"
        title="Próximos"
        highlight="Partidos"
        // description={
        //   <>Esta fecha jugamos todas las categorías contra <strong className="text-[#c7a86b]">Chile Wanderers</strong>.</>
        // }
      />

      <div className="px-3 sm:px-4 py-2 sm:py-3 border-b border-[#c7a86b]/10 bg-neutral-900/95 backdrop-blur-sm mb-4 sm:mb-6">
        <div className="flex flex-wrap gap-1 sm:gap-1.5 justify-center">
          {filters.map((f) => {
            const isSelected = filter === f.id
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`
                  px-1.5 sm:px-2 py-0.5 sm:py-1 text-[7px] sm:text-[9px] font-bold uppercase tracking-wider
                  transition-all duration-200 border shrink-0
                  ${isSelected
                    ? 'bg-[#c7a86b]/15 text-[#c7a86b] border-[#c7a86b] shadow-[0_0_6px_rgba(199,168,107,0.12)]'
                    : 'bg-neutral-900/50 text-neutral-400 border-white/10 hover:border-[#c7a86b]/40 hover:text-[#c7a86b]/80 hover:bg-[#c7a86b]/5'
                  }
                `}
              >
                {f.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filtered.map((match, idx) => (
          <div key={idx}>
            <MatchCard match={match} />
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
