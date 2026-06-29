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
  { id: 'Todos', label: 'Todos' },
  { id: 'Infantiles', label: 'Infantiles' },
  { id: 'Juveniles', label: 'Juveniles' },
  { id: 'Adultos/Seniors', label: 'Adultos y Seniors' },
]

export default function Partidos() {
  const [filter, setFilter] = useState('Todos')

  const filtered = upcomingMatchesMock.filter(m => {
    if (filter === 'Todos') return true
    if (filter === 'Infantiles') return m.division.name.includes('Infantil')
    if (filter === 'Juveniles') return m.division.name.includes('Juvenil')
    if (filter === 'Adultos/Seniors') return m.division.name.includes('Adulta') || m.division.name.includes('Seniors')
    return true
  })

  return (
    <PageLayout>
      <PageHeader
        title="PRÓXIMOS PARTIDOS"
        description="Conoce los próximos partidos del Club Deportivo Florida en la presente temporada."
      />

      <div className="max-w-5xl mx-auto">
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

            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {filters.map((f) => {
                const isSelected = filter === f.id
                return (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id)}
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
                    {f.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filtered.map((match, idx) => (
            <div key={idx}>
              <MatchCard match={match} />
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
