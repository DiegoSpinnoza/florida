import React from 'react'
import PageLayout, { PageHeader } from '../components/layout/PageLayout'
import { StandingsTable } from '../components/standings/StandingsTable'
import { Trophy } from 'lucide-react'

const clubNames = [
  'Apolo',
  'Arturo Prat',
  'Atlético Bellavista',
  'Carlos Vial',
  'Chile Wanderers',
  'Diego Barros Arana',
  'Estrella Roja',
  'Florida',
  'Guillermo Rivera',
  'Invencible',
  'Juventud Bianchi',
  'Lord Cochrane',
  'Los Mariposinos',
  'Monjas',
  'Roberto Parra',
  'Santa Teresa',
  'Unión Deportivo Mariposa',
  'Unión Jiménez',
  'Valparaíso Royal',
]

const divisionSeeds = {
  '1ª Infantil': 2,
  '2ª Infantil': 5,
  '3ª Infantil': 8,
  Juvenil: 11,
  '1ª Adulta': 14,
  '2ª Adulta': 17,
  '3ª Adulta': 20,
  Seniors: 23,
}

const buildDivisionStandings = (seed) =>
  clubNames.map((teamName, index) => {
    const played = 10
    const strength = (index * 7 + seed) % 10
    const won = teamName === 'Florida' ? 7 : Math.min(9, Math.max(1, strength))
    const drawn = teamName === 'Florida' ? 2 : (index + seed) % 4
    const lost = Math.max(0, played - won - drawn)
    const goals_for = 8 + won * 2 + ((index + seed) % 6)
    const goals_against = 6 + lost * 2 + ((index * 3 + seed) % 5)

    return { team_name: teamName, won, drawn, lost, goals_for, goals_against }
  })

const divisionsData = Object.fromEntries(
  Object.entries(divisionSeeds).map(([division, seed]) => [division, buildDivisionStandings(seed)])
)

const computeStandings = (teams) =>
  teams.map(t => {
    const played = t.won + t.drawn + t.lost
    const points = t.won * 3 + t.drawn
    const goal_difference = t.goals_for - t.goals_against
    return { ...t, played, points, goal_difference }
  })
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points
      if (b.goal_difference !== a.goal_difference) return b.goal_difference - a.goal_difference
      return b.goals_for - a.goals_for
    })
    .map((team, index) => ({ ...team, position: index + 1 }))

const getGeneralStandings = () => {
  const acc = {}
  clubNames.forEach(n => { acc[n] = { team_name: n, won: 0, drawn: 0, lost: 0, goals_for: 0, goals_against: 0 } })
  Object.values(divisionsData).forEach(div =>
    div.forEach(t => {
      if (acc[t.team_name]) {
        acc[t.team_name].won += t.won; acc[t.team_name].drawn += t.drawn; acc[t.team_name].lost += t.lost
        acc[t.team_name].goals_for += t.goals_for; acc[t.team_name].goals_against += t.goals_against
      }
    })
  )
  return computeStandings(Object.values(acc))
}

const divisionsList = ['General', ...Object.keys(divisionSeeds)]

export default function Tabla() {
  const [selectedDivision, setSelectedDivision] = React.useState('General')

  const standingsData = selectedDivision === 'General'
    ? getGeneralStandings()
    : computeStandings(divisionsData[selectedDivision])

  return (
    <PageLayout>
      <PageHeader
        title="Tabla de Posiciones"
        description="Sigue el rendimiento de nuestros equipos en la Liga Regional."
      />

      <div className="max-w-5xl mx-auto">
        {/* Filters section */}
        <div
          className="relative px-3 sm:px-4 py-2 sm:py-3 border border-[#c7a86b]/25 mb-4 sm:mb-6 backdrop-blur-sm overflow-hidden"
          style={{
            background: `
      radial-gradient(circle at top, rgba(199,168,107,0.05) 0%, transparent 60%),
      radial-gradient(circle at bottom right, rgba(199,168,107,0.025) 0%, transparent 65%),
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
              {divisionsList.map((div) => {
                const isSelected = selectedDivision === div
                return (
                  <button
                    key={div}
                    onClick={() => setSelectedDivision(div)}
                    className={`
    px-1.5 sm:px-2 py-0.5 sm:py-1 text-[8px] sm:text-[9px]
    font-bold uppercase tracking-wider
    transition-all duration-200 border shrink-0 rounded-sm

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
                    {div}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="bg-neutral-900/70 border border-[#c7a86b]/20 rounded-2xl overflow-hidden shadow-2xl">

          {/* Main header */}
          <div className="px-4 sm:px-6 py-2 sm:py-3 border-b border-[#c7a86b]/20 bg-gradient-to-r from-[#c7a86b]/10 via-transparent to-[#c7a86b]/10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-[#c7a86b]/10 border border-[#c7a86b]/30 flex items-center justify-center">
                <Trophy size={12} className="text-[#c7a86b]" />
              </div>
              <h3 className="font-outfit font-bold text-sm sm:text-lg text-white">
                {selectedDivision === 'General' ? 'General' : `División ${selectedDivision}`}
              </h3>
            </div>
          </div>

          {/* Table */}
          <div className="px-3 sm:px-4 sm:px-6 py-3">
            <StandingsTable standings={standingsData} />
          </div>

        </div>
      </div>
    </PageLayout>
  )
}
