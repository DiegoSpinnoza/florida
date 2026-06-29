import React from 'react'
import PageLayout, { PageHeader } from '../components/layout/PageLayout'
import { ScoreCard } from '../components/matches/ScoreCard'

const filters = [
  { id: 'Todos', label: 'Todos' },
  { id: 'Infantiles', label: 'Infantiles' },
  { id: 'Juveniles', label: 'Juveniles' },
  { id: 'Adultos/Seniors', label: 'Adultos y Seniors' },
]

const recentResultsMock = [
  {
    home_team: 'Deportes Macul',
    away_team: 'Club Florida',
    match_date: new Date(Date.now() - 86400000 * 4).toISOString(),
    home_score: 1,
    away_score: 3,
    competition: 'Liga Regional',
    division: { name: '1ª Adulta' },
    status: 'completed'
  },
  {
    home_team: 'Club Florida',
    away_team: 'Juventud Providencia',
    match_date: new Date(Date.now() - 86400000 * 11).toISOString(),
    home_score: 2,
    away_score: 2,
    competition: 'Liga Regional',
    division: { name: 'Juvenil' },
    status: 'completed'
  },
  {
    home_team: 'Estrella de Chile',
    away_team: 'Club Florida',
    match_date: new Date(Date.now() - 86400000 * 18).toISOString(),
    home_score: 0,
    away_score: 4,
    competition: 'Liga Regional',
    division: { name: '3ª Infantil' },
    status: 'completed'
  },
  {
    home_team: 'Club Florida',
    away_team: 'Unión San Miguel',
    match_date: new Date(Date.now() - 86400000 * 25).toISOString(),
    home_score: 1,
    away_score: 0,
    competition: 'Liga Regional',
    division: { name: 'Seniors' },
    status: 'completed'
  }
]

export default function Resultados() {
  const [filter, setFilter] = React.useState('Todos')

  const filtered = recentResultsMock.filter(match => {
    if (filter === 'Todos') return true
    if (filter === 'Infantiles') return match.division.name.includes('Infantil')
    if (filter === 'Juveniles') return match.division.name.includes('Juvenil')
    if (filter === 'Adultos/Seniors') return match.division.name.includes('Adulta') || match.division.name.includes('Seniors')
    return true
  })

  return (
    <PageLayout>
      <PageHeader
        title="ÚLTIMOS RESULTADOS"
        description="Revisa el marcador y los detalles de nuestros encuentros pasados."
      />

      <div className="max-w-5xl mx-auto">
        <div className="px-3 sm:px-4 py-2 sm:py-3 border border-[#c7a86b]/10 bg-neutral-900/95 backdrop-blur-sm rounded-xl mb-4 sm:mb-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-[9px] sm:text-xs font-bold text-neutral-400 uppercase tracking-wider">
              Ordenar por
            </span>
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filtered.map((match, idx) => (
            <div key={idx}>
              <ScoreCard match={match} />
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
