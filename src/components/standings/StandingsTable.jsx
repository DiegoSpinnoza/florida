import React from 'react'

export function StandingsTable({ standings, limit }) {
  const rows = limit ? standings.slice(0, limit) : standings

  return (
    <div className="overflow-x-auto -mx-4 px-4">
      <div className="max-h-[40vh] sm:max-h-[60vh] overflow-y-auto">
        <table className="w-full border-collapse min-w-[500px]">
          <thead className="sticky top-0 bg-neutral-900/95 z-10">
            <tr className="border-b border-white/6">
              <th className="w-12 text-center text-[9px] sm:text-[10px] font-bold text-neutral-500 uppercase tracking-wider px-2 sm:px-4 py-3">Pos</th>
              <th className="text-left text-[9px] sm:text-[10px] font-bold text-neutral-500 uppercase tracking-wider px-2 sm:px-4 py-3">Equipo</th>
              <th className="w-12 text-center text-[9px] sm:text-[10px] font-bold text-neutral-500 uppercase tracking-wider px-2 sm:px-4 py-3" title="Partidos Jugados">PJ</th>
              <th className="w-12 text-center text-[9px] sm:text-[10px] font-bold text-neutral-500 uppercase tracking-wider px-2 sm:px-4 py-3 hidden sm:table-cell" title="Ganados">PG</th>
              <th className="w-12 text-center text-[9px] sm:text-[10px] font-bold text-neutral-500 uppercase tracking-wider px-2 sm:px-4 py-3 hidden sm:table-cell" title="Empatados">PE</th>
              <th className="w-12 text-center text-[9px] sm:text-[10px] font-bold text-neutral-500 uppercase tracking-wider px-2 sm:px-4 py-3 hidden sm:table-cell" title="Perdidos">PP</th>
              <th className="w-16 text-center text-[9px] sm:text-[10px] font-bold text-neutral-500 uppercase tracking-wider px-2 sm:px-4 py-3 hidden md:table-cell" title="Diferencia de Goles">DG</th>
              <th className="w-16 text-center text-[9px] sm:text-[10px] font-bold text-white uppercase tracking-wider px-2 sm:px-4 py-3">Pts</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((team) => {
              const isFlorida = team.team_name.toLowerCase().includes('florida')
              return (
                <tr
                  key={team.team_name}
                  className={`border-b border-white/4 transition-colors ${
                    isFlorida ? 'bg-[#c7a86b]/8 hover:bg-[#c7a86b]/12' : 'hover:bg-white/4'
                  }`}
                >
                  {/* Position */}
                  <td className="px-2 sm:px-4 py-3 sm:py-3.5 text-center">
                    {team.position <= 3 ? (
                      <span className={`inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full text-white text-[9px] sm:text-[10px] font-extrabold ${
                        team.position === 1 ? 'bg-gradient-to-br from-amber-400 to-amber-500'
                        : team.position === 2 ? 'bg-gradient-to-br from-neutral-400 to-neutral-500'
                        : 'bg-gradient-to-br from-amber-700 to-amber-800'
                      }`}>
                        {team.position}
                      </span>
                    ) : (
                      <span className="text-neutral-600 font-semibold text-[11px] sm:text-xs">{team.position}</span>
                    )}
                  </td>
                  {/* Team name */}
                  <td className={`px-2 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm ${isFlorida ? 'font-bold text-white' : 'font-semibold text-neutral-300'}`}>
                    {team.team_name}
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-3.5 text-center text-xs sm:text-sm text-neutral-500 font-medium">{team.played}</td>
                  <td className="px-2 sm:px-4 py-3 sm:py-3.5 text-center text-xs sm:text-sm text-neutral-500 hidden sm:table-cell">{team.won}</td>
                  <td className="px-2 sm:px-4 py-3 sm:py-3.5 text-center text-xs sm:text-sm text-neutral-500 hidden sm:table-cell">{team.drawn}</td>
                  <td className="px-2 sm:px-4 py-3 sm:py-3.5 text-center text-xs sm:text-sm text-neutral-500 hidden sm:table-cell">{team.lost}</td>
                  <td className="px-2 sm:px-4 py-3 sm:py-3.5 text-center text-xs sm:text-sm text-neutral-500 hidden md:table-cell font-mono">
                    {team.goal_difference > 0 ? `+${team.goal_difference}` : team.goal_difference}
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-3.5 text-center font-black text-xs sm:text-sm text-white">{team.points}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
