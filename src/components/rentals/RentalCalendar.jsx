import React from 'react'
import { Card } from '../ui/Card'
import { format, addDays, startOfWeek } from 'date-fns'
import { es } from 'date-fns/locale'

export function RentalCalendar() {
  const today = new Date()
  const start = startOfWeek(today, { weekStartsOn: 1 })
  const days = Array.from({ length: 7 }).map((_, i) => addDays(start, i))
  const hours = Array.from({ length: 14 }).map((_, i) => i + 9) // 9:00 to 22:00

  return (
    <Card className="p-4 overflow-x-auto border border-neutral-200/80 shadow-sm rounded-2xl bg-white">
      <div className="min-w-[640px]">
        {/* Header row */}
        <div className="grid grid-cols-[60px_repeat(7,1fr)] gap-1.5 mb-3">
          <div className="text-center text-xs font-semibold text-neutral-400 py-2">
            Hora
          </div>
          {days.map((day, i) => {
            const isToday = day.toDateString() === today.toDateString()
            return (
              <div
                key={i}
                className={`text-center py-2 px-1 rounded-xl border ${
                  isToday
                    ? 'bg-[#c7a86b]/10 border-[#c7a86b]/30'
                    : 'bg-neutral-50 border-neutral-100'
                }`}
              >
                <div
                  className={`text-[9px] font-bold uppercase tracking-wider ${
                    isToday ? 'text-white' : 'text-neutral-400'
                  }`}
                >
                  {format(day, 'EEE', { locale: es })}
                </div>
                <div
                  className={`font-outfit font-extrabold text-base leading-none mt-1 ${
                    isToday ? 'text-white' : 'text-neutral-800'
                  }`}
                >
                  {format(day, 'd')}
                </div>
              </div>
            )
          })}
        </div>

        {/* Time grid */}
        <div className="flex flex-col gap-1">
          {hours.map((hour) => (
            <div key={hour} className="grid grid-cols-[60px_repeat(7,1fr)] gap-1.5">
              <div className="text-center text-xs font-bold text-neutral-400 flex items-center justify-center">
                {hour}:00
              </div>
              {days.map((day, i) => {
                const isBooked = (hour === 19 && i === 2) || (hour === 20 && i === 2) || (hour === 10 && i === 5)
                const isPast = day < today && day.toDateString() !== today.toDateString()

                let buttonClass = ''
                if (isPast) {
                  buttonClass = 'bg-neutral-50 border-neutral-100 text-neutral-300 cursor-not-allowed'
                } else if (isBooked) {
                  buttonClass = 'bg-red-50 border-red-200 text-red-600 cursor-not-allowed'
                } else {
                  buttonClass = 'bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-[1.03] cursor-pointer'
                }

                return (
                  <button
                    key={i}
                    disabled={isBooked || isPast}
                    className={`rounded-lg border py-2 px-1 text-[10px] font-bold text-center transition-all duration-150 ${buttonClass}`}
                  >
                    {isBooked ? 'Ocupado' : isPast ? '–' : 'Libre'}
                  </button>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
