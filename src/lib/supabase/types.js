export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      divisions: {
        Row: {
          id: string
          name: string
          category: string
          sort_order: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          category: string
          sort_order?: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          category?: string
          sort_order?: number
          created_at?: string
        }
      }
      players: {
        Row: {
          id: string
          division_id: string
          first_name: string
          last_name: string
          position: string | null
          jersey_number: number | null
          photo_url: string | null
          birth_date: string | null
          is_active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          division_id: string
          first_name: string
          last_name: string
          position?: string | null
          jersey_number?: number | null
          photo_url?: string | null
          birth_date?: string | null
          is_active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          division_id?: string
          first_name?: string
          last_name?: string
          position?: string | null
          jersey_number?: number | null
          photo_url?: string | null
          birth_date?: string | null
          is_active?: boolean
          created_at?: string
        }
      }
      matches: {
        Row: {
          id: string
          division_id: string
          home_team: string
          away_team: string
          match_date: string
          venue: string | null
          status: 'scheduled' | 'live' | 'completed' | 'postponed'
          home_score: number | null
          away_score: number | null
          matchday: string | null
          competition: string | null
          created_at: string
        }
        Insert: {
          id?: string
          division_id: string
          home_team: string
          away_team: string
          match_date: string
          venue?: string | null
          status?: 'scheduled' | 'live' | 'completed' | 'postponed'
          home_score?: number | null
          away_score?: number | null
          matchday?: string | null
          competition?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          division_id?: string
          home_team?: string
          away_team?: string
          match_date?: string
          venue?: string | null
          status?: 'scheduled' | 'live' | 'completed' | 'postponed'
          home_score?: number | null
          away_score?: number | null
          matchday?: string | null
          competition?: string | null
          created_at?: string
        }
      }
      standings: {
        Row: {
          id: string
          division_id: string
          team_name: string
          played: number
          won: number
          drawn: number
          lost: number
          goals_for: number
          goals_against: number
          goal_difference: number
          points: number
          position: number
          competition: string | null
          updated_at: string
        }
        Insert: {
          id?: string
          division_id: string
          team_name: string
          played?: number
          won?: number
          drawn?: number
          lost?: number
          goals_for?: number
          goals_against?: number
          goal_difference?: number
          points?: number
          position?: number
          competition?: string | null
          updated_at?: string
        }
        Update: {
          id?: string
          division_id?: string
          team_name?: string
          played?: number
          won?: number
          drawn?: number
          lost?: number
          goals_for?: number
          goals_against?: number
          goal_difference?: number
          points?: number
          position?: number
          competition?: string | null
          updated_at?: string
        }
      }
      callups: {
        Row: {
          id: string
          match_id: string
          title: string
          description: string | null
          deadline: string | null
          created_at: string
        }
        Insert: {
          id?: string
          match_id: string
          title: string
          description?: string | null
          deadline?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          match_id?: string
          title?: string
          description?: string | null
          deadline?: string | null
          created_at?: string
        }
      }
      callup_players: {
        Row: {
          id: string
          callup_id: string
          player_id: string
          status: 'called' | 'confirmed' | 'absent'
        }
        Insert: {
          id?: string
          callup_id: string
          player_id: string
          status?: 'called' | 'confirmed' | 'absent'
        }
        Update: {
          id?: string
          callup_id?: string
          player_id?: string
          status?: 'called' | 'confirmed' | 'absent'
        }
      }
      rentals: {
        Row: {
          id: string
          client_name: string
          client_phone: string
          client_email: string | null
          event_type: string
          event_date: string
          start_time: string
          end_time: string
          total_price: number | null
          status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
          notes: string | null
          whatsapp_confirmation_sent: boolean
          whatsapp_reminder_sent: boolean
          created_at: string
        }
        Insert: {
          id?: string
          client_name: string
          client_phone: string
          client_email?: string | null
          event_type: string
          event_date: string
          start_time: string
          end_time: string
          total_price?: number | null
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled'
          notes?: string | null
          whatsapp_confirmation_sent?: boolean
          whatsapp_reminder_sent?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          client_name?: string
          client_phone?: string
          client_email?: string | null
          event_type?: string
          event_date?: string
          start_time?: string
          end_time?: string
          total_price?: number | null
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled'
          notes?: string | null
          whatsapp_confirmation_sent?: boolean
          whatsapp_reminder_sent?: boolean
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

// Convenience types
export type Division = Database['public']['Tables']['divisions']['Row']
export type Player = Database['public']['Tables']['players']['Row']
export type Match = Database['public']['Tables']['matches']['Row']
export type Standing = Database['public']['Tables']['standings']['Row']
export type Callup = Database['public']['Tables']['callups']['Row']
export type CallupPlayer = Database['public']['Tables']['callup_players']['Row']
export type Rental = Database['public']['Tables']['rentals']['Row']
