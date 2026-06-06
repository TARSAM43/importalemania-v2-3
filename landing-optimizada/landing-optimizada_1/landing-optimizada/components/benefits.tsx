"use client";

import { Button } from "@/components/ui/button";
import { Search, Users, Clock, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Search,
    title: "Búsqueda más enfocada",
    description: "Dinos qué coche te gustaría y con qué presupuesto cuentas, así podremos ajustarnos mejor a tus necesidades.",
    bgGradient: "from-blue-50 to-blue-100",
    iconColor: "text-blue-500",
  },
  {
    icon: Users,
    title: "Te acompañamos en el proceso",
    description: "Conectamos tu solicitud con especialistas en importación que te guían de principio a fin.",
    bgGradient: "from-orange-50 to-orange-100",
    iconColor: "text-orange-500",
  },
  {
    icon: Clock,
    title: "Ahorra tiempo y dinero",
    description: "Un buen proceso de importación puede suponer miles de euros de ahorro. Te ayudamos a hacerlo bien.",
    bgGradient: "from-green-50 to-green-100",
    iconColor: "text-green-500",
  },
];

export function Benefits() {
  return (
    <section id="ventajas" className="py-16 sm:py-24 md:py-32 bg-[#F5F7FA]">
      <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-16">
          <span className="inline-block text-[#FF6A00] text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] mb-3 sm:mb-4">La solución</span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[#0A2540] mb-4 sm:mb-6 leading-tight">
            ImportAlemania te ayuda a dar el primer paso de forma clara y rápida
          </h2>
          <p className="text-[#5A6A7A] text-base sm:text-lg leading-relaxed">
            Recibimos tu solicitud y la orientamos para que puedas acceder a opciones más ajustadas a lo que realmente buscas.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] hover:border-[#FF6A00]/30 hover:shadow-xl hover:shadow-[#FF6A00]/5 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.bgGradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                <benefit.icon className={`w-6 h-6 ${benefit.iconColor}`} />
              </div>
              <h3 className="font-serif font-bold text-xl mb-4 text-[#0A2540]">
                {benefit.title}
              </h3>
              <p className="text-[#5A6A7A] leading-relaxed flex-1">
                {benefit.description}
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
            Enviar mi solicitud
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
