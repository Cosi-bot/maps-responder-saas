"use client";

import Link from "next/link";
import { CheckCircle2, Home, ExternalLink } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-8 font-sans">
      <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-[48px] p-12 text-center shadow-2xl">
        <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
           <CheckCircle2 className="w-10 h-10 text-emerald-500" />
        </div>
        <h1 className="text-4xl font-black mb-6 tracking-tighter uppercase text-white">¡Pago Exitoso!</h1>
        <p className="text-zinc-400 mb-12 font-medium leading-relaxed">
          Bienvenido a la red autónoma. Tu negocio ya está conectado y el bot está empezando a vigilar tus reseñas de Google Maps.
        </p>
        
        <div className="space-y-4">
           <Link href="/" className="block w-full bg-white text-black font-black py-5 rounded-2xl uppercase text-xs tracking-widest shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3">
              <Home className="w-4 h-4" /> Volver al Inicio
           </Link>
        </div>
      </div>
    </div>
  );
}
