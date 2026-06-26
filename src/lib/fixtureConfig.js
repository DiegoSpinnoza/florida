// ============================================================
// FIXTURE CONFIG — Próxima Fecha del Club
// Usar clases de Tailwind para los colores del split screen
// Persistir en base de datos cuando esté disponible
// ============================================================

export const upcomingFixtureConfig = {
  // ── Club Local ──────────────────────────────────────────
  home_team: 'Club Florida',
  home_initials: 'CF',
  localSplitClass: 'bg-blue-950',   // Mitad izquierda del split
  localLogoFrom: 'from-blue-700',
  localLogoTo: 'to-blue-500',
  localLabelClass: 'text-blue-300',

  // ── Club Rival ──────────────────────────────────────────
  away_team: 'Chile Wanderers',
  away_initials: 'CW',
  visitorSplitClass: 'bg-pink-700',   // Mitad derecha del split
  visitorLogoFrom: 'from-pink-800',
  visitorLogoTo: 'to-pink-500',
  visitorLabelClass: 'text-pink-100',

  // ── Detalles ────────────────────────────────────────────
  competition: 'Campeonato Provincial',
  venue: 'Cancha Principal, Club Florida',

  // ── Programación por División ───────────────────────────
  schedules: [
    { division: 'Seniors', day: 'Sábado 27 Jun', time: '15:30' },
    { division: '3ª Adulta', day: 'Domingo 28 Jun', time: '10:00' },
    { division: '2ª Adulta', day: 'Domingo 28 Jun', time: '12:00' },
    { division: '1ª Adulta', day: 'Domingo 28 Jun', time: '14:30' },
  ],
}

// Para ocultar la pantalla de próximo partido, exportar null:
// export const upcomingFixtureConfig = null
