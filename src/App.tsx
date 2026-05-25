/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { DashboardView } from './components/views/DashboardView';
import { ArchitectureView } from './components/views/ArchitectureView';
import { DatabaseView } from './components/views/DatabaseView';
import { ApiView } from './components/views/ApiView';
import { CalendarView } from './components/views/CalendarView';
import { SettingsView } from './components/views/SettingsView';
import { SplashScreen } from './components/views/SplashScreen';
import { ViewState } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Show splash screen for 2.5 seconds
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden text-slate-900 border border-slate-200" style={{
      backgroundImage: `radial-gradient(at top left, rgba(239, 246, 255, 1) 0%, transparent 60%), radial-gradient(at bottom right, rgba(254, 243, 199, 0.4) 0%, transparent 50%)`
    }}>
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-1 overflow-y-auto w-full p-8 flex flex-col">
        {currentView === 'dashboard' && <DashboardView onViewChange={setCurrentView} />}
        {currentView === 'architecture' && <ArchitectureView />}
        {currentView === 'database' && <DatabaseView />}
        {currentView === 'api' && <ApiView />}
        {currentView === 'calendar' && <CalendarView />}
        {currentView === 'settings' && <SettingsView />}
      </main>
    </div>
  );
}
