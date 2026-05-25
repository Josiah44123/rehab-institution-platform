import { Database } from 'lucide-react';

export function DatabaseView() {
  const schemaCode = `-- Core Entity: Users (Handles RBAC)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL, -- Managed by Auth0/Firebase in practice
    role VARCHAR(50) NOT NULL CHECK (role IN ('Admin', 'Therapist', 'Nurse', 'Patient', 'Family')),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Entity: Patients
CREATE TABLE patients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    date_of_birth DATE NOT NULL,
    insurance_provider VARCHAR(100),
    insurance_id VARCHAR(100),
    emergency_contact_name VARCHAR(100),
    emergency_contact_phone VARCHAR(20),
    admission_status VARCHAR(50) CHECK (admission_status IN ('Intake', 'Active', 'Discharged')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_patients_user_id ON patients(user_id);

-- Entity: Treatment Plans
CREATE TABLE treatment_plans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id UUID NOT NULL REFERENCES patients(id) ON DELETE CASCADE,
    therapist_id UUID NOT NULL REFERENCES users(id),
    diagnosis VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    status VARCHAR(50) DEFAULT 'Active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_treatment_plans_patient_id ON treatment_plans(patient_id);

-- Entity: Appointments (Smart Scheduling)
CREATE TABLE appointments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id UUID NOT NULL REFERENCES patients(id) ON DELETE CASCADE,
    therapist_id UUID NOT NULL REFERENCES users(id),
    appointment_time TIMESTAMP WITH TIME ZONE NOT NULL,
    duration_minutes INT NOT NULL DEFAULT 60,
    appointment_type VARCHAR(100) NOT NULL,
    room_id VARCHAR(50), -- Could be a reference to a Rooms table
    status VARCHAR(50) CHECK (status IN ('Scheduled', 'In Progress', 'Completed', 'Cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_appointments_therapist_time ON appointments(therapist_id, appointment_time);
CREATE INDEX idx_appointments_patient_id ON appointments(patient_id);

-- Entity: Progress Notes (SOAP Notes using JSONB for flexibility)
CREATE TABLE progress_notes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    appointment_id UUID REFERENCES appointments(id) ON DELETE SET NULL,
    patient_id UUID NOT NULL REFERENCES patients(id),
    therapist_id UUID NOT NULL REFERENCES users(id),
    note_type VARCHAR(50) DEFAULT 'SOAP',
    content JSONB NOT NULL, -- { subjective: "", objective: "", assessment: "", plan: "" }
    is_signed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_progress_notes_patient_id ON progress_notes(patient_id);
CREATE INDEX idx_progress_notes_content ON progress_notes USING GIN (content);

-- Entity: Audit Logs (Immutable)
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    actor_id UUID REFERENCES users(id),
    action VARCHAR(100) NOT NULL,
    target_resource VARCHAR(100),
    resource_id UUID,
    ip_address VARCHAR(45),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_audit_logs_actor_id ON audit_logs(actor_id);
CREATE INDEX idx_audit_logs_timestamp ON audit_logs(timestamp);`;

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="bg-white/70 backdrop-blur-xl rounded-xl border border-white overflow-hidden flex flex-col shadow-sm">
        <div className="p-8 border-b border-slate-100 bg-white/50 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
               <Database className="w-5 h-5 text-slate-500" />
               Relational Database Schema
            </h2>
            <p className="text-slate-500 mt-2 text-sm leading-relaxed max-w-2xl">
              PostgreSQL schema outlining the core data model. Employs UUIDs for security against enumeration attacks, JSONB for flexible medical notes (SOAP), and necessary indexing constraints for optimal read/write efficiency.
            </p>
          </div>
        </div>
        <div className="p-6">
          <pre className="bg-slate-900 text-slate-300 p-6 rounded-xl overflow-x-auto font-mono text-xs leading-relaxed">
            <code>{schemaCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
