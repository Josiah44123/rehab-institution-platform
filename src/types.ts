export type ViewState = 'dashboard' | 'architecture' | 'database' | 'api' | 'calendar' | 'settings';

export interface Patient {
  id: string;
  name: string;
  age: number;
  condition: string;
  status: 'Critical' | 'Stable' | 'Improving' | 'Discharged';
  nextAppointment: string;
  progress: number; // 0-100
}

export interface Appointment {
  id: string;
  patientName: string;
  time: string;
  type: string;
  status: 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled';
}
