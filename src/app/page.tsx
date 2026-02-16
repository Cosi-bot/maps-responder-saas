"use client";

import { useState } from "react";
import { Sparkles, CheckCircle2, Rocket, ExternalLink, Zap, MousePointer2, ShieldCheck, TrendingUp, RefreshCcw } from "lucide-react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', { method: 'POST' });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Error: No se pudo generar la sesión de pago.");
      }
    } catch (e) {
      console.error(e);
      alert("Error al iniciar el pago.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between border-b border-zinc-900/50 backdrop-blur-md sticky top-0 z-50">
         <div className="text-2xl font-black tracking-tighter group cursor-pointer">
            MAPS<span className="text-emerald-500 group-hover:animate-pulse">_RESPONDER</span>.AI
         </div>
         <div className="flex gap-8 items-center text-sm font-bold uppercase tracking-widest">
            <button className="text-zinc-400 hover:text-white transition-colors">Cómo Funciona</button>
            <button className="text-zinc-400 hover:text-white transition-colors">Precios</button>
            <button 
               onClick={handleSubscribe}
               className="bg-white text-black px-6 py-2.5 rounded-xl font-black text-xs hover:bg-emerald-400 transition-all active:scale-95 shadow-lg shadow-white/5"
            >
               {loading ? "Cargando..." : "Acceso Cliente"}
            </button>
         </div>
      </nav>

      <main className="max-w-6xl mx-auto pt-24 pb-32 px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-500/10 text-emerald-400 text-[11px] font-black uppercase tracking-[0.3em] rounded-full mb-12 border border-emerald-500/20 shadow-inner">
             <Zap className="w-3.5 h-3.5 fill-current" /> Tecnología Autónoma v8.7
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-12 leading-[0.8] text-balance text-white">
             Tus reseñas, <br/> 
             <span className="text-zinc-700">respondidas por</span> <br/>
             <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent italic">el cerebro de oro.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-20 max-w-3xl mx-auto leading-relaxed font-medium">
             No permitas que una opinión sin respuesta dañe tu reputación. Nuestra IA profesional gestiona tu ficha de Google Maps con un tono 100% humano y profesional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
             <button 
                disabled={loading}
                onClick={handleSubscribe}
                className="group bg-white text-black px-14 py-7 rounded-[32px] font-black uppercase text-base tracking-widest shadow-[0_20px_60px_rgba(255,255,255,0.15)] hover:bg-emerald-400 hover:scale-105 transition-all active:scale-95 flex items-center gap-4"
             >
                {loading ? <RefreshCcw className="w-6 h-6 animate-spin text-black" /> : <Rocket className="w-6 h-6" />}
                Empezar Ahora — $20/mes
             </button>
             <button className="text-zinc-600 hover:text-white font-black uppercase text-[11px] tracking-[0.2em] flex items-center gap-3 transition-all">
                Ver Demo Interactiva <ExternalLink className="w-5 h-5" />
             </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-32">
           <div className="bg-[#080808] border border-zinc-900 p-12 rounded-[56px] hover:border-zinc-500 transition-all duration-500 group shadow-2xl relative overflow-hidden">
              <div className="w-14 h-14 rounded-[22px] bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-10 group-hover:scale-110 transition-transform">
                 <MousePointer2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-5 text-white">Piloto Automático</h3>
              <p className="text-zinc-500 text-base leading-relaxed font-medium">Detectamos nuevas reseñas al instante y respondemos en minutos. Eficacia total sin esfuerzo.</p>
           </div>
           <div className="bg-[#080808] border border-zinc-900 p-12 rounded-[56px] hover:border-zinc-500 transition-all duration-500 group shadow-2xl relative overflow-hidden">
              <div className="w-14 h-14 rounded-[22px] bg-blue-500/10 flex items-center justify-center text-blue-500 mb-10 group-hover:scale-110 transition-transform">
                 <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-5 text-white">ADN Humano</h3>
              <p className="text-zinc-500 text-base leading-relaxed font-medium">Nada de bots genéricos. Cada respuesta es empática, personalizada y fiel a la voz de tu marca.</p>
           </div>
           <div className="bg-[#080808] border border-zinc-900 p-12 rounded-[56px] hover:border-zinc-500 transition-all duration-500 group shadow-2xl relative overflow-hidden">
              <div className="w-14 h-14 rounded-[22px] bg-purple-500/10 flex items-center justify-center text-purple-500 mb-10 group-hover:scale-110 transition-transform">
                 <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-5 text-white">SEO de Mapas</h3>
              <p className="text-zinc-500 text-base leading-relaxed font-medium">Al responder siempre, Google te posiciona mejor. Domina las búsquedas locales en tu ciudad.</p>
           </div>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-8 py-20 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
         <div className="text-[11px] font-black uppercase tracking-[0.5em] text-zinc-800">© 2026 MAPS_RESPONDER.AI // OPENCLAW OS</div>
         <div className="flex gap-10">
            <div className="flex items-center gap-3 text-zinc-700">
               <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981] animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-[0.2em]">Cerebro de Oro Online</span>
            </div>
         </div>
      </footer>
    </div>
  );
}
