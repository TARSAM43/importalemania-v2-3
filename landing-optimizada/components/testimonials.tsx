"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    location: "Barcelona",
    initial: "C",
    car: "BMW Serie 3 320d · Importado marzo 2025",
    quote: "En España el mismo coche valía 31.500€. Lo traje desde Múnich por 26.800€ con todo incluido. El importador gestionó absolutamente todo en 35 días.",
    saving: "Ahorro verificado: 4.700€",
    rating: 5,
  },
  {
    name: "Laura G.",
    location: "Madrid",
    initial: "L",
    car: "Audi A4 35 TDI · Importado enero 2025",
    quote: "Tenía miedo de que fuera complicado. El importador me acompañó en cada paso y recibí el Audi en perfectas condiciones. Nunca pisé Alemania.",
    saving: "Ahorro verificado: 3.200€",
    rating: 5,
  },
  {
    name: "Marcos R.",
    location: "Valencia",
    initial: "M",
    car: "Mercedes C220d · Importado mayo 2025",
    quote: "Rellené el formulario un martes. El jueves ya tenía al importador al teléfono con tres opciones concretas de coches. Rapidísimo y muy profesional.",
    saving: "Ahorro verificado: 5.100€",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-16">
          <span className="inline-block text-[#FF6A00] text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] mb-3 sm:mb-4">Testimonios</span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[#0A2540] leading-tight">
            Compradores que ya lo hicieron
          </h2>
          <p className="text-[#5A6A7A] text-base sm:text-lg mt-4 leading-relaxed">
            Resultados reales de personas que importaron su coche desde Alemania.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] hover:border-[#FF6A00]/30 hover:shadow-xl hover:shadow-[#FF6A00]/5 transition-all duration-300 relative flex flex-col h-full"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#FF6A00]/10" />

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FF6A00] text-[#FF6A00]" />
                ))}
              </div>

              <p className="text-[#5A6A7A] text-xs uppercase tracking-wider font-medium mb-3">
                {t.car}
              </p>

              <p className="text-[#0A2540] leading-relaxed text-base sm:text-lg mb-4 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-lg px-3 py-1.5 mb-5 w-fit">
                <span className="text-green-700 text-xs font-semibold">{t.saving}</span>
              </div>

              <div className="border-t border-[#E2E8F0] pt-5 flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6A00]/10 to-[#FF6A00]/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-base text-[#FF6A00]">{t.initial}</span>
                </div>
                <div>
                  <div className="font-semibold text-[#0A2540] text-sm">{t.name}</div>
                  <div className="text-[#5A6A7A] text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export function Testimonials() {
  return (
    <section id="testimonios" className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-16">
          <span className="inline-block text-[#FF6A00] text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] mb-3 sm:mb-4">Testimonios</span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[#0A2540] leading-tight">
            Compradores que ya lo hicieron
          </h2>
          <p className="text-[#5A6A7A] text-base sm:text-lg mt-4 leading-relaxed">
            Resultados reales de personas que importaron su coche desde Alemania.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] hover:border-[#FF6A00]/30 hover:shadow-xl hover:shadow-[#FF6A00]/5 transition-all duration-300 relative flex flex-col h-full"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#FF6A00]/10" />

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FF6A00] text-[#FF6A00]" />
                ))}
              </div>

              <p className="text-[#5A6A7A] text-xs uppercase tracking-wider font-medium mb-3">
                {t.car}
              </p>

              <p className="text-[#0A2540] leading-relaxed text-base sm:text-lg mb-4 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-lg px-3 py-1.5 mb-5 w-fit">
                <span className="text-green-700 text-xs font-semibold">{t.saving}</span>
              </div>

              <div className="border-t border-[#E2E8F0] pt-5 flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6A00]/10 to-[#FF6A00]/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-base text-[#FF6A00]">{t.initial}</span>
                </div>
                <div>
                  <div className="font-semibold text-[#0A2540] text-sm">{t.name}</div>
                  <div className="text-[#5A6A7A] text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
