"use client";

const steps = [
  {
    number: "1",
    title: "Cuéntanos qué buscas",
    description: "Modelo, presupuesto y tus datos de contacto.",
  },
  {
    number: "2",
    title: "Analizamos tu perfil",
    description: "Revisamos tu solicitud y la preparamos para los profesionales.",
  },
  {
    number: "3",
    title: "Te contactan con opciones",
    description: "Recibes propuestas reales adaptadas a lo que necesitas.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-20">
          <span className="inline-block text-[#FF6A00] text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] mb-3 sm:mb-4">Proceso simple</span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[#0A2540] leading-tight">
            Así de simple funciona el proceso
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 md:gap-8">
            {/* Connection line - desktop only */}
            <div className="hidden md:block absolute top-[50px] left-[calc(16.67%+50px)] right-[calc(16.67%+50px)] h-[2px] bg-[#FF6A00]/20" />
            
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step number circle */}
                <div className="relative inline-flex items-center justify-center w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full border-[3px] border-[#FF6A00] bg-white mb-6 sm:mb-8 z-10 shadow-lg shadow-[#FF6A00]/10">
                  <span className="font-serif text-4xl sm:text-5xl font-bold text-[#FF6A00]">{step.number}</span>
                </div>
                
                <h3 className="font-serif font-bold text-xl md:text-[1.375rem] mb-4 text-[#0A2540]">
                  {step.title}
                </h3>
                
                <p className="text-[#5A6A7A] leading-relaxed text-base max-w-[260px] mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
