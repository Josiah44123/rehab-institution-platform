import { useState } from 'react';
import { Calendar, Clock, FileText, CheckCircle2, AlertCircle, Plus, X } from 'lucide-react';
import { Patient, Appointment, ViewState } from '../../types';

const MOCK_PATIENTS: Patient[] = [
  { id: '1', name: 'Carmela Reyes', age: 42, condition: 'Post-op Knee Arthroplasty', status: 'Improving', nextAppointment: 'Today, 2:00 PM', progress: 65 },
  { id: '2', name: 'Mateo Santos', age: 28, condition: 'Cervical Radiculopathy', status: 'Stable', nextAppointment: 'Tomorrow, 9:00 AM', progress: 40 },
  { id: '3', name: 'Emilio Bautista', age: 55, condition: 'Stroke Rehabilitation', status: 'Critical', nextAppointment: 'Today, 4:30 PM', progress: 15 },
];

const MOCK_APPOINTMENTS: Appointment[] = [
  { id: '1', patientName: 'Carmela Reyes', time: '14:00 - 15:00', type: 'Physical Therapy (PT)', status: 'Scheduled' },
  { id: '2', patientName: 'Analyn Dalisay', time: '15:30 - 16:30', type: 'Occupational Therapy', status: 'Scheduled' },
  { id: '3', patientName: 'Emilio Bautista', time: '16:30 - 17:30', type: 'Neurological Eval', status: 'In Progress' },
];

export function DashboardView({ onViewChange }: { onViewChange: (view: ViewState) => void }) {
  const [showIntakeForm, setShowIntakeForm] = useState(false);

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-500 relative">
      {/* Intake Form Modal */}
      {showIntakeForm && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-800">New Patient Intake</h3>
              <button onClick={() => setShowIntakeForm(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Full Name</label>
                <input type="text" placeholder="Juan dela Cruz" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Age</label>
                  <input type="number" placeholder="45" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Gender</label>
                  <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Primary Condition / Diagnosis</label>
                <input type="text" placeholder="e.g., Post-op recovery" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="p-6 border-t border-slate-100 flex justify-end gap-3 bg-slate-50">
              <button onClick={() => setShowIntakeForm(false)} className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-slate-800 transition-colors">Cancel</button>
              <button onClick={() => setShowIntakeForm(false)} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold shadow-sm transition-colors">Save & Schedule Session</button>
            </div>
          </div>
        </div>
      )}

      <header className="flex justify-between items-center bg-white/70 backdrop-blur-xl p-6 rounded-xl border border-white max-sm:flex-col shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Welcome back, Dr. Alcantara</h2>
          <p className="text-slate-500 mt-1 text-sm font-medium">You have 5 appointments and 2 pending SOAP notes today.</p>
        </div>
        <button onClick={() => setShowIntakeForm(true)} className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded text-xs font-bold transition-colors flex items-center gap-2 shadow-md">
          <Plus className="w-4 h-4" />
          New Patient Intake
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Active Caseload */}
          <section className="bg-white/70 backdrop-blur-xl rounded-xl border border-white flex flex-col shadow-sm">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-500" />
                Active Caseload (Priority)
              </h3>
              <button onClick={() => alert('Loading full caseload...')} className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase hover:bg-blue-100 transition-colors">View All</button>
            </div>
            <div className="divide-y divide-slate-100">
              {MOCK_PATIENTS.map(patient => (
                <div key={patient.id} className="p-5 hover:bg-slate-50 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-slate-800 group-hover:text-blue-600 text-sm transition-colors">{patient.name}</h4>
                      <p className="text-[10px] text-slate-500 uppercase font-semibold mt-0.5">{patient.condition} • {patient.age} yrs</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      patient.status === 'Improving' ? 'bg-green-50 text-green-700 border border-green-200' :
                      patient.status === 'Critical' ? 'bg-red-50 text-red-700 border border-red-200' :
                      'bg-slate-50 text-slate-700 border border-slate-200'
                    }`}>
                      {patient.status}
                    </span>
                  </div>
                  
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px] font-bold lowercase">
                      <span className="text-slate-400">Treatment Plan Progress</span>
                      <span className="text-slate-600">{patient.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${patient.status === 'Critical' ? 'bg-red-400' : 'bg-blue-500'}`}
                        style={{ width: `${patient.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Actions / Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/70 backdrop-blur-xl border border-white rounded-xl p-5 flex flex-col justify-between shadow-sm">
              <span className="text-xs font-semibold text-slate-500">Completed Sessions</span>
              <div className="flex items-end justify-between mt-4">
                <span className="text-3xl font-bold text-slate-900">24</span>
                <span className="text-xs text-green-600 font-medium">+3 this week</span>
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-xl border border-white rounded-xl p-5 flex flex-col justify-between shadow-sm">
              <span className="text-xs font-semibold text-slate-500">Pending Assessments</span>
              <div className="flex items-end justify-between mt-4">
                <span className="text-3xl font-bold text-slate-900">4</span>
                <span className="text-xs text-orange-600 font-medium">Requires attention</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Today's Schedule */}
          <section className="bg-white/70 backdrop-blur-xl rounded-xl border border-white overflow-hidden h-full flex flex-col shadow-sm">
            <div className="p-6 border-b border-slate-100 flex gap-2 items-center">
              <Calendar className="w-5 h-5 text-slate-500" />
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">Today's Schedule</h3>
            </div>
            <div className="p-6 space-y-4 flex-1">
              {MOCK_APPOINTMENTS.map(apt => (
                <div key={apt.id} className={`flex items-center gap-3 p-3 rounded-lg border-l-4 ${apt.status === 'In Progress' ? 'border-l-blue-500 bg-blue-50' : 'border-l-slate-200 bg-white border border-slate-100'}`}>
                  <div className={`w-10 h-10 rounded flex flex-col items-center justify-center leading-tight ${apt.status === 'In Progress' ? 'bg-blue-200 text-blue-700' : 'bg-slate-100 text-slate-500'}`}>
                    <span className="text-[10px] font-bold uppercase">{apt.time.split(' - ')[0]}</span>
                    <Clock className="w-3 h-3 mt-0.5 opacity-50" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-slate-800 truncate">{apt.patientName}</p>
                    <p className="text-[10px] text-slate-500">{apt.type}</p>
                  </div>
                </div>
              ))}
              <button onClick={() => onViewChange('calendar')} className="mt-4 w-full py-2 border-2 border-slate-100 rounded-lg text-xs font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors">Full Calendar View</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
