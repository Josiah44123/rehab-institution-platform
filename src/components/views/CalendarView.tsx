import { Calendar as CalendarIcon } from 'lucide-react';

export function CalendarView() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="bg-white/80 backdrop-blur-xl rounded-xl border border-blue-200/50 p-8 shadow-sm">
        <div className="mb-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-100 flex items-center justify-center rounded-lg text-amber-600">
            <CalendarIcon className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 tracking-tight">Full Calendar View</h2>
        </div>
        <div className="h-96 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center flex-col gap-2 text-slate-500">
          <p className="text-sm font-semibold">Calendar Grid Placeholder</p>
          <p className="text-xs">Interactive scheduling goes here.</p>
        </div>
      </div>
    </div>
  );
}
