import { Database, LayoutTemplate, Smartphone, Server, Lock, Activity } from 'lucide-react';

export function ArchitectureView() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="bg-white/70 backdrop-blur-xl rounded-xl border border-white p-8 shadow-sm">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-slate-800">System Architecture Overview</h2>
          <p className="text-slate-500 mt-2 text-sm leading-relaxed">
            A high-level view of the full-stack architecture designed for HIPAA/GDPR compliance, utilizing a modern, decoupled service-oriented approach. 
          </p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:left-1/2 before:-ml-px before:w-px before:bg-slate-200 before:z-0">
          
          {/* Presentation Layer */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide mb-4">Presentation Layer</span>
            <div className="grid grid-cols-2 gap-6 w-full">
              <div className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col items-center gap-3">
                <div className="w-10 h-10 bg-slate-50 text-slate-600 rounded flex items-center justify-center">
                  <LayoutTemplate className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Web Portal</h4>
                  <p className="text-[10px] text-slate-500 uppercase font-semibold mt-1">React, Tailwind CSS, Vite</p>
                  <p className="text-[10px] text-slate-400 mt-2">Therapist & Admin Access</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col items-center gap-3">
                <div className="w-10 h-10 bg-slate-50 text-slate-600 rounded flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Mobile App</h4>
                  <p className="text-[10px] text-slate-500 uppercase font-semibold mt-1">React Native</p>
                  <p className="text-[10px] text-slate-400 mt-2">Patient Home Exercises</p>
                </div>
              </div>
            </div>
          </div>

          {/* Security & API Layer */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="bg-slate-50 text-slate-700 border border-slate-200 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide mb-4">Security & Gateway</span>
            <div className="bg-white p-5 rounded-xl border border-slate-200 w-3/4 flex flex-col items-center gap-3">
              <div className="w-10 h-10 bg-slate-50 text-slate-600 rounded flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Auth0 / Firebase Auth + API Gateway</h4>
                <p className="text-[10px] text-slate-500 font-semibold uppercase mt-1">Role-Based Access Control (RBAC), JWT, Rate Limiting</p>
              </div>
            </div>
          </div>

          {/* Application Layer */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide mb-4">Application Layer</span>
            <div className="bg-white p-5 rounded-xl border border-slate-200 w-full flex flex-col items-center gap-3">
              <div className="w-10 h-10 bg-slate-50 text-slate-600 rounded flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Node.js / Express Core Service</h4>
                <p className="text-[10px] text-slate-500 font-semibold uppercase mt-1">Async Event Loop, RESTful Endpoints</p>
              </div>
              <div className="flex gap-2 mt-3 flex-wrap justify-center">
                <span className="text-[10px] bg-slate-50 text-slate-600 border border-slate-100 px-2 py-0.5 rounded font-bold uppercase">Intake Module</span>
                <span className="text-[10px] bg-slate-50 text-slate-600 border border-slate-100 px-2 py-0.5 rounded font-bold uppercase">Treatment Planner</span>
                <span className="text-[10px] bg-slate-50 text-slate-600 border border-slate-100 px-2 py-0.5 rounded font-bold uppercase">Smart Scheduler</span>
                <span className="text-[10px] bg-slate-50 text-slate-600 border border-slate-100 px-2 py-0.5 rounded font-bold uppercase">Audit Logging</span>
              </div>
            </div>
          </div>

          {/* Data Layer */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="bg-slate-50 text-slate-700 border border-slate-200 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide mb-4">Data Layer</span>
            <div className="grid grid-cols-2 gap-6 w-full">
              <div className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col items-center gap-3">
                <div className="w-10 h-10 bg-slate-50 text-slate-600 rounded flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">PostgreSQL</h4>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase mt-1">Structured Relational Data</p>
                  <p className="text-[10px] text-slate-400 mt-1">Users, Schedules, Inventory</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col items-center gap-3">
                <div className="w-10 h-10 bg-slate-50 text-slate-600 rounded flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">MongoDB / JSONB</h4>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase mt-1">Unstructured Document Data</p>
                  <p className="text-[10px] text-slate-400 mt-1">SOAP Notes, Medical History</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 p-5 bg-slate-50 rounded-lg border border-slate-100 text-sm">
          <h4 className="font-bold text-slate-800 mb-2 uppercase text-[10px] tracking-wide">Compliance Notes</h4>
          <ul className="list-disc pl-5 text-slate-600 space-y-1 text-xs leading-relaxed">
            <li>All data is encrypted at rest using AES-256 (Cloud Provider Managed Keys).</li>
            <li>In-transit data flows over TLS 1.3 only, enforcing HSTS.</li>
            <li>Application layer pushes immutability logs to an internal Audit DB to satisfy HIPAA monitoring requirements.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
