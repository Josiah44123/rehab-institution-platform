import {
  LayoutDashboard,
  Server,
  Database,
  Network,
  Settings,
  LogOut,
  HeartHandshake
} from 'lucide-react';
import { ViewState } from '../types';

interface SidebarProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
}

export function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Therapist Dashboard', icon: LayoutDashboard },
    { id: 'architecture', label: 'System Architecture', icon: Server },
    { id: 'database', label: 'Database Schema', icon: Database },
    { id: 'api', label: 'API Blueprint', icon: Network },
  ];

  return (
    <aside className="w-64 bg-white/70 backdrop-blur-xl border-r border-white flex flex-col h-screen shrink-0 shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)] relative z-20">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center text-blue-900 font-bold shadow-sm">
          <HeartHandshake className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-blue-900 tracking-tight">AGAPAY</h1>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">Provider Portal</div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id as ViewState)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-blue-50 text-blue-800 font-bold'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-200 space-y-1 text-sm font-medium">
        <button 
          onClick={() => onViewChange('settings')}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
            currentView === 'settings' ? 'bg-blue-50 text-blue-800 font-bold' : 'text-slate-600 hover:bg-slate-50'
          }`}>
          <Settings className="w-5 h-5" />
          Settings
        </button>
        <button 
          onClick={() => window.location.reload()}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-red-50 hover:text-red-600 transition-all">
          <LogOut className="w-5 h-5 text-red-500" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
