export interface Event {
  id: string;
  title: string;
  startTime: Date;
  endTime: Date;
  color?: string;
}

export interface TimetableProps {
  events: Event[];
  mode?: 'day' | 'week' | 'month';  // Assure-toi que 'mode' est bien défini ici
  startHour?: number; // Heure de début de journée
  endHour?: number; // Heure de fin de journée
  primaryColor?: string;
  onEventPress?: (event: Event) => void;
}
