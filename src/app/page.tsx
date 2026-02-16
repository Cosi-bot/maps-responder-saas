export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <nav className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between border-b border-zinc-900">
         <div className="text-xl font-black tracking-tighter">MAPS_RESPONDER<span className="text-emerald-500">.AI</span></div>
         <button className="bg-zinc-100 text-black px-6 py-2 rounded-xl font-bold text-sm hover:bg-white transition-colors">Entrar</button>
      </nav>

      <main className="max-w-4xl mx-auto pt-32 pb-20 px-8 text-center">
        <div className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-widest rounded-full mb-8 border border-emerald-500/20">
           Inteligencia Artificial para Negocios Locales
        </div>
        <h1 className="text-7xl font-black tracking-tighter mb-8 leading-[0.9] text-balance">
           Tus reseñas de Google, <br/> <span className="text-zinc-500 text-6xl">respondidas en segundos.</span>
        </h1>
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
           No dejes a tus clientes esperando. Nuestro asistente inteligente responde profesionalmente a cada opinión en Google Maps por ti. Ahorra tiempo y mejora tu reputación hoy mismo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <button className="bg-white text-black px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest shadow-2xl hover:scale-105 transition-all">
              Probar Gratis
           </button>
           <button className="bg-zinc-900 text-zinc-100 border border-zinc-800 px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-zinc-800 transition-all">
              Ver Demo
           </button>
        </div>

        <div className="mt-32 pt-20 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-3 gap-12">
           <div>
              <div className="text-3xl font-black mb-1">24/7</div>
              <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Atención Continua</div>
           </div>
           <div>
              <div className="text-3xl font-black mb-1">100%</div>
              <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Seguro y Oficial</div>
           </div>
           <div>
              <div className="text-3xl font-black mb-1">AI</div>
              <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Powered by Gemini</div>
           </div>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-8 py-12 border-t border-zinc-900 text-center">
         <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">© 2026 MAPS_RESPONDER.AI // UNA SOLUCIÓN DE TU IMPERIO DIGITAL</p>
      </footer>
    </div>
  );
}
