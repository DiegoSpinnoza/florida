import React from 'react'

export function StandingsTable({ standings, limit }) {
  const rows = limit ? standings.slice(0, limit) : standings

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse min-w-[320px]">
        <thead className="sticky top-0 bg-neutral-900/98 z-20">
          <tr className="border-b border-[#c7a86b]/30">
            <th className="w-7 text-center text-[9px] font-bold text-neutral-400 uppercase tracking-[0.1em] px-1 py-2">Pos</th>
            <th className="text-left text-[9px] font-bold text-neutral-400 uppercase tracking-[0.1em] px-2 py-2">Equipo</th>
            <th className="w-7 text-center text-[9px] font-bold text-neutral-400 uppercase tracking-[0.1em] px-1 py-2" title="Partidos Jugados">PJ</th>
            <th className="w-7 text-center text-[9px] font-bold text-neutral-400 uppercase tracking-[0.1em] px-1 py-2 hidden sm:table-cell" title="Ganados">G</th>
            <th className="w-7 text-center text-[9px] font-bold text-neutral-400 uppercase tracking-[0.1em] px-1 py-2 hidden md:table-cell" title="Empatados">E</th>
            <th className="w-7 text-center text-[9px] font-bold text-neutral-400 uppercase tracking-[0.1em] px-1 py-2 hidden lg:table-cell" title="Perdidos">P</th>
            <th className="w-9 text-center text-[9px] font-bold text-neutral-400 uppercase tracking-[0.1em] px-1 py-2 hidden xl:table-cell" title="Diferencia de Goles">+/-</th>
            <th className="w-9 text-center text-[9px] font-bold text-[#c7a86b] uppercase tracking-[0.1em] px-1 py-2">Pts</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((team) => {
            const isFlorida = team.team_name.toLowerCase().includes('florida')
            const isRival = team.team_name.toLowerCase().includes('chile wanderers')
            return (
              <tr
                key={team.team_name}
                className={`border-b transition-colors relative ${
                  isFlorida 
                    ? 'border-white/20' :
                  isRival 
                    ? 'bg-red-500/8 hover:bg-red-500/15 border-red-500/20' :
                  'hover:bg-white/4 border-white/4'
                }`}
                style={isFlorida ? { background: 'linear-gradient(90deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.02) 100%)' } : {}}
              >
                {/* Position */}
                <td className="px-1 py-1.5 text-center">
                  {team.position <= 3 ? (
                    <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-white text-[10px] font-extrabold ${
                      team.position === 1 ? 'bg-gradient-to-br from-amber-400 to-amber-600'
                      : team.position === 2 ? 'bg-gradient-to-br from-neutral-400 to-neutral-600'
                      : 'bg-gradient-to-br from-amber-700 to-amber-900'
                    }`}>
                      {team.position}
                    </span>
                  ) : (
                    <span className={`font-semibold text-[10px] ${isRival ? 'text-red-300' : isFlorida ? 'text-white' : 'text-neutral-500'}`}>{team.position}</span>
                  )}
                </td>
                {/* Team name */}
                <td className={`px-2 py-1.5 text-[11px] sm:text-xs ${
                  isFlorida ? 'font-bold text-white' :
                  isRival ? 'font-bold text-red-300' :
                  'font-medium text-neutral-300'
                }`}>
                  {team.team_name}
                </td>
                <td className={`px-1 py-1.5 text-center text-[10px] sm:text-[11px] font-semibold ${
                  isFlorida ? 'text-white' : isRival ? 'text-red-400' : 'text-neutral-400'
                }`}>{team.played}</td>
                <td className={`px-1 py-1.5 text-center text-[10px] sm:text-[11px] hidden sm:table-cell ${
                  isFlorida ? 'text-white' : isRival ? 'text-red-400' : 'text-neutral-400'
                }`}>{team.won}</td>
                <td className={`px-1 py-1.5 text-center text-[10px] sm:text-[11px] hidden md:table-cell ${
                  isFlorida ? 'text-white' : isRival ? 'text-red-400' : 'text-neutral-400'
                }`}>{team.drawn}</td>
                <td className={`px-1 py-1.5 text-center text-[10px] sm:text-[11px] hidden lg:table-cell ${
                  isFlorida ? 'text-white' : isRival ? 'text-red-400' : 'text-neutral-400'
                }`}>{team.lost}</td>
                <td className={`px-1 py-1.5 text-center text-[10px] sm:text-[11px] hidden xl:table-cell font-mono ${
                  isFlorida ? 'text-white' : isRival ? 'text-red-400' : 'text-neutral-400'
                }`}>
                  {team.goal_difference > 0 ? `+${team.goal_difference}` : team.goal_difference}
                </td>
                <td className={`px-1 py-1.5 text-center font-black text-sm sm:text-base ${
                  isFlorida ? 'text-white' : isRival ? 'text-red-400' : 'text-[#c7a86b]'
                }`}>{team.points}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
