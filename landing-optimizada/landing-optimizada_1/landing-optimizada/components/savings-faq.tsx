"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const savingsExample = [
  { label: "BMW Serie 3 320d (2022, 45.000 km) en España", value: "32.500€", type: "bad" },
  { label: "Mismo coche en Alemania", value: "24.800€", type: "good" },
  { label: "Transporte + ITV", value: "+ 800€", type: "neutral" },
  { label: "Gestión importador", value: "+ 900€", type: "neutral" },
  { label: "Total coste real", value: "26.500€", type: "total" },
  { label: "Ahorro total", value: "6.000€", type: "saving" },
];

const faqs = [
  {
    q: "¿Es completamente legal importar un coche desde Alemania?",
    a: "Sí, es totalmente legal. Dentro de la UE la libre circulación de mercancías permite importar vehículos sin restricciones. Solo hay que pagar el IVA correspondiente en España al matricular, que los importadores ya incluyen en su gestión.",
  },
  {
    q: "¿Qué pasa si el coche llega con algún problema?",
    a: "Los importadores verificados realizan una inspección técnica completa en Alemania antes del envío, te proporcionan el historial de mantenimiento, pasan la ITV en España y entregan el coche con 12 meses de garantía.",
  },
  {
    q: "¿Cuánto tiempo tarda el proceso completo?",
    a: "Entre 30 y 40 días desde que confirmas el coche hasta que lo tienes en tu puerta en España con todos los papeles en regla y listo para circular.",
  },
  {
    q: "¿Me cuesta algo usar ImportAlemania?",
    a: "Para ti como comprador es completamente gratuito. Conectamos compradores con importadores sin ningún coste adicional para quien busca el coche.",
  },
  {
    q: "¿Tengo que ir a Alemania en algún momento?",
    a: "No. El importador gestiona todo desde España: búsqueda, negociación con el concesionario alemán, transporte, ITV y matriculación. Tú recibes el coche en tu dirección sin moverte.",
  },
  {
    q: "¿Puedo importar cualquier marca o modelo?",
    a: "Sí. Alemania tiene uno de los mercados de coches de ocasión más grandes de Europa. BMW, Audi, Mercedes, Volkswagen, Porsche y muchas otras marcas están disponibles con amplia oferta y excelente relación precio-calidad.",
  },
];

export function SavingsFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Savings section */}
      <section className="py-16 sm:py-24 bg-[#F5F7FA]">
        <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
            <span className="inline-block text-[#FF6A00] text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] mb-3 sm:mb-4">El ahorro real</span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A2540] leading-tight">
              ¿Cuánto puedes ahorrar importando desde Alemania?
            </h2>
            <p className="text-[#5A6A7A] text-base sm:text-lg mt-4">
              Este es un ejemplo real con un BMW Serie 3, uno de los coches más importados.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm">
              {savingsExample.map((row, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0] last:border-0 ${
                    row.type === "saving" ? "bg-green-50" : ""
                  }`}
                >
                  <span className={`text-sm leading-snug ${
                    row.type === "saving" ? "font-semibold text-green-800" : "text-[#5A6A7A]"
                  }`}>
                    {row.label}
                  </span>
                  <span className={`text-base font-bold ml-4 flex-shrink-0 ${
                    row.type === "bad" ? "text-[#c0392b]" :
                    row.type === "good" ? "text-[#0A2540]" :
                    row.type === "total" ? "text-[#0A2540]" :
                    row.type === "saving" ? "text-green-700" :
                    "text-[#5A6A7A]"
                  }`}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-[#5A6A7A] mt-4">
              Ejemplo orientativo. El ahorro varía según modelo, equipamiento y mercado.
            </p>

            <div className="text-center mt-8">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#FF6A00] hover:bg-[#e55f00] text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-7 h-auto rounded-xl shadow-[0_8px_30px_rgba(255,106,0,0.3)] hover:shadow-[0_12px_40px_rgba(255,106,0,0.4)] hover:scale-[1.02] transition-all duration-300"
                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              >
                Quiero ver cuánto ahorro con mi coche
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
            <span className="inline-block text-[#FF6A00] text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] mb-3 sm:mb-4">FAQ</span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A2540] leading-tight">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="max-w-2xl mx-auto divide-y divide-[#E2E8F0]">
            {faqs.map((faq, i) => (
              <div key={i} className="py-5">
                <button
                  className="w-full flex items-start justify-between gap-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-[#0A2540] text-base leading-snug">
                    {faq.q}
                  </span>
                  {openFaq === i
                    ? <ChevronUp className="w-5 h-5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    : <ChevronDown className="w-5 h-5 text-[#5A6A7A] flex-shrink-0 mt-0.5" />
                  }
                </button>
                {openFaq === i && (
                  <p className="mt-3 text-[#5A6A7A] text-sm sm:text-base leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
