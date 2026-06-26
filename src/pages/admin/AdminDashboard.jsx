import { Card } from '../../components/ui/Card'
import { Calendar, Users, Trophy, DollarSign } from 'lucide-react'

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-outfit font-bold text-3xl text-white">Dashboard</h1>
        <p className="text-neutral-400">Resumen general del Club Florida.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card className="p-6 border-l-4 border-l-blue-500">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
              <Users size={24} />
            </div>
            <div>
              <div className="text-neutral-400 text-sm font-medium">Jugadores Activos</div>
              <div className="text-2xl font-bold text-white">156</div>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 border-l-4 border-l-green-500">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
              <Calendar size={24} />
            </div>
            <div>
              <div className="text-neutral-400 text-sm font-medium">Próximos Partidos</div>
              <div className="text-2xl font-bold text-white">8</div>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 border-l-4 border-l-yellow-500">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-yellow-500/10 rounded-lg text-yellow-400">
              <Trophy size={24} />
            </div>
            <div>
              <div className="text-neutral-400 text-sm font-medium">Divisiones</div>
              <div className="text-2xl font-bold text-white">8</div>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 border-l-4 border-l-purple-500">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
              <DollarSign size={24} />
            </div>
            <div>
              <div className="text-neutral-400 text-sm font-medium">Arriendos Mensuales</div>
              <div className="text-2xl font-bold text-white">42</div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="font-outfit font-bold text-xl text-white mb-6">Últimos Arriendos</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex justify-between items-center p-3 hover:bg-neutral-800/50 rounded-lg transition-colors border border-white/5">
                <div>
                  <div className="font-medium text-white">Juan Pérez</div>
                  <div className="text-sm text-neutral-400">Partido Amistoso • Hoy, 20:00</div>
                </div>
                <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                  Confirmado
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        <Card className="p-6">
          <h2 className="font-outfit font-bold text-xl text-white mb-6">Próximos Partidos Oficiales</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex justify-between items-center p-3 hover:bg-neutral-800/50 rounded-lg transition-colors border border-white/5">
                <div>
                  <div className="font-medium text-white text-sm">
                    <span className="text-green-400">Florida</span> vs Atlético
                  </div>
                  <div className="text-xs text-neutral-400 mt-1">Primera División • Mañana, 16:00</div>
                </div>
                <div className="text-neutral-300 text-sm">
                  Cancha Principal
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
