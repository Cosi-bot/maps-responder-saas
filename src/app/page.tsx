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
  Bot,
  Monitor
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

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
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
         <div className="hidden md:flex gap-10 items-center text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 font-sans">
            <button onClick={() => scrollTo('tecnologia')} className="hover:text-white transition-colors cursor-pointer">Tecnología</button>
            <button onClick={() => scrollTo('seguridad')} className="hover:text-white transition-colors cursor-pointer">Seguridad</button>
            <button onClick={() => scrollTo('precios')} className="hover:text-white transition-colors cursor-pointer">Precios</button>
            <button 
               onClick={handleSubscribe}
               className="bg-white text-black px-8 py-3 rounded-2xl font-black hover:bg-emerald-400 transition-all active:scale-95 shadow-xl shadow-white/5 cursor-pointer"
            >
               {loading ? "Iniciando..." : "Acceso Beta"}
            </button>
         </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto pt-32 pb-40 px-8">
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
                  className="group bg-white text-black px-16 py-8 rounded-[36px] font-black uppercase text-base tracking-[0.15em] shadow-[0_20px_80px_rgba(255,255,255,0.1)] hover:bg-emerald-400 hover:scale-105 transition-all active:scale-95 flex items-center gap-4 cursor-pointer"
               >
                  {loading ? <RefreshCcw className="w-6 h-6 animate-spin" /> : <Rocket className="w-6 h-6" />}
                  Activar Plan — $20/mes
               </button>
               <button onClick={() => scrollTo('demo')} className="text-zinc-600 hover:text-white font-black uppercase text-[12px] tracking-[0.3em] flex items-center gap-3 transition-all border-b border-transparent hover:border-zinc-800 pb-2 cursor-pointer">
                  Ver Demo Real <ExternalLink className="w-4 h-4" />
               </button>
            </div>
          </div>

          <div id="tecnologia" className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40 pt-20">
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
                <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">IA Avanzada</h3>
                <p className="text-zinc-500 text-base leading-relaxed font-medium">Utilizamos modelos de lenguaje de última generación para asegurar respuestas coherentes y profesionales.</p>
             </div>

             <div className="bg-[#050505] border border-white/5 p-12 rounded-[64px] shadow-2xl relative overflow-hidden group hover:border-purple-500/20 transition-all duration-700">
                <div className="w-16 h-16 rounded-[24px] bg-purple-500/10 flex items-center justify-center text-purple-400 mb-10 group-hover:scale-110 transition-transform border border-purple-500/10">
                   <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">Más Visibilidad</h3>
                <p className="text-zinc-500 text-base leading-relaxed font-medium">Google premia a los negocios que responden. Sube puestos en el mapa y atrae más gente.</p>
             </div>
          </div>

          {/* Demo Section */}
          <div id="demo" className="mb-40 pt-20 text-center">
             <div className="max-w-4xl mx-auto bg-zinc-900/40 border border-zinc-800 rounded-[56px] p-12 md:p-20 shadow-[0_40px_100px_rgba(0,0,0,1)] relative overflow-hidden border-t-zinc-700/30">
                <div className="flex items-center gap-3 text-emerald-400 mb-12 font-black uppercase tracking-[0.4em] text-[10px] justify-center">
                   <Monitor className="w-4 h-4" /> <span>Demostración en Tiempo Real</span>
                </div>
                
                <div className="space-y-10">
                   <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-lg shrink-0 border border-zinc-700 font-sans">👤</div>
                      <div className="bg-zinc-800/50 p-6 rounded-3xl rounded-tl-none border border-zinc-800 flex-1 text-left">
                         <div className="flex gap-1 mb-2">
                            {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />)}
                         </div>
                         <p className="text-zinc-300 font-medium leading-relaxed italic text-sm font-sans">"La comida estuvo increíble, pero el café llegó un poco frío. Volveré seguro!"</p>
                      </div>
                   </div>

                   <div className="flex gap-6 items-start flex-row-reverse">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                         <Bot className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div className="bg-emerald-500/5 p-6 rounded-3xl rounded-tr-none border border-emerald-500/20 flex-1 text-right relative">
                         <div className="absolute -top-3 right-6 bg-emerald-500 text-black text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest font-sans">Respuesta de IA</div>
                         <p className="text-emerald-50/90 font-medium leading-relaxed text-sm font-sans">"¡Hola! Muchas gracias por tu visita y tus amables palabras. Lamentamos lo del café; la próxima vez avísanos y te lo cambiaremos al instante. ¡Esperamos verte pronto!"</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <div id="seguridad" className="bg-[#050505] border border-zinc-900 rounded-[56px] p-16 flex flex-col md:flex-row items-center gap-12 shadow-inner mb-40 pt-20 text-center md:text-left">
             <div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 shrink-0">
                <ShieldAlert className="w-10 h-10" />
             </div>
             <div>
                <h4 className="text-white font-black uppercase tracking-[0.3em] text-sm mb-4 font-sans text-center md:text-left">Seguridad v8.7 de Grado Militar</h4>
                <p className="text-zinc-500 text-lg leading-relaxed font-medium max-w-2xl font-sans">
                   Nunca te pediremos tus contraseñas. La conexión se realiza a través de un puente seguro verificado por Google (OAuth 2.0), dándote el control total para activar o desactivar el bot en cualquier momento desde tu cuenta.
                </p>
             </div>
          </div>

          {/* Pricing Section */}
          <div id="precios" className="text-center pt-20">
             <h2 className="text-5xl font-black tracking-tighter mb-16 uppercase italic font-sans text-white text-center">Un solo plan. <span className="text-zinc-500">Sin trucos.</span></h2>
             <div className="max-w-md mx-auto bg-white text-black p-12 rounded-[56px] shadow-[0_40px_100px_rgba(255,255,255,0.1)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-black text-white px-6 py-2 rounded-bl-3xl font-black text-[10px] uppercase tracking-widest font-sans">Popular</div>
                <div className="text-zinc-500 font-black uppercase tracking-[0.3em] text-[10px] mb-8 font-sans text-center">Plan Profesional</div>
                <div className="flex items-center justify-center gap-1 mb-8">
                   <span className="text-3xl font-black">$</span>
                   <span className="text-8xl font-black tracking-tighter">20</span>
                   <span className="text-xl font-bold text-zinc-400 font-sans">/mes</span>
                </div>
                <ul className="text-left space-y-6 mb-12">
                   {[
                     "Respuestas Ilimitadas",
                     "Conexión Oficial Google",
                     "Soporte 24/7",
                     "Personalidad de Marca"
                   ].map(item => (
                     <li key={item} className="flex items-center gap-4 font-bold text-sm font-sans">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" /> {item}
                     </li>
                   ))}
                </ul>
                <button 
                  onClick={handleSubscribe}
                  className="w-full bg-black text-white py-6 rounded-3xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl active:scale-95 cursor-pointer font-sans"
                >
                   Activar Ahora
                </button>
             </div>
          </div>

        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-8 py-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
         <div className="text-[11px] font-black uppercase tracking-[0.6em] text-zinc-800 font-sans">© 2026 MAPS_RESPONDER.AI // OPENCLAW OS</div>
         <div className="flex gap-12">
            <div className="flex items-center gap-3 text-zinc-700 font-bold uppercase text-[10px] tracking-widest font-sans">
               <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981]" />
               Red en Línea
            </div>
         </div>
      </footer>
    </div>
  );
}
