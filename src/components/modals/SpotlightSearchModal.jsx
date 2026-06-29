import { useEffect, useRef, useState } from 'react'
import { Search, X } from 'lucide-react'
import { PlayerCard } from '../players/PlayerCard'

export default function SpotlightSearchModal({ isOpen, onClose, players }) {
  const [searchTerm, setSearchTerm] = useState('')
  const inputRef = useRef(null)
  const modalRef = useRef(null)

  const filteredPlayers = players.filter(player => {
    const matchesSearch = 
      (player.first_name + ' ' + player.last_name).toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.rut.includes(searchTerm)
    return matchesSearch
  })

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
      setSearchTerm('')
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 sm:px-6"
      onClick={handleBackdropClick}
    >
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      {/* Modal container */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-2xl bg-neutral-900/95 border border-[#c7a86b]/30 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up"
        style={{
          background: `
            radial-gradient(100% 100% at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 100%),
            linear-gradient(180deg, rgba(23,23,23,0.98) 0%, rgba(10,10,10,0.98) 100%)
          `,
        }}
      >
        {/* Search header */}
        <div className="p-4 sm:p-6 border-b border-white/8">
          <div className="flex items-center gap-3">
            <div className="shrink-0">
              <Search size={20} className="text-[#c7a86b]" />
            </div>
            <div className="flex-1">
              <input
                ref={inputRef}
                type="text"
                placeholder="Buscar jugador por nombre o RUT..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent text-white text-lg placeholder-neutral-500 focus:outline-none"
                autoFocus
              />
            </div>
            <button
              onClick={onClose}
              className="shrink-0 p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X size={18} className="text-neutral-400" />
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
          {searchTerm === '' ? (
            <div className="text-center py-8">
              <p className="text-neutral-500 text-sm">Escribe para buscar jugadores</p>
            </div>
          ) : filteredPlayers.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-neutral-500 text-sm">No se encontraron jugadores</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredPlayers.map((player, idx) => (
                <div 
                  key={idx}
                  className="animate-in fade-in slide-in-from-left-4 duration-200"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <PlayerCard player={player} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
