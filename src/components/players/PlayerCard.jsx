import React from 'react'
import { Card } from '../ui/Card'
import { Shield, ShieldHalf, Footprints, Hash, IdCard } from 'lucide-react'

const positionStyles = {
  arquero:       { bg: 'bg-[#c7a86b]/10', border: 'border-[#c7a86b]/20', text: 'text-[#c7a86b]' },
  defensa:       { bg: 'bg-neutral-100', border: 'border-neutral-200', text: 'text-neutral-700' },
  mediocampista: { bg: 'bg-neutral-100', border: 'border-neutral-200', text: 'text-neutral-700' },
  delantero:     { bg: 'bg-neutral-100', border: 'border-neutral-200', text: 'text-neutral-700' },
}

function getPositionStyle(position) {
  const key = position?.toLowerCase()
  return positionStyles[key] || positionStyles.defensa
}

export function PlayerCard({ player }) {
  const isGoalkeeper  = player.position?.toLowerCase() === 'arquero'
  const isDefender    = player.position?.toLowerCase() === 'defensa'
  const isMidfielder  = player.position?.toLowerCase() === 'mediocampista'
  const pStyle        = getPositionStyle(player.position)

  return (
    <Card className="p-4 border border-white/8 rounded-2xl bg-neutral-900/60 hover:border-white/15 transition-all duration-200">
      {/* Header with jersey number */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          {player.jersey_number && (
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[#c7a86b]/10 border border-[#c7a86b]/20">
              <Hash size={12} className="text-[#c7a86b]" />
              <span className="font-outfit font-black text-sm text-white">
                {player.jersey_number}
              </span>
            </div>
          )}
          <div className="flex items-center gap-1">
            {isGoalkeeper  && <ShieldHalf size={12} className="text-[#c7a86b]" />}
            {isDefender    && <Shield     size={12} className="text-neutral-400" />}
            {isMidfielder  && <Footprints size={12} className="text-neutral-400" />}
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              {player.position}
            </span>
          </div>
        </div>
      </div>

      {/* Name */}
      <h3 className="font-outfit font-extrabold text-white leading-tight text-lg mb-3">
        {player.first_name} <span className="text-xl font-black">{player.last_name}</span>
      </h3>

      {/* Personal Info */}
      <div className="space-y-2 pt-3 border-t border-white/8">
        {player.rut && (
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <IdCard size={13} className="text-neutral-400 shrink-0" />
            <span className="font-mono">{player.rut}</span>
          </div>
        )}
        {player.phone && (
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span className="text-neutral-400 shrink-0">📱</span>
            <span>{player.phone}</span>
          </div>
        )}
      </div>
    </Card>
  )
}
