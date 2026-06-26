import React from 'react'
import { Card } from '../ui/Card'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'

export function RentalForm() {
  return (
    <Card className="p-6 border-t-3 border-t-[#c7a86b] border-neutral-200/80 shadow-sm rounded-2xl bg-white">
      <div className="mb-6">
        <h3 className="font-outfit font-extrabold text-lg text-neutral-800 mb-1">
          Solicitar Reserva
        </h3>
        <p className="text-xs text-neutral-500">
          Completa el formulario y te enviaremos la confirmación por WhatsApp.
        </p>
      </div>

      <form className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-4">
          <Input label="Nombre Completo"       placeholder="Ej: Juan Pérez"       required />
          <Input label="Teléfono (WhatsApp)"   placeholder="+56 9 1234 5678"      type="tel" required />
        </div>

        <Input label="Correo Electrónico" placeholder="juan@ejemplo.com" type="email" />

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
          <Input label="Fecha del Evento" type="date" required />
          <div className="grid grid-cols-2 gap-2">
            <Input label="Hora Inicio" type="time" required />
            <Input label="Hora Fin"    type="time" required />
          </div>
        </div>

        <div>
          <label className="label">Tipo de Evento</label>
          <div className="relative">
            <select className="w-full bg-white border border-neutral-200/80 rounded-xl px-3.5 py-2.5 text-sm text-neutral-700 font-medium focus:border-[#c7a86b] focus:ring-3 focus:ring-[#c7a86b]/10 outline-none transition-all">
              <option>Partido Amistoso</option>
              <option>Entrenamiento</option>
              <option>Campeonato</option>
              <option>Cumpleaños / Evento</option>
            </select>
          </div>
        </div>

        <div>
          <label className="label">Comentarios Adicionales</label>
          <textarea
            className="w-full border border-neutral-200/80 rounded-xl px-3.5 py-2.5 text-sm text-neutral-700 focus:border-[#c7a86b] focus:ring-3 focus:ring-[#c7a86b]/10 outline-none transition-all min-h-[90px] resize-y"
            placeholder="¿Necesitas iluminación especial, petos, balones?"
          />
        </div>

        {/* Price + CTA */}
        <div className="bg-neutral-50/70 border border-neutral-200/60 p-4 rounded-xl flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Total Estimado</div>
            <div className="font-outfit font-black text-xl text-neutral-800">
              $25.000 <span className="text-xs font-normal text-neutral-400">/ hora</span>
            </div>
          </div>
          <Button variant="primary" type="submit">
            Confirmar Solicitud
          </Button>
        </div>
      </form>
    </Card>
  )
}
