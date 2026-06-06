"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, Shield, Clock, TrendingDown } from "lucide-react";

const stats = [
  { value: "3.200€", label: "Ahorro medio por operación" },
  { value: "30–40 días", label: "Hasta tu puerta en España" },
  { value: "200+", label: "Solicitudes gestionadas" },
];

const trustBullets = [
  "Accede a BMW, Audi y Mercedes hasta un 20% más baratos que en España",
  "Importadores verificados se encargan de todo el papeleo y trámites",
  "Sin compromiso — recibe opciones reales antes de decidir nada",
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bmw.jpg"
          alt="BMW de lujo importado desde Alemania"
          fill
          priority
          className="object-cover object-right"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/97 via-[#0A2540]/80 to-[#0A2540]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/50 via-transparent to-[#0A2540]/20" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 py-24 sm:py-32 md:py-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-[#FF6A00] animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-wide">Especialistas en importación desde Alemania</span>
          </div>

          <h1 className="font-serif text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-[1.15] tracking-tight mb-5 sm:mb-6 text-white">
            Ahorra hasta{" "}
            <span className="text-[#FF6A00]">5.000€</span>{" "}
            en tu próximo coche sin salir de España
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/75 mb-8 sm:mb-10 max-w-xl leading-relaxed">
            Conectamos compradores con importadores verificados que gestionan todo — búsqueda, papeleo, transporte e ITV — hasta entregar el coche en tu puerta.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 sm:gap-10 mb-10 sm:mb-12">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/50 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mb-6 sm:mb-8">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#FF6A00] hover:bg-[#e55f00] text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-7 h-auto rounded-xl shadow-[0_8px_30px_rgba(255,106,0,0.35)] hover:shadow-[0_12px_40px_rgba(255,106,0,0.45)] hover:scale-[1.02] transition-all duration-300"
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
            >
              Quiero recibir opciones reales
            </Button>
            <p className="text-white/40 text-sm mt-3">
              Sin compromiso · Respuesta en menos de 24h · Gratis para el comprador
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            {trustBullets.map((bullet, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FF6A00]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#FF6A00]" />
                </div>
                <span className="text-white/80 text-sm sm:text-base leading-relaxed">{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust bar at bottom */}
      <div className="relative z-10 w-full bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 py-4 flex flex-wrap gap-6 sm:gap-10 items-center">
          <div className="flex items-center gap-2 text-white/55 text-sm">
            <Shield className="w-4 h-4 text-[#FF6A00]" />
            Importadores verificados
          </div>
          <div className="flex items-center gap-2 text-white/55 text-sm">
            <Clock className="w-4 h-4 text-[#FF6A00]" />
            Respuesta en 24h
          </div>
          <div className="flex items-center gap-2 text-white/55 text-sm">
            <TrendingDown className="w-4 h-4 text-[#FF6A00]" />
            Precio final sin sorpresas
          </div>
        </div>
      </div>

      <div className="hidden sm:flex absolute bottom-20 left-1/2 -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-white/40 text-xs uppercase tracking-[0.2em] font-medium">Ver más</span>
        <ChevronDown className="w-5 h-5 text-white/40 animate-bounce" />
      </div>
    </section>
  );
}
