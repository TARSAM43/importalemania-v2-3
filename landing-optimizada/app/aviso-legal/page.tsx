import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | ImportAlemania",
  description: "Aviso legal de ImportAlemania. Condiciones de uso del sitio web importalemania.com.",
};

export default function AvisoLegal() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#0A2540] py-16 sm:py-20">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            ← Volver a la web
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Aviso Legal
          </h1>
          <p className="text-white/60 mt-4 text-sm">
            Última actualización: junio de 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[800px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
        <div className="prose prose-slate max-w-none text-[#374151] leading-relaxed space-y-10">

          {/* 1 */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#0A2540] mb-4">
              1. Identificación del titular
            </h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
              Sociedad de la Información y del Comercio Electrónico (LSSICE), se informa al usuario
              de los datos del titular del sitio web:
            </p>
            <div className="bg-[#F5F7FA] rounded-xl p-6 mt-4 space-y-2 text-sm">
              <div className="flex gap-3">
                <span className="font-semibold text-[#0A2540] w-36 shrink-0">Nombre comercial:</span>
                <span>ImportAlemania</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-[#0A2540] w-36 shrink-0">Sitio web:</span>
                <a
                  href="https://importalemania.com"
                  className="text-[#FF6A00] hover:underline"
                >
                  importalemania.com
                </a>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-[#0A2540] w-36 shrink-0">Correo electrónico:</span>
                <a
                  href="mailto:info@importalemania.com"
                  className="text-[#FF6A00] hover:underline"
                >
                  info@importalemania.com
                </a>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-[#0A2540] w-36 shrink-0">País de actividad:</span>
                <span>España</span>
              </div>
            </div>
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#0A2540] mb-4">
              2. Objeto y actividad
            </h2>
            <p>
              ImportAlemania es una plataforma de captación de solicitudes que pone en contacto a personas
              interesadas en importar vehículos desde Alemania con importadores verificados y especializados.
            </p>
            <p className="mt-3">
              ImportAlemania <strong>no actúa como vendedor ni intermediario financiero</strong> del
              vehículo. Su función es exclusivamente la de conectar al potencial comprador con
              profesionales del sector de la importación, quienes gestionan directamente la operación
              de compraventa.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#0A2540] mb-4">
              3. Condiciones de uso
            </h2>
            <p>
              El acceso y uso de este sitio web implica la aceptación de las presentes condiciones. El
              usuario se compromete a:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-[#374151]">
              <li>
                Utilizar el sitio y sus formularios de forma lícita, sin fines fraudulentos, y
                aportando datos verídicos.
              </li>
              <li>
                No realizar acciones que puedan dañar, inutilizar, sobrecargar o deteriorar el sitio
                web o impedir su normal uso por otros usuarios.
              </li>
              <li>
                No introducir contenidos ilícitos, difamatorios o contrarios al orden público a través
                de los medios de comunicación del sitio.
              </li>
              <li>
                Ser mayor de 18 años para utilizar el formulario de solicitud.
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#0A2540] mb-4">
              4. Propiedad intelectual e industrial
            </h2>
            <p>
              Todos los contenidos del sitio web importalemania.com — incluyendo, sin limitarse a,
              textos, logotipos, imágenes, diseño gráfico, código fuente y estructura — son propiedad
              de ImportAlemania o de terceros que han autorizado su uso, y están protegidos por la
              legislación española e internacional sobre propiedad intelectual e industrial.
            </p>
            <p className="mt-3">
              Queda prohibida la reproducción, distribución, comunicación pública o transformación
              de cualquier contenido de este sitio sin el consentimiento previo y por escrito de
              ImportAlemania, salvo que dicha reproducción sea para uso privado o esté expresamente
              permitida por la ley.
            </p>
            <p className="mt-3">
              Las marcas comerciales de terceros mencionadas en este sitio (BMW, Audi, Mercedes-Benz,
              Volkswagen, Porsche, etc.) son propiedad de sus respectivos titulares. Su mención es
              meramente informativa y no implica ninguna relación comercial o acuerdo con dichas marcas.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#0A2540] mb-4">
              5. Exclusión de responsabilidad
            </h2>
            <h3 className="font-semibold text-[#0A2540] mt-5 mb-2">5.1 Exactitud de la información</h3>
            <p>
              ImportAlemania elabora el contenido de este sitio con la máxima diligencia, pero no
              garantiza la exactitud, exhaustividad o actualización de la información publicada. El
              contenido tiene carácter meramente informativo y no constituye asesoramiento legal,
              financiero ni técnico.
            </p>
            <h3 className="font-semibold text-[#0A2540] mt-5 mb-2">5.2 Disponibilidad del servicio</h3>
            <p>
              ImportAlemania no garantiza la disponibilidad ininterrumpida del sitio web y no será
              responsable por daños derivados de interrupciones, errores técnicos o accesos no
              autorizados ajenos a su control.
            </p>
            <h3 className="font-semibold text-[#0A2540] mt-5 mb-2">5.3 Actuaciones de terceros (importadores)</h3>
            <p>
              ImportAlemania conecta al usuario con importadores independientes. No asume ninguna
              responsabilidad por las actuaciones, negociaciones, compromisos o contratos celebrados
              entre el usuario y dichos importadores. Cualquier acuerdo de compraventa es responsabilidad
              exclusiva de las partes contratantes.
            </p>
            <h3 className="font-semibold text-[#0A2540] mt-5 mb-2">5.4 Enlaces externos</h3>
            <p>
              Este sitio puede contener enlaces a sitios web de terceros. ImportAlemania no controla
              ni es responsable del contenido, políticas de privacidad o prácticas de dichos sitios.
              El acceso a ellos es bajo la responsabilidad del usuario.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#0A2540] mb-4">
              6. Legislación aplicable y jurisdicción
            </h2>
            <p>
              Este aviso legal se rige por la normativa española vigente, en particular:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-[#374151]">
              <li>
                <strong>Ley 34/2002</strong>, de 11 de julio, de Servicios de la Sociedad de la
                Información y del Comercio Electrónico (LSSICE).
              </li>
              <li>
                <strong>Real Decreto Legislativo 1/2007</strong>, de 16 de noviembre, por el que se
                aprueba el texto refundido de la Ley General para la Defensa de los Consumidores y
                Usuarios.
              </li>
              <li>
                <strong>Reglamento (UE) 2016/679 (RGPD)</strong> y{" "}
                <strong>Ley Orgánica 3/2018 (LOPDGDD)</strong> en materia de protección de datos.
              </li>
            </ul>
            <p className="mt-4">
              Para cualquier controversia derivada del uso de este sitio web, las partes se someten
              a los juzgados y tribunales del domicilio del usuario o al fuero que resulte
              imperativo conforme a la legislación española de consumidores.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#0A2540] mb-4">
              7. Contacto
            </h2>
            <p>
              Para cualquier consulta relacionada con este aviso legal o el uso del sitio web, puedes
              contactarnos en:
            </p>
            <div className="mt-3">
              <a
                href="mailto:info@importalemania.com"
                className="text-[#FF6A00] hover:underline font-medium"
              >
                info@importalemania.com
              </a>
            </div>
          </section>

          {/* CTA */}
          <div className="border-t border-[#E2E8F0] pt-10">
            <div className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-[#FF6A00] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#e55f00] transition-colors text-sm"
              >
                ← Volver a la web
              </Link>
              <Link
                href="/privacidad"
                className="inline-flex items-center gap-2 border border-[#E2E8F0] text-[#0A2540] font-semibold px-6 py-3 rounded-xl hover:bg-[#F5F7FA] transition-colors text-sm"
              >
                Ver política de privacidad →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
