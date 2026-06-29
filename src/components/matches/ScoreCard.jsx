import React from 'react'
import { Card } from '../ui/Card'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

export function ScoreCard({ match }) {
  const date = new Date(match.match_date)

  const isFloridaHome = match.home_team.toLowerCase().includes('florida')
  const isFloridaAway = match.away_team.toLowerCase().includes('florida')

  let resultClasses = 'border-neutral-200 bg-white hover:border-neutral-300'
  if (match.status === 'completed' && match.home_score !== null && match.away_score !== null) {
    if (match.home_score === match.away_score) {
      resultClasses = 'border-[#c7a86b] bg-[#c7a86b]/10 hover:border-[#c7a86b]'
    } else if (
      (isFloridaHome && match.home_score > match.away_score) ||
      (isFloridaAway && match.away_score > match.home_score)
    ) {
      resultClasses = 'border-green-200 bg-green-50/20 hover:border-green-300'
    } else if (isFloridaHome || isFloridaAway) {
      resultClasses = 'border-red-200 bg-red-50/20 hover:border-red-300'
    }
  }

  return (
    <Card className={`p-3 sm:p-5 transition-all duration-300 ${resultClasses}`}>
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
            isFloridaHome ? 'text-white' : 'text-neutral-700'
          }`}>
            {match.home_team}
          </span>
          <span className={`font-outfit font-black text-xl sm:text-2xl ${
            match.home_score !== null && match.home_score > (match.away_score || 0)
              ? 'text-neutral-800'
              : 'text-neutral-400'
          }`}>
            {match.home_score !== null ? match.home_score : '-'}
          </span>
        </div>

        {/* Away */}
        <div className="flex justify-between items-center">
          <span className={`font-outfit font-bold text-[13px] sm:text-sm ${
            isFloridaAway ? 'text-white' : 'text-neutral-700'
          }`}>
            {match.away_team}
          </span>
          <span className={`font-outfit font-black text-xl sm:text-2xl ${
            match.away_score !== null && match.away_score > (match.home_score || 0)
              ? 'text-neutral-800'
              : 'text-neutral-400'
          }`}>
            {match.away_score !== null ? match.away_score : '-'}
          </span>
        </div>
      </div>
    </Card>
  )
}
