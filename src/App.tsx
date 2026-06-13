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
    <div className="flex h-screen bg-clinical-50 overflow-hidden text-clinical-950 border border-clinical-100">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-1 overflow-y-auto w-full p-8 flex flex-col space-y-8">
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
