import React from 'react'
import { Card } from '../ui/Card'
import { Check, Clock, X } from 'lucide-react'

const statusConfig = {
  confirmed: {
    label: 'Confirmado',
    icon: <Check size={13} />,
    badgeClass: 'bg-green-50 text-green-700 border-green-200/60',
  },
  called: {
    label: 'Pendiente',
    icon: <Clock size={13} />,
    badgeClass: 'bg-neutral-50 text-neutral-500 border-neutral-200',
  },
  absent: {
    label: 'Ausente',
    icon: <X size={13} />,
    badgeClass: 'bg-red-50 text-red-600 border-red-200/50',
  },
}

export function CallupList({ callup, players }) {
  return (
    <Card className="overflow-hidden p-0 border border-neutral-200/80 shadow-sm rounded-2xl bg-white">
      {/* Header */}
      <div className="p-6 border-b border-neutral-100 bg-neutral-50/50">
        <div className="flex justify-between items-start gap-4 mb-4">
          <div>
            <h3 className="font-outfit font-extrabold text-xl text-neutral-800 mb-1">
              {callup.title}
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-lg">
              {callup.description}
            </p>
          </div>
          <span className="bg-white/10 text-white border border-white/20 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shrink-0">
            Activa
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-xs font-semibold text-white">
          <Clock size={14} className="text-white shrink-0" />
          <span>Confirmar antes de: <strong className="text-white">Hoy, 20:00 hrs</strong></span>
        </div>
      </div>

      {/* Summary badges */}
      <div className="px-6 py-4 border-b border-neutral-100 flex gap-2.5 flex-wrap">
        {[
          { label: 'Confirmados', count: players.filter(p => p.status === 'confirmed').length, ...statusConfig.confirmed },
          { label: 'Pendientes',  count: players.filter(p => p.status === 'called').length,    ...statusConfig.called    },
          { label: 'Ausentes',    count: players.filter(p => p.status === 'absent').length,    ...statusConfig.absent    },
        ].map((s) => (
          <div key={s.label} className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border text-xs font-bold ${s.badgeClass}`}>
            {s.icon}
            <span>{s.count} {s.label}</span>
          </div>
        ))}
      </div>

      {/* Player rows */}
      <div className="divide-y divide-neutral-100">
        {players.map((cp, i) => {
          const st = statusConfig[cp.status] || statusConfig.called
          return (
            <div
              key={i}
              className="px-6 py-4 flex items-center justify-between hover:bg-neutral-50/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                {/* Jersey number */}
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#c7a86b] to-[#a88a4f] flex items-center justify-center font-outfit font-black text-xs text-white shrink-0 shadow-md shadow-[#c7a86b]/20">
                  {cp.player.jersey_number || '?'}
                </div>
                {/* Name & position */}
                <div>
                  <div className="font-semibold text-neutral-700 text-sm">
                    {cp.player.first_name} {cp.player.last_name}
                  </div>
                  <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-500 mt-0.5">
                    {cp.player.position}
                  </div>
                </div>
              </div>

              {/* Status badge */}
              <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${st.badgeClass}`}>
                {st.icon}
                <span>{st.label}</span>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
