import React from 'react'
import PageLayout, { PageHeader } from '../components/layout/PageLayout'
import { StandingsTable } from '../components/standings/StandingsTable'

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

      <div className="max-w-4xl mx-auto">
        <div className="bg-neutral-900/60 border border-white/8 rounded-2xl overflow-hidden">

          <div className="px-4 py-3 border-b border-white/8">
            <h3 className="font-outfit font-bold text-sm sm:text-base text-white">
              {selectedDivision === 'General' ? 'Tabla General' : `División ${selectedDivision}`}
            </h3>
          </div>

          <div className="px-4 py-4 border-b border-white/8">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-1">
              {divisionsList.map((div) => {
                const isSelected = selectedDivision === div
                return (
                  <button
                    key={div}
                    onClick={() => setSelectedDivision(div)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 border shrink-0 snap-start
                ${isSelected
                        ? 'bg-[#c7a86b]/20 text-white border-[#c7a86b] shadow-[0_0_10px_rgba(199,168,107,0.3)]'
                        : 'text-[#c7a86b] border-[#c7a86b]/30 hover:bg-[#c7a86b]/10 hover:border-[#c7a86b]/50'
                      }`}
                  >
                    {div}
                  </button>
                )
              })}
            </div>
          </div>

          <StandingsTable standings={standingsData} />

        </div>
      </div>
    </PageLayout>
  )
}
