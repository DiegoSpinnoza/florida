import React from 'react'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { Calendar, MapPin, Clock } from 'lucide-react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

export function MatchCard({ match }) {
  const date = new Date(match.match_date)
  const isOsman = match.competition === 'Osman Perez Freire'

  return (
    <div className={`bg-neutral-900/70 border rounded-2xl p-3 sm:p-4 md:p-5 hover:bg-neutral-900/90 transition-all duration-200 group ${isOsman ? 'border-red-500/30 hover:border-red-500/50' : 'border-white/8 hover:border-white/15'}`}>
      {/* Header */}
      <div className="flex justify-between items-start mb-3 sm:mb-4">
        <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20">
          {match.division?.name || 'División'}
        </span>
        {isOsman ? (
          <div className="flex items-center gap-1">
            <img 
              src="/images/osmanPrerezFreire.png" 
              alt="Osman Perez Freire" 
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            />
            <span className="text-[9px] sm:text-[10px] font-bold text-red-400 uppercase tracking-widest">
              {match.competition}
            </span>
          </div>
        ) : (
          <span className="text-[9px] sm:text-[10px] font-bold text-[#c7a86b] uppercase tracking-widest">
            {match.competition}
          </span>
        )}
      </div>

      {/* Teams */}
      <div className="flex justify-between items-center mb-3 sm:mb-5 px-1 sm:px-2">
        {/* Home */}
        <div className="text-center flex-1">
          <img src="/images/florida.svg" alt="Florida" className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 object-contain flex items-center justify-center mx-auto mb-1.5 sm:mb-2" />
          <p className="font-outfit font-bold text-[10px] sm:text-[11px] md:text-xs text-white leading-tight">{match.home_team}</p>
        </div>

        {/* VS */}
        <div className="px-1.5 sm:px-2 md:px-3 text-center">
          <div className="font-outfit font-black text-sm sm:text-base md:text-lg text-neutral-600 tracking-tight">VS</div>
        </div>

        {/* Away */}
        <div className="text-center flex-1">
          <img src="/images/chw.png" alt="Chile Wanderers" className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 object-contain flex items-center justify-center mx-auto mb-1.5 sm:mb-2" />
          <p className="font-outfit font-bold text-[10px] sm:text-[11px] md:text-xs text-white leading-tight">{match.away_team}</p>
        </div>
      </div>

      {/* Details */}
      <div className="grid grid-cols-2 gap-1.5 pt-2 sm:pt-3 border-t border-white/6 text-[9px] sm:text-[10px] md:text-xs font-semibold text-neutral-500">
        <div className="flex items-center gap-1">
          <Calendar size={11} className="text-[#c7a86b] shrink-0" />
          <span>{format(date, "d 'de' MMMM", { locale: es })}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={11} className="text-[#c7a86b] shrink-0" />
          <span>{format(date, "HH:mm")} hrs</span>
        </div>
        <div className="col-span-2 flex items-center gap-1">
          <MapPin size={11} className="text-[#c7a86b] shrink-0" />
          <span className="truncate">{match.venue || 'Por definir'}</span>
        </div>
      </div>
    </div>
  )
}
