import { Settings } from 'lucide-react';

export function SettingsView() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="bg-white/80 backdrop-blur-xl rounded-xl border border-blue-200/50 p-8 shadow-sm">
        <div className="mb-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-100 flex items-center justify-center rounded-lg text-slate-600">
            <Settings className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 tracking-tight">System Settings</h2>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg">
            <h3 className="text-sm font-bold text-slate-800">Profile Settings</h3>
            <p className="text-xs text-slate-500">Manage your account details and preferences.</p>
          </div>
          <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg">
            <h3 className="text-sm font-bold text-slate-800">Notifications</h3>
            <p className="text-xs text-slate-500">Configure SMS and email alerts.</p>
          </div>
          <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg">
            <h3 className="text-sm font-bold text-slate-800">Security</h3>
            <p className="text-xs text-slate-500">Update password and 2FA settings.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
