import { HeartHandshake } from 'lucide-react';

export function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900 text-white overflow-hidden relative">
      {/* Sun glow effect inspired by the Philippine flag's sun */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 flex flex-col items-center z-10">
        <div className="w-24 h-24 bg-amber-400 rounded-3xl flex items-center justify-center shadow-2xl shadow-amber-500/20 mb-8 border-4 border-white/10 relative overflow-hidden">
          {/* Subtle sun ray representation */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.1)_100%)]"></div>
          <HeartHandshake className="w-12 h-12 text-blue-950 relative z-10" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 text-center text-white">
          Agapay
        </h1>
        <p className="text-amber-200/90 text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-center max-w-sm relative pb-4">
          Treatment &amp; Rehabilitation
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-amber-400 rounded-full"></span>
        </p>
        
        <div className="mt-16 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-amber-400 w-full animate-[loadingProgress_2s_ease-in-out_forwards] origin-left"></div>
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes loadingProgress {
            0% { transform: scaleX(0); }
            40% { transform: scaleX(0.4); }
            60% { transform: scaleX(0.6); }
            100% { transform: scaleX(1); }
          }
        `}} />
      </div>
    </div>
  );
}
