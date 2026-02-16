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
  Monitor,
  Users,
  Target,
  Globe
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
        alert("Error: Payment session could not be generated.");
      }
    } catch (e) {
      console.error(e);
      alert("Error initiating payment.");
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
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-black shadow-[0_0_15px_rgba(16,185,129,0.3)]">
               <Bot className="w-5 h-5" />
            </div>
            <span>MAPS<span className="text-emerald-500">_RESPONDER</span></span>
         </div>
         <div className="hidden md:flex gap-10 items-center text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 font-sans">
            <button onClick={() => scrollTo('tech')} className="hover:text-white transition-colors cursor-pointer">Technology</button>
            <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors cursor-pointer">About Us</button>
            <button onClick={() => scrollTo('pricing')} className="hover:text-white transition-colors cursor-pointer">Pricing</button>
            <button 
               onClick={handleSubscribe}
               className="bg-white text-black px-8 py-3 rounded-2xl font-black hover:bg-emerald-400 transition-all active:scale-95 shadow-xl shadow-white/5 cursor-pointer"
            >
               {loading ? "Syncing..." : "Client Access"}
            </button>
         </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto pt-32 pb-40 px-8">
          <div className="text-center mb-32">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-14 border border-emerald-500/20 shadow-inner shadow-emerald-500/10">
               <Star className="w-3.5 h-3.5 fill-current animate-pulse" /> Autonomous Intelligence v8.7
            </div>
            
            <h1 className="text-7xl md:text-[120px] font-black tracking-tighter mb-12 leading-[0.75] text-balance">
               Respond to <br/> 
               <span className="text-zinc-800">your customers</span> <br/>
               <span className="bg-gradient-to-r from-emerald-300 via-emerald-500 to-emerald-200 bg-clip-text text-transparent italic">on autopilot.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 mb-20 max-w-3xl mx-auto leading-relaxed font-medium">
               Let our official OpenClaw agent manage your Google Maps reviews with human empathy. Improve your local SEO and save hours of work today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
               <button 
                  disabled={loading}
                  onClick={handleSubscribe}
                  className="group bg-white text-black px-16 py-8 rounded-[36px] font-black uppercase text-base tracking-[0.15em] shadow-[0_20px_80px_rgba(255,255,255,0.15)] hover:bg-emerald-400 hover:scale-105 transition-all active:scale-95 flex items-center gap-4 cursor-pointer"
               >
                  {loading ? <RefreshCcw className="w-6 h-6 animate-spin" /> : <Rocket className="w-6 h-6" />}
                  Get Started — $20/mo
               </button>
               <button onClick={() => scrollTo('demo')} className="text-zinc-600 hover:text-white font-black uppercase text-[12px] tracking-[0.3em] flex items-center gap-3 transition-all border-b border-transparent hover:border-zinc-800 pb-2 cursor-pointer">
                  Live Demo <ExternalLink className="w-4 h-4" />
               </button>
            </div>
          </div>

          <div id="tech" className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40 pt-20">
             <div className="bg-[#050505] border border-white/5 p-12 rounded-[64px] shadow-2xl relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-700">
                <div className="w-16 h-16 rounded-[24px] bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-10 group-hover:scale-110 transition-transform border border-emerald-500/10 shadow-inner">
                   <Zap className="w-8 h-8 fill-current" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">Zero Effort</h3>
                <p className="text-zinc-500 text-base leading-relaxed font-medium">Install once and forget. The bot monitors and responds to every new review for you.</p>
             </div>
             
             <div className="bg-[#050505] border border-white/5 p-12 rounded-[64px] shadow-2xl relative overflow-hidden group hover:border-blue-500/20 transition-all duration-700">
                <div className="w-16 h-16 rounded-[24px] bg-blue-500/10 flex items-center justify-center text-blue-400 mb-10 group-hover:scale-110 transition-transform border border-blue-500/10 shadow-inner">
                   <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">Advanced AI</h3>
                <p className="text-zinc-500 text-base leading-relaxed font-medium">We use cutting-edge language models to ensure coherent, professional, and helpful responses.</p>
             </div>

             <div className="bg-[#050505] border border-white/5 p-12 rounded-[64px] shadow-2xl relative overflow-hidden group hover:border-purple-500/20 transition-all duration-700">
                <div className="w-16 h-16 rounded-[24px] bg-purple-500/10 flex items-center justify-center text-purple-400 mb-10 group-hover:scale-110 transition-transform border border-purple-500/10 shadow-inner">
                   <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">Better Ranking</h3>
                <p className="text-zinc-500 text-base leading-relaxed font-medium">Google rewards businesses that engage. Climb the maps and attract more local foot traffic.</p>
             </div>
          </div>

          {/* About Us Section */}
          <div id="about" className="mb-40 pt-20">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="text-left">
                   <div className="flex items-center gap-3 text-emerald-500 mb-8 font-black uppercase tracking-[0.4em] text-[10px]">
                      <Globe className="w-4 h-4" /> <span>Our Philosophy</span>
                   </div>
                   <h2 className="text-5xl font-black text-white mb-10 tracking-tighter uppercase italic leading-[0.9]">Human intuition, <br/> <span className="text-zinc-700 text-4xl">neural precision.</span></h2>
                   <p className="text-zinc-400 text-lg leading-relaxed mb-8 font-medium">
                      At MAPS_RESPONDER, we believe technology should be invisible. We don't build tools for you to spend more time on them; we build agents that give you your time back.
                   </p>
                   <div className="space-y-6">
                      <div className="flex gap-4 items-start">
                         <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 mt-1">
                            <Users className="w-5 h-5 text-blue-400" />
                         </div>
                         <div>
                            <div className="font-bold text-white text-sm uppercase tracking-widest">Built for Community</div>
                            <p className="text-zinc-500 text-xs mt-1">Helping local bars, restaurants, and shops compete in a digital world.</p>
                         </div>
                      </div>
                      <div className="flex gap-4 items-start">
                         <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 mt-1">
                            <ShieldCheck className="w-5 h-5 text-emerald-400" />
                         </div>
                         <div>
                            <div className="font-bold text-white text-sm uppercase tracking-widest">Privacy Centric</div>
                            <p className="text-zinc-500 text-xs mt-1">Your data is yours. Our agents only interact with what you authorize.</p>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="relative group">
                   <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                   <div className="bg-zinc-900 border border-zinc-800 rounded-[64px] p-12 relative z-10 shadow-2xl border-t-zinc-700/50 overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-5">
                         <Target className="w-40 h-40" />
                      </div>
                      <div className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500 mb-6">Mission Log // 2026</div>
                      <div className="space-y-4 font-mono text-xs text-zinc-400 leading-relaxed">
                         <div className="flex gap-3"><span className="text-emerald-500 font-bold">18:00</span> &gt; Initializing local node...</div>
                         <div className="flex gap-3"><span className="text-emerald-500 font-bold">18:05</span> &gt; GPT-4o Neural link stable.</div>
                         <div className="flex gap-3"><span className="text-emerald-500 font-bold">18:10</span> &gt; Ready to scale.</div>
                         <div className="text-blue-400 animate-pulse mt-8">_ONLINE_FOR_BUSINESS</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Demo Section */}
          <div id="demo" className="mb-40 pt-20 text-center">
             <div className="max-w-4xl mx-auto bg-zinc-900/40 border border-zinc-800 rounded-[56px] p-12 md:p-20 shadow-[0_40px_100px_rgba(0,0,0,1)] relative overflow-hidden border-t-zinc-700/30">
                <div className="flex items-center gap-3 text-emerald-400 mb-12 font-black uppercase tracking-[0.4em] text-[10px] justify-center">
                   <Monitor className="w-4 h-4" /> <span>Real-time Demonstration</span>
                </div>
                
                <div className="space-y-10">
                   <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-lg shrink-0 border border-zinc-700 font-sans">👤</div>
                      <div className="bg-zinc-800/50 p-6 rounded-3xl rounded-tl-none border border-zinc-800 flex-1 text-left">
                         <div className="flex gap-1 mb-2">
                            {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />)}
                         </div>
                         <p className="text-zinc-300 font-medium leading-relaxed italic text-sm font-sans">"The food was amazing, but the coffee arrived a bit cold. Will definitely return!"</p>
                      </div>
                   </div>

                   <div className="flex gap-6 items-start flex-row-reverse">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 shadow-inner shadow-emerald-500/10">
                         <Bot className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div className="bg-emerald-500/5 p-6 rounded-3xl rounded-tr-none border border-emerald-500/20 flex-1 text-right relative">
                         <div className="absolute -top-3 right-6 bg-emerald-500 text-black text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest font-sans shadow-lg shadow-emerald-500/20">AI Response</div>
                         <p className="text-emerald-50/90 font-medium leading-relaxed text-sm font-sans">"Hi there! Thank you so much for visiting us and for your kind words. We apologize about the coffee; next time let us know and we'll swap it for a fresh one immediately. Hope to see you soon!"</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Pricing Section */}
          <div id="pricing" className="text-center pt-20">
             <h2 className="text-5xl font-black tracking-tighter mb-16 uppercase italic font-sans text-white text-center">Simple Pricing. <span className="text-zinc-500 text-4xl">No Hidden Fees.</span></h2>
             <div className="max-w-md mx-auto bg-white text-black p-12 rounded-[56px] shadow-[0_40px_100px_rgba(255,255,255,0.1)] relative overflow-hidden group border border-white/20">
                <div className="absolute top-0 right-0 bg-black text-white px-8 py-3 rounded-bl-[32px] font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl">Standard</div>
                <div className="text-zinc-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 font-sans text-center">Professional Plan</div>
                <div className="flex items-center justify-center gap-1 mb-8">
                   <span className="text-3xl font-black">$</span>
                   <span className="text-8xl font-black tracking-tighter">20</span>
                   <span className="text-xl font-bold text-zinc-400 font-sans">/mo</span>
                </div>
                <ul className="text-left space-y-6 mb-12 border-y border-zinc-100 py-10">
                   {[
                     "Unlimited Responses",
                     "Official Google API Link",
                     "24/7 Monitoring",
                     "Custom Brand Voice"
                   ].map(item => (
                     <li key={item} className="flex items-center gap-4 font-bold text-sm font-sans text-zinc-800">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" /> {item}
                     </li>
                   ))}
                </ul>
                <button 
                  onClick={handleSubscribe}
                  className="w-full bg-black text-white py-6 rounded-[28px] font-black uppercase tracking-[0.2em] hover:bg-emerald-600 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.2)] active:scale-95 cursor-pointer font-sans text-xs"
                >
                   Activate Now
                </button>
             </div>
          </div>

        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-8 py-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
         <div className="text-[11px] font-black uppercase tracking-[0.6em] text-zinc-800 font-sans">© 2026 MAPS_RESPONDER.AI // OPENCLAW NEURAL NETWORK</div>
         <div className="flex gap-12">
            <div className="flex items-center gap-3 text-zinc-700 font-bold uppercase text-[10px] tracking-widest font-sans">
               <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981]" />
               Engine Online
            </div>
         </div>
      </footer>
    </div>
  );
}
