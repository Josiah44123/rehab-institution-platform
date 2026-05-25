import { Network } from 'lucide-react';

export function ApiView() {
  const endpoints = [
    {
      group: 'Patients Module',
      routes: [
        { method: 'GET', path: '/api/v1/patients', description: 'Retrieve a paginated list of patients. Therapists see only their assigned patients; Admins see all.' },
        { method: 'POST', path: '/api/v1/patients', description: 'Create a new patient record (Intake). Requires Admin or Therapist role.' },
        { method: 'GET', path: '/api/v1/patients/:id', description: 'Retrieve detailed patient information including active treatment plan.' },
        { method: 'PUT', path: '/api/v1/patients/:id', description: 'Update patient demographics or insurance data.' },
        { method: 'GET', path: '/api/v1/patients/:id/notes', description: 'Retrieve all SOAP/Progress notes for a patient. (JSONB payload)' }
      ]
    },
    {
      group: 'Scheduling Module',
      routes: [
        { method: 'GET', path: '/api/v1/appointments', description: 'List appointments. Supports query params: ?date=YYYY-MM-DD&therapistId=xyz' },
        { method: 'POST', path: '/api/v1/appointments', description: 'Schedule a new appointment. Triggers background SMS/Email reminder job.' },
        { method: 'PUT', path: '/api/v1/appointments/:id', description: 'Reschedule or update appointment status (e.g., Scheduled -> In Progress).' }
      ]
    },
    {
      group: 'Clinical Module (Notes & Plans)',
      routes: [
        { method: 'POST', path: '/api/v1/notes', description: 'Submit a new SOAP note. Validates JSON schema before Postgres insertion.' },
        { method: 'POST', path: '/api/v1/treatment-plans', description: 'Create a new milestone-based treatment plan.' },
        { method: 'PATCH', path: '/api/v1/treatment-plans/:id/progress', description: 'Update the overall progress metric (0-100) of a plan.' }
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="bg-white/70 backdrop-blur-xl rounded-xl border border-white overflow-hidden shadow-sm">
        <div className="p-8 border-b border-slate-100 bg-white/50">
           <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
             <Network className="w-5 h-5 text-slate-500" />
             API Endpoint Blueprint
           </h2>
           <p className="text-slate-500 mt-2 text-sm max-w-2xl">
             RESTful API design following versioning standards (v1). All endpoints require an Authorization bearer token (JWT) validated by the API Gateway middleware before reaching the Node.js/Express service.
           </p>
        </div>
        
        <div className="p-8 space-y-8">
          {endpoints.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-4 border-b border-slate-100 pb-2">{group.group}</h3>
              <div className="space-y-3">
                {group.routes.map((route, rIdx) => (
                  <div key={rIdx} className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50 transition-colors">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase min-w-[50px] text-center border ${
                      route.method === 'GET' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                      route.method === 'POST' ? 'bg-green-50 text-green-700 border-green-200' :
                      route.method === 'PUT' || route.method === 'PATCH' ? 'bg-orange-50 text-orange-700 border-orange-200' :
                      'bg-slate-100 text-slate-700 border-slate-200'
                    }`}>
                      {route.method}
                    </span>
                    <div className="flex-1">
                      <code className="text-[11px] font-mono font-bold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">{route.path}</code>
                      <p className="text-xs text-slate-600 mt-2">{route.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
