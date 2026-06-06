"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, ChevronLeft, Check, Sparkles } from "lucide-react";

const BRANDS = [
  { id: "bmw", label: "BMW" },
  { id: "audi", label: "Audi" },
  { id: "mercedes", label: "Mercedes-Benz" },
  { id: "volkswagen", label: "Volkswagen" },
  { id: "porsche", label: "Porsche" },
  { id: "otros", label: "Otros" },
];

const BUDGETS = [
  { id: "menos-10", label: "Menos de 10.000€" },
  { id: "10-20", label: "10.000€ – 20.000€" },
  { id: "20-30", label: "20.000€ – 30.000€" },
  { id: "30-50", label: "30.000€ – 50.000€" },
  { id: "mas-50", label: "Más de 50.000€" },
];

const TOTAL_STEPS = 6;
const WEBHOOK_URL = "https://hook.eu1.make.com/prdhpgxyoj0bkjepuxs59acxy12rwq4f";

export function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    brand: "",
    otherBrand: "",
    model: "",
    budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const progress = Math.round((step / TOTAL_STEPS) * 100);

  const isStep1Valid = formData.nombre.trim() !== "" && formData.telefono.trim() !== "";
  const isStep2Valid = formData.brand !== "" && (formData.brand !== "otros" || formData.otherBrand.trim() !== "");
  const isStep3Valid = formData.model.trim() !== "";
  const isStep4Valid = formData.budget !== "";
  // Steps 5 and 6 are informational/confirmation — always valid
  const isStep5Valid = true;
  const isStep6Valid = true;

  const canContinue = useCallback(() => {
    switch (step) {
      case 1: return isStep1Valid;
      case 2: return isStep2Valid;
      case 3: return isStep3Valid;
      case 4: return isStep4Valid;
      case 5: return isStep5Valid;
      case 6: return isStep6Valid;
      default: return false;
    }
  }, [step, isStep1Valid, isStep2Valid, isStep3Valid, isStep4Valid]);

  const nextStep = () => {
    if (step < TOTAL_STEPS && canContinue()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    // Debug log
    console.log("[ContactForm] handleSubmit triggered");
    console.log("[ContactForm] Current formData:", JSON.stringify(formData, null, 2));
    console.log("[ContactForm] isStep6Valid:", isStep6Valid);
    console.log("[ContactForm] isSubmitting:", isSubmitting);

    // Prevent double submission
    if (isSubmitting) {
      console.log("[ContactForm] Already submitting, blocking duplicate");
      return;
    }

    // Validate required fields
    if (!isStep6Valid) {
      console.log("[ContactForm] Validation failed - missing required fields");
      setSubmitError("Por favor, completa todos los campos obligatorios.");
      return;
    }

    // Clear any previous error
    setSubmitError(null);
    setIsSubmitting(true);

    // Build payload with human-readable labels
    const brandLabel = formData.brand === "otros"
      ? formData.otherBrand.trim()
      : BRANDS.find(b => b.id === formData.brand)?.label || formData.brand;
    const budgetLabel = BUDGETS.find(b => b.id === formData.budget)?.label || "No especificado";

    const payload = {
      nombre: formData.nombre.trim(),
      telefono: formData.telefono.trim(),
      marca: brandLabel,
      modelo: formData.model.trim() || "No especificado",
      presupuesto: budgetLabel,
    };

    console.log("[ContactForm] Sending payload to webhook:", JSON.stringify(payload, null, 2));
    console.log("[ContactForm] Webhook URL:", WEBHOOK_URL);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("[ContactForm] Response received");
      console.log("[ContactForm] Response status:", response.status);
      console.log("[ContactForm] Response ok:", response.ok);

      if (response.ok) {
        console.log("[ContactForm] SUCCESS - Form submitted successfully");
        setIsSubmitted(true);
        setSubmitError(null);
      } else {
        let errorDetail = "";
        try {
          errorDetail = await response.text();
        } catch {
          errorDetail = "No details available";
        }
        console.error("[ContactForm] ERROR - Server responded with error:", response.status, errorDetail);
        setSubmitError("Error del servidor. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("[ContactForm] ERROR - Network/fetch error:", error);
      setSubmitError("Error de conexión. Por favor, verifica tu conexión e inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
      console.log("[ContactForm] Submission process completed");
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleSubmit();
  };

  const handleButtonClick = () => {
    console.log("[ContactForm] Submit button clicked");
    handleSubmit();
  };

  const SelectableButton = ({
    selected,
    onClick,
    children,
  }: {
    selected: boolean;
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full p-4 sm:p-5 rounded-xl border-2 text-left font-medium text-base sm:text-lg
        transition-all duration-200 ease-out touch-manipulation
        ${selected
          ? "border-[#FF6A00] bg-[#FF6A00]/5 text-[#0A2540] shadow-[0_0_0_3px_rgba(255,106,0,0.15)]"
          : "border-[#E2E8F0] bg-white text-[#0A2540] hover:border-[#FF6A00]/50 hover:bg-[#F5F7FA]"
        }
      `}
    >
      <div className="flex items-center justify-between">
        <span>{children}</span>
        {selected && (
          <div className="w-6 h-6 rounded-full bg-[#FF6A00] flex items-center justify-center flex-shrink-0">
            <Check className="w-4 h-4 text-white" />
          </div>
        )}
      </div>
    </button>
  );

  return (
    <section id="contacto" className="py-16 sm:py-24 md:py-32 bg-[#0A2540] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF6A00]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6A00]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="w-full max-w-[600px] mx-auto px-4 sm:px-6 md:px-8 relative">
        {isSubmitted ? (
          <div className="bg-white rounded-xl sm:rounded-2xl p-8 sm:p-10 md:p-12 text-center shadow-2xl animate-in fade-in duration-500">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mx-auto mb-8">
              <Check className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#0A2540] mb-4">
              Solicitud enviada
            </h3>
            <p className="text-[#5A6A7A] text-lg leading-relaxed">
              Importadores especializados contactarán contigo para acompañarte en todo el proceso.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Progress bar */}
            <div className="px-6 sm:px-8 pt-6 sm:pt-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-[#5A6A7A] font-medium">
                  Paso {step} de {TOTAL_STEPS}
                </span>
                <span className="text-sm font-semibold text-[#FF6A00] flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  {progress}%
                </span>
              </div>
              <div className="h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FF6A00] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Form content */}
            <div className="p-6 sm:p-8 min-h-[400px] flex flex-col">
              {/* Step 1 - Contacto PRIMERO */}
              {step === 1 && (
                <div className="flex-1 animate-in fade-in slide-in-from-right-4 duration-300">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2540] mb-3 text-center">
                    ¿Dónde te contactamos?
                  </h2>
                  <p className="text-[#5A6A7A] text-sm text-center mb-8">
                    Un importador te llamará en menos de 24h con opciones reales.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#0A2540] mb-2">
                        Nombre <span className="text-[#FF6A00]">*</span>
                      </label>
                      <Input
                        type="text"
                        placeholder="Tu nombre"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="h-14 text-base rounded-xl border-[#E2E8F0] bg-[#F5F7FA] focus:border-[#FF6A00] focus:ring-[#FF6A00]/20"
                        autoComplete="name"
                        autoCapitalize="words"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0A2540] mb-2">
                        Teléfono <span className="text-[#FF6A00]">*</span>
                      </label>
                      <Input
                        type="tel"
                        inputMode="tel"
                        placeholder="Ej: 612 345 678"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="h-14 text-base rounded-xl border-[#E2E8F0] bg-[#F5F7FA] focus:border-[#FF6A00] focus:ring-[#FF6A00]/20"
                        autoComplete="tel"
                      />
                    </div>
                    <p className="text-xs text-[#5A6A7A] pt-1">
                      Solo usaremos tus datos para enviarte opciones reales. Sin spam.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 2 - Brand */}
              {step === 2 && (
                <div className="flex-1 animate-in fade-in slide-in-from-right-4 duration-300">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2540] mb-8 text-center">
                    ¿Qué marca te interesa?
                  </h2>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {BRANDS.map((brand) => (
                      <SelectableButton
                        key={brand.id}
                        selected={formData.brand === brand.id}
                        onClick={() => setFormData({ ...formData, brand: brand.id, otherBrand: "" })}
                      >
                        {brand.label}
                      </SelectableButton>
                    ))}
                  </div>
                  {formData.brand === "otros" && (
                    <div className="mt-4 animate-in fade-in duration-200">
                      <Input
                        placeholder="Especifica la marca"
                        value={formData.otherBrand}
                        onChange={(e) => setFormData({ ...formData, otherBrand: e.target.value })}
                        className="h-14 text-base rounded-xl border-[#E2E8F0] bg-[#F5F7FA] focus:border-[#FF6A00] focus:ring-[#FF6A00]/20"
                        autoComplete="off"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Step 3 - Model */}
              {step === 3 && (
                <div className="flex-1 animate-in fade-in slide-in-from-right-4 duration-300">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2540] mb-3 text-center">
                    ¿Qué modelo buscas?
                  </h2>
                  <p className="text-[#5A6A7A] text-sm text-center mb-8">
                    Si no tienes claro el modelo, escribe lo que más o menos buscas.
                  </p>
                  <Input
                    placeholder="Ej: Serie 3, A4, Golf GTI..."
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    className="h-14 text-base rounded-xl border-[#E2E8F0] bg-[#F5F7FA] focus:border-[#FF6A00] focus:ring-[#FF6A00]/20"
                    autoComplete="off"
                  />
                </div>
              )}

              {/* Step 4 - Budget */}
              {step === 4 && (
                <div className="flex-1 animate-in fade-in slide-in-from-right-4 duration-300">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2540] mb-8 text-center">
                    ¿Cuál es tu presupuesto?
                  </h2>
                  <div className="space-y-3">
                    {BUDGETS.map((budget) => (
                      <SelectableButton
                        key={budget.id}
                        selected={formData.budget === budget.id}
                        onClick={() => setFormData({ ...formData, budget: budget.id })}
                      >
                        {budget.label}
                      </SelectableButton>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5 - Qué pasa ahora */}
              {step === 5 && (
                <div className="flex-1 animate-in fade-in slide-in-from-right-4 duration-300">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2540] mb-6 text-center">
                    ¿Qué pasa ahora?
                  </h2>
                  <div className="space-y-4">
                    {[
                      { n: "1", title: "Revisamos tu solicitud", desc: "En las próximas horas verificamos que los datos están completos." },
                      { n: "2", title: "Un importador te llama", desc: "En menos de 24h recibes una llamada con opciones reales para tu perfil." },
                      { n: "3", title: "Ellos gestionan todo", desc: "Búsqueda, negociación, transporte, ITV y matriculación hasta tu puerta." },
                    ].map((item) => (
                      <div key={item.n} className="flex items-start gap-4 p-4 bg-[#F5F7FA] rounded-xl">
                        <div className="w-8 h-8 rounded-full bg-[#FF6A00] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {item.n}
                        </div>
                        <div>
                          <div className="font-semibold text-[#0A2540] text-sm">{item.title}</div>
                          <div className="text-[#5A6A7A] text-sm mt-0.5">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 6 - Confirmación */}
              {step === 6 && (
                <div className="flex-1 animate-in fade-in slide-in-from-right-4 duration-300">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2540] mb-3 text-center">
                    Confirma tu solicitud
                  </h2>
                  <p className="text-[#5A6A7A] text-sm text-center mb-6">
                    Revisa que todo está correcto antes de enviar.
                  </p>
                  <div className="bg-[#F5F7FA] rounded-xl p-5 space-y-3 mb-4">
                    {[
                      { label: "Nombre", value: formData.nombre },
                      { label: "Teléfono", value: formData.telefono },
                      { label: "Marca", value: BRANDS.find(b => b.id === formData.brand)?.label || formData.otherBrand || "—" },
                      { label: "Modelo", value: formData.model || "No especificado" },
                      { label: "Presupuesto", value: BUDGETS.find(b => b.id === formData.budget)?.label || "—" },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between text-sm">
                        <span className="text-[#5A6A7A]">{row.label}</span>
                        <span className="font-medium text-[#0A2540]">{row.value}</span>
                      </div>
                    ))}
                  </div>
                  {submitError && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm text-center mb-3">
                      {submitError}
                    </div>
                  )}
                  <p className="text-xs text-[#5A6A7A] text-center">
                    Al enviar aceptas que un importador te contacte con opciones para tu búsqueda.
                  </p>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-[#E2E8F0]">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={isSubmitting}
                    className="h-14 px-6 rounded-xl border-[#E2E8F0] text-[#0A2540] hover:bg-[#F5F7FA] font-medium"
                  >
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    Atrás
                  </Button>
                )}
                {step === TOTAL_STEPS ? (
                  <button
                    type="button"
                    onClick={handleButtonClick}
                    disabled={!isStep6Valid || isSubmitting}
                    aria-disabled={!isStep6Valid || isSubmitting}
                    className="flex-1 h-14 rounded-xl bg-[#FF6A00] hover:bg-[#e55f00] active:bg-[#d45500] text-white font-bold text-lg shadow-[0_8px_30px_rgba(255,106,0,0.35)] hover:shadow-[0_12px_40px_rgba(255,106,0,0.45)] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none transition-all duration-200 flex items-center justify-center select-none"
                    style={{ WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-3">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      "Enviar solicitud"
                    )}
                  </button>
                ) : (
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={!canContinue()}
                    className="flex-1 h-14 rounded-xl bg-[#FF6A00] hover:bg-[#e55f00] text-white font-bold text-lg shadow-[0_8px_30px_rgba(255,106,0,0.35)] hover:shadow-[0_12px_40px_rgba(255,106,0,0.45)] disabled:opacity-50 disabled:shadow-none transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Continuar
                      <ChevronRight className="w-5 h-5" />
                    </span>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
