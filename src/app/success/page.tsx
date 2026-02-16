"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  Home, 
  ExternalLink, 
  Globe, 
  Zap, 
  ChevronRight, 
  ArrowUpRight,
  ShieldCheck,
  RefreshCcw
} from "lucide-react";

export default function SuccessPage() {
  const [bridgeUrl, setBridgeUrl] = useState("");
  const [bridging, setBridging] = useState(false);
  const [step, setStep] = useState(1);

  const handleConnect = async () => {
    setBridging(true);
    // Simulating the bridge to our backend
    setTimeout(() => {
      setBridging(false);
      setStep(3);
    }, 2000);
  };

  const authUrl = "https://accounts.google.com/o/oauth2/v2/auth?client_id=1071006060591-tmhssin2h21lcre235vtolojh4g403ep.apps.googleusercontent.com&response_type=code&redirect_uri=http://localhost:51121/oauth-callback&scope=https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&access_type=offline&prompt=consent";

  return (
    <div className="bg-[#000000] text-white min-h-screen flex flex-col items-center justify-center p-8 font-sans selection:bg-emerald-500/30 overflow-hidden relative">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-3xl w-full bg-[#0a0a0a] border border-zinc-800 rounded-[64px] p-12 md:p-20 text-center shadow-[0_40px_120px_rgba(0,0,0,1)] relative z-10 border-t-zinc-700/50">
        
        {step < 3 ? (
          <>
            <div className="w-24 h-24 bg-emerald-500/10 border border-emerald-500/20 rounded-[32px] flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
               <CheckCircle2 className="w-12 h-12 text-emerald-500" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase text-white">¡Gracias por tu Pago!</h1>
            <p className="text-zinc-400 text-lg mb-16 font-medium leading-relaxed max-w-lg mx-auto text-balance">
              Has activado el plan profesional. Ahora solo falta un paso para poner a tu bot a trabajar.
            </p>

            {/* Client Onboarding Steps */}
            <div className="space-y-6 text-left max-w-md mx-auto">
               <div className={`p-8 rounded-[40px] border-2 transition-all duration-500 ${step === 1 ? 'bg-zinc-900 border-white' : 'bg-zinc-950/50 border-zinc-800 opacity-40'}`}>
                  <div className="flex items-center gap-4 mb-4">
                     <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm ${step === 1 ? 'bg-white text-black' : 'bg-zinc-800 text-zinc-500'}`}>1</div>
                     <h3 className="font-bold text-white uppercase text-xs tracking-widest">Autorizar Google Maps</h3>
                  </div>
                  {step === 1 && (
                    <div className="space-y-6">
                       <p className="text-zinc-400 text-xs font-medium leading-relaxed uppercase tracking-tight">Debes dar permiso al bot para leer y contestar tus reseñas.</p>
                       <a 
                         href={authUrl}
                         target="_blank"
                         rel="noreferrer"
                         onClick={() => setStep(2)}
                         className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-2xl uppercase text-[11px] tracking-widest shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-all"
                       >
                          Vincular Mi Negocio <ExternalLink className="w-4 h-4" />
                       </a>
                    </div>
                  )}
               </div>

               <div className={`p-8 rounded-[40px] border-2 transition-all duration-500 ${step === 2 ? 'bg-zinc-900 border-white' : 'bg-zinc-950/50 border-zinc-800 opacity-40'}`}>
                  <div className="flex items-center gap-4 mb-4">
                     <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm ${step === 2 ? 'bg-white text-black' : 'bg-zinc-800 text-zinc-500'}`}>2</div>
                     <h3 className="font-bold text-white uppercase text-xs tracking-widest">Cerrar el Vínculo</h3>
                  </div>
                  {step === 2 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                       <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Pega aquí el enlace de la página final:</label>
                       <textarea 
                         rows={3}
                         className="w-full bg-black border border-zinc-800 rounded-2xl px-6 py-4 text-white font-mono text-[10px] outline-none focus:border-blue-500 transition-all resize-none shadow-inner"
                         placeholder="http://localhost:51121/..."
                         value={bridgeUrl}
                         onChange={(e) => setBridgeUrl(e.target.value)}
                       />
                       <button 
                         disabled={!bridgeUrl || bridging}
                         onClick={handleConnect}
                         className={`w-full py-4 rounded-2xl font-black uppercase text-[11px] tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 ${bridgeUrl && !bridging ? 'bg-emerald-500 text-black hover:bg-emerald-400' : 'bg-zinc-800 text-zinc-700'}`}
                       >
                          {bridging ? <RefreshCcw className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
                          {bridging ? "Conectando..." : "Activar Mi Bot"}
                       </button>
                    </div>
                  )}
               </div>
            </div>
          </>
        ) : (
          <div className="animate-in zoom-in duration-1000">
            <div className="w-32 h-32 bg-emerald-500/10 border border-emerald-500/20 rounded-[48px] flex items-center justify-center mx-auto mb-12 shadow-[0_0_100px_rgba(16,185,129,0.3)]">
               <ShieldCheck className="w-16 h-16 text-emerald-400" />
            </div>
            <h1 className="text-5xl font-black mb-8 tracking-tighter uppercase text-white">¡SISTEMA ACTIVO!</h1>
            <p className="text-zinc-400 text-xl mb-16 font-medium leading-relaxed max-w-lg mx-auto">
               Tu bot de IA ya está patrullando tu ficha de Google Maps. No tienes que hacer nada más.
            </p>
            <Link href="/" className="inline-flex bg-white text-black font-black px-12 py-5 rounded-[28px] uppercase text-sm tracking-widest shadow-2xl active:scale-95 transition-all items-center gap-4">
               <Home className="w-5 h-5" /> Volver al Inicio
            </Link>
          </div>
        )}
      </div>

      <div className="mt-12 text-[11px] font-black uppercase tracking-[0.5em] text-zinc-800 animate-pulse">
         Neural Onboarding Layer // Secure Channel
      </div>
    </div>
  );
}
