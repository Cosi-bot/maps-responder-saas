"use client";

import { useState } from "react";
import { 
  Sparkles, 
  CheckCircle2, 
  Rocket, 
  ExternalLink, 
  Zap, 
  MousePointer2, 
  ShieldCheck, 
  TrendingUp, 
  RefreshCcw,
  Star,
  ShieldAlert,
  Bot
} from "lucide-react";

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
    <div className="bg-[#000000] text-white min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* Glow Effect Background */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/5 blur-[120px] pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between border-b border-white/5 backdrop-blur-xl sticky top-0 z-50">
         <div className="text-2xl font-black tracking-tighter group cursor-pointer flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-black">
               <Bot className="w-5 h-5" />
            </div>
            <span>MAPS<span className="text-emerald-500">_RESPONDER</span></span>
         </div>
         <div className="hidden md:flex gap-10 items-center text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">
            <button className="hover:text-white transition-colors">Tecnología</button>
            <button className="hover:text-white transition-colors">Seguridad</button>
            <button className="hover:text-white transition-colors">Precios</button>
            <button 
               onClick={handleSubscribe}
               className="bg-white text-black px-8 py-3 rounded-2xl font-black hover:bg-emerald-400 transition-all active:scale-95 shadow-xl shadow-white/5"
            >
               {loading ? "Iniciando..." : "Acceso Beta"}
            </button>
         </div>
      </nav>

      <main className="max-w-6xl mx-auto pt-32 pb-40 px-8 relative z-10">
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-14 border border-emerald-500/20 shadow-inner shadow-emerald-500/10">
             <Star className="w-3.5 h-3.5 fill-current animate-pulse" /> Inteligencia Autónoma v8.7
          </div>
          
          <h1 className="text-7xl md:text-[120px] font-black tracking-tighter mb-12 leading-[0.75] text-balance">
             Responde a <br/> 
             <span className="text-zinc-800">tus clientes</span> <br/>
             <span className="bg-gradient-to-r from-emerald-300 via-emerald-500 to-emerald-200 bg-clip-text text-transparent">en automático.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 mb-20 max-w-3xl mx-auto leading-relaxed font-medium">
             Deja que nuestra IA oficial de OpenClaw gestione tus reseñas de Google Maps con empatía humana. Mejora tu SEO y ahorra horas de trabajo hoy mismo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
             <button 
                disabled={loading}
                onClick={handleSubscribe}
                className="group bg-white text-black px-16 py-8 rounded-[36px] font-black uppercase text-base tracking-[0.15em] shadow-[0_20px_80px_rgba(255,255,255,0.1)] hover:bg-emerald-400 hover:scale-105 transition-all active:scale-95 flex items-center gap-4"
             >
                {loading ? <RefreshCcw className="w-6 h-6 animate-spin" /> : <Rocket className="w-6 h-6" />}
                Activar Plan — $20/mes
             </button>
             <button className="text-zinc-600 hover:text-white font-black uppercase text-[12px] tracking-[0.3em] flex items-center gap-3 transition-all border-b border-transparent hover:border-zinc-800 pb-2">
                Ver Demo Real <ExternalLink className="w-4 h-4" />
             </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
           <div className="bg-[#050505] border border-white/5 p-12 rounded-[64px] shadow-2xl relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-700">
              <div className="w-16 h-16 rounded-[24px] bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-10 group-hover:scale-110 transition-transform border border-emerald-500/10">
                 <Zap className="w-8 h-8 fill-current" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">Cero Esfuerzo</h3>
              <p className="text-zinc-500 text-base leading-relaxed font-medium">Instala el bot una vez y olvídate. Él se encarga de vigilar y contestar cada nueva opinión por ti.</p>
           </div>
           
           <div className="bg-[#050505] border border-white/5 p-12 rounded-[64px] shadow-2xl relative overflow-hidden group hover:border-blue-500/20 transition-all duration-700">
              <div className="w-16 h-16 rounded-[24px] bg-blue-500/10 flex items-center justify-center text-blue-400 mb-10 group-hover:scale-110 transition-transform border border-blue-500/10">
                 <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">Seguridad Total</h3>
              <p className="text-zinc-500 text-base leading-relaxed font-medium">Conexión oficial cifrada con Google Business. Tus datos y los de tus clientes están a salvo.</p>
           </div>

           <div className="bg-[#050505] border border-white/5 p-12 rounded-[64px] shadow-2xl relative overflow-hidden group hover:border-purple-500/20 transition-all duration-700">
              <div className="w-16 h-16 rounded-[24px] bg-purple-500/10 flex items-center justify-center text-purple-400 mb-10 group-hover:scale-110 transition-transform border border-purple-500/10">
                 <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">Más Visibilidad</h3>
              <p className="text-zinc-500 text-base leading-relaxed font-medium">Google premia a los negocios que responden. Sube puestos en el mapa y atrae más gente.</p>
           </div>
        </div>

        {/* Security / Trust Section */}
        <div className="bg-[#050505] border border-zinc-900 rounded-[56px] p-16 flex flex-col md:flex-row items-center gap-12 shadow-inner">
           <div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 shrink-0">
              <ShieldAlert className="w-10 h-10" />
           </div>
           <div>
              <h4 className="text-white font-black uppercase tracking-[0.3em] text-sm mb-4">Protocolo de Confianza v8</h4>
              <p className="text-zinc-500 text-lg leading-relaxed font-medium max-w-2xl">
                 Nunca te pediremos tus contraseñas. La conexión se realiza a través de un puente seguro verificado por Google, dándote el control total para activar o desactivar el bot en cualquier momento.
              </p>
           </div>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-8 py-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
         <div className="text-[11px] font-black uppercase tracking-[0.6em] text-zinc-800">© 2026 MAPS_RESPONDER.AI // NEURAL ASSET</div>
         <div className="flex gap-12">
            <div className="flex items-center gap-3 text-zinc-700 font-bold uppercase text-[10px] tracking-widest">
               <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981]" />
               Red en Línea
            </div>
            <div className="text-zinc-700 font-bold uppercase text-[10px] tracking-widest">Términos</div>
            <div className="text-zinc-700 font-bold uppercase text-[10px] tracking-widest">Privacidad</div>
         </div>
      </footer>
    </div>
  );
}
