"use client";

import { CheckCircle, Zap, Target, Sparkles } from "lucide-react";

const trustPoints = [
  {
    icon: CheckCircle,
    title: "Solicitudes más cualificadas",
    description: "Cuanto más clara es tu búsqueda, mejores opciones puedes recibir.",
    bgGradient: "from-green-50 to-green-100",
    iconColor: "text-green-500",
  },
  {
    icon: Zap,
    title: "Proceso rápido",
    description: "Te pedimos solo la información importante.",
    bgGradient: "from-yellow-50 to-amber-100",
    iconColor: "text-amber-500",
  },
  {
    icon: Target,
    title: "Enfoque realista",
    description: "Nos centramos en personas que realmente quieren importar un coche.",
    bgGradient: "from-orange-50 to-orange-100",
    iconColor: "text-orange-500",
  },
  {
    icon: Sparkles,
    title: "Experiencia clara",
    description: "Una plataforma pensada para simplificar el primer paso.",
    bgGradient: "from-pink-50 to-rose-100",
    iconColor: "text-rose-500",
  },
];

const stats = [
  { value: "< 1 min", label: "Solicitud rápida" },
  { value: "100%", label: "Proceso claro" },
  { value: "Importación", label: "Enfoque exclusivo" },
];

export function WhyTrustUs() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-[#F5F7FA]">
      <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-16">
          <span className="inline-block text-[#FF6A00] text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] mb-3 sm:mb-4">Por qué elegirnos</span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[#0A2540] mb-4 sm:mb-6 leading-tight">
            Una forma más seria de empezar la búsqueda de tu coche
          </h2>
          <p className="text-[#5A6A7A] text-base sm:text-lg leading-relaxed">
            Nuestro objetivo es ayudarte a iniciar el proceso con más claridad, más foco y menos fricción.
          </p>
        </div>

        {/* Trust points grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 border border-[#E2E8F0] hover:border-[#FF6A00]/30 hover:shadow-xl hover:shadow-[#FF6A00]/5 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${point.bgGradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                <point.icon className={`w-6 h-6 ${point.iconColor}`} />
              </div>
              <h3 className="font-serif font-bold text-lg mb-3 text-[#0A2540]">
                {point.title}
              </h3>
              <p className="text-[#5A6A7A] text-sm leading-relaxed flex-1">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="bg-[#0A2540] rounded-xl sm:rounded-2xl py-8 sm:py-12 px-4 sm:px-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center flex-1 sm:flex-none sm:min-w-[100px] md:min-w-[120px]">
                <div className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#FF6A00] mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
