"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle, FileText, Languages, HelpCircle, ArrowRight } from "lucide-react";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Miedo a estafas",
    description: "No siempre es fácil saber si el anuncio es fiable o si el coche está en buen estado.",
  },
  {
    icon: FileText,
    title: "Papeleo y trámites",
    description: "El proceso puede complicarse rápido entre documentación, transporte y matriculación.",
  },
  {
    icon: Languages,
    title: "Barrera idiomática",
    description: "Hablar con vendedores extranjeros o entender condiciones no siempre es sencillo.",
  },
  {
    icon: HelpCircle,
    title: "Dudas sobre el historial",
    description: "Kilometraje, mantenimiento o daños anteriores pueden ser difíciles de verificar.",
  },
];

export function PainPoints() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-16">
          <span className="inline-block text-[#FF6A00] text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] mb-3 sm:mb-4">El problema</span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[#0A2540] mb-4 sm:mb-6 leading-tight">
            Importar un coche por tu cuenta puede salir caro, lento y arriesgado
          </h2>
          <p className="text-[#5A6A7A] text-base sm:text-lg leading-relaxed">
            Buscar un coche en Alemania parece una gran oportunidad, pero cuando empiezas de verdad aparecen las dudas, los errores y el tiempo perdido.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 border border-[#E2E8F0] hover:border-[#FF6A00]/30 hover:shadow-xl hover:shadow-[#FF6A00]/5 transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <point.icon className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="font-serif font-bold text-xl mb-3 text-[#0A2540]">
                {point.title}
              </h3>
              <p className="text-[#5A6A7A] text-base leading-relaxed flex-1">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-[#FF6A00] hover:bg-[#e55f00] text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-7 h-auto rounded-xl shadow-[0_8px_30px_rgba(255,106,0,0.3)] hover:shadow-[0_12px_40px_rgba(255,106,0,0.4)] hover:scale-[1.02] transition-all duration-300 group"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Quiero hacerlo de forma más fácil
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
