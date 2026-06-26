import PageLayout, { PageHeader } from '../components/layout/PageLayout'
import { ScoreCard } from '../components/matches/ScoreCard'
import { Button } from '../components/ui/Button'

const recentResultsMock = [
  {
    home_team: 'Deportes Macul',
    away_team: 'Club Florida',
    match_date: new Date(Date.now() - 86400000 * 4).toISOString(),
    home_score: 1,
    away_score: 3,
    competition: 'Liga Regional',
    division: { name: 'Primera División' },
    status: 'completed'
  },
  {
    home_team: 'Club Florida',
    away_team: 'Juventud Providencia',
    match_date: new Date(Date.now() - 86400000 * 11).toISOString(),
    home_score: 2,
    away_score: 2,
    competition: 'Liga Regional',
    division: { name: 'Primera División' },
    status: 'completed'
  },
  {
    home_team: 'Estrella de Chile',
    away_team: 'Club Florida',
    match_date: new Date(Date.now() - 86400000 * 18).toISOString(),
    home_score: 0,
    away_score: 4,
    competition: 'Liga Regional',
    division: { name: 'Primera División' },
    status: 'completed'
  },
  {
    home_team: 'Club Florida',
    away_team: 'Unión San Miguel',
    match_date: new Date(Date.now() - 86400000 * 25).toISOString(),
    home_score: 1,
    away_score: 0,
    competition: 'Liga Regional',
    division: { name: 'Primera División' },
    status: 'completed'
  }
]

export default function Resultados() {
  return (
    <PageLayout>
      <PageHeader
        label="Historial"
        title="Últimos"
        highlight="Resultados"
        description="Revisa el marcador y los detalles de nuestros encuentros pasados."
      />

      <div className="flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory mb-4 sm:mb-6 pb-1">
        <Button variant="primary" className="shrink-0 snap-start bg-[#c7a86b]/20 text-white border-[#c7a86b] shadow-[0_0_10px_rgba(199,168,107,0.3)]">Todos</Button>
        <Button variant="ghost" className="shrink-0 snap-start text-[#c7a86b] border-[#c7a86b]/30 hover:bg-[#c7a86b]/10 hover:border-[#c7a86b]/50">Primera División</Button>
        <Button variant="ghost" className="shrink-0 snap-start text-[#c7a86b] border-[#c7a86b]/30 hover:bg-[#c7a86b]/10 hover:border-[#c7a86b]/50">Juveniles</Button>
        <Button variant="ghost" className="shrink-0 snap-start text-[#c7a86b] border-[#c7a86b]/30 hover:bg-[#c7a86b]/10 hover:border-[#c7a86b]/50">Infantiles</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {recentResultsMock.map((match, idx) => (
          <div key={idx}>
            <ScoreCard match={match} />
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
