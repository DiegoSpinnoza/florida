import PageLayout, { PageHeader } from '../components/layout/PageLayout'
import { CallupList } from '../components/callups/CallupList'

const callupMock = {
  title: 'Citación vs Atlético San Joaquín',
  description: 'Se cita a los siguientes jugadores a presentarse 1 hora antes del partido con indumentaria oficial.',
  deadline: new Date().toISOString(),
  match: {
    home_team: 'Club Florida',
    away_team: 'Atlético San Joaquín',
    match_date: new Date(Date.now() + 86400000 * 3).toISOString()
  }
}

const playersMock = [
  { player: { first_name: 'Claudio', last_name: 'Bravo',    position: 'Arquero',       jersey_number: 1  }, status: 'confirmed' },
  { player: { first_name: 'Gary',    last_name: 'Medel',    position: 'Defensa',       jersey_number: 17 }, status: 'confirmed' },
  { player: { first_name: 'Mauricio',last_name: 'Isla',     position: 'Defensa',       jersey_number: 4  }, status: 'called'    },
  { player: { first_name: 'Arturo',  last_name: 'Vidal',    position: 'Mediocampista', jersey_number: 8  }, status: 'confirmed' },
  { player: { first_name: 'Charles', last_name: 'Aránguiz', position: 'Mediocampista', jersey_number: 20 }, status: 'called'    },
  { player: { first_name: 'Alexis',  last_name: 'Sánchez',  position: 'Delantero',     jersey_number: 7  }, status: 'called'    },
  { player: { first_name: 'Eduardo', last_name: 'Vargas',   position: 'Delantero',     jersey_number: 11 }, status: 'absent'    },
]

export default function Convocatorias() {
  return (
    <PageLayout>
      <PageHeader
        label="Nóminas"
        title=""
        highlight="Convocatorias"
        description="Revisa si estás citado para el próximo partido y confirma tu asistencia."
      />

      <div className="max-w-[860px] mx-auto">
        <CallupList callup={callupMock} players={playersMock} />
      </div>
    </PageLayout>
  )
}
