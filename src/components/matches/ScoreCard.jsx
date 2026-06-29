import React from 'react'
import { Card } from '../ui/Card'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

export function ScoreCard({ match }) {
  const date = new Date(match.match_date)

  const isFloridaHome = match.home_team.toLowerCase().includes('florida')
  const isFloridaAway = match.away_team.toLowerCase().includes('florida')

  let borderColor = 'rgba(255,255,255,0.08)'
  let hoverBorderColor = 'rgba(255,255,255,0.15)'
  let gradientColor = 'rgba(255,255,255,0.05)'
  let shadowColor = 'rgba(255,255,255,0.05)'

  if (match.status === 'completed' && match.home_score !== null && match.away_score !== null) {
    borderColor = 'rgba(199,168,107,0.3)'
    hoverBorderColor = 'rgba(199,168,107,0.5)'
    gradientColor = 'rgba(255,255,255,0.05)'
    shadowColor = 'rgba(199,168,107,0.15)'
  }

  return (
    <Card 
      className="p-3 sm:p-5 border relative overflow-hidden"
      style={{
        borderColor: borderColor,
        background: `radial-gradient(120% 120% at 50% -20%, ${gradientColor} 0%, rgba(23,23,23,0.95) 50%, rgba(10,10,10,0.98) 100%)`,
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-neutral-100">
        <span className="text-[10px] sm:text-xs text-neutral-400 font-semibold">
          {format(date, "d MMM, yyyy", { locale: es })}
        </span>
        <div className="flex gap-2 items-center">
          {match.status === 'live' && (
            <span className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-red-600 uppercase">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-ping" /> Vivo
            </span>
          )}
        </div>
      </div>

      {/* Teams & Scores */}
      <div className="flex flex-col gap-2.5 sm:gap-3.5">
        {/* Home */}
        <div className="flex justify-between items-center">
          <span className={`font-outfit font-bold text-[13px] sm:text-sm ${
            isFloridaHome ? 'text-white' : 'text-neutral-300'
          }`}>
            {match.home_team}
          </span>
          <span className={`font-outfit font-black text-xl sm:text-2xl ${
            match.home_score !== null && match.home_score > (match.away_score || 0)
              ? 'text-white'
              : 'text-neutral-500'
          }`}>
            {match.home_score !== null ? match.home_score : '-'}
          </span>
        </div>

        {/* Away */}
        <div className="flex justify-between items-center">
          <span className={`font-outfit font-bold text-[13px] sm:text-sm ${
            isFloridaAway ? 'text-white' : 'text-neutral-300'
          }`}>
            {match.away_team}
          </span>
          <span className={`font-outfit font-black text-xl sm:text-2xl ${
            match.away_score !== null && match.away_score > (match.home_score || 0)
              ? 'text-white'
              : 'text-neutral-500'
          }`}>
            {match.away_score !== null ? match.away_score : '-'}
          </span>
        </div>
      </div>
    </Card>
  )
}
