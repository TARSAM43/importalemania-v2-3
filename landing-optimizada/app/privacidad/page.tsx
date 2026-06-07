import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | ImportAlemania",
  description: "Política de privacidad de ImportAlemania. Consulta cómo tratamos tus datos personales conforme al RGPD y la LOPDGDD.",
};

export default function PoliticaPrivacidad() {
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
            Política de Privacidad
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
              1. Responsable del tratamiento
            </h2>
            <p>
              El responsable del tratamiento de los datos personales recogidos a través de este sitio web es:
            </p>
            <div className="bg-[#F5F7FA] rounded-xl p-6 mt-4 space-y-2 text-sm">
              <div className="flex gap-3">
                <span className="font-semibold text-[#0A2540] w-32 shrink-0">Nombre comercial:</span>
                <span>ImportAlemania</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-[#0A2540] w-32 shrink-0">Dominio:</span>
                <span>importalemania.com</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-[#0A2540] w-32 shrink-0">Correo de contacto:</span>
                <a
                  href="mailto:info@importalemania.com"
                  className="text-[#FF6A00] hover:underline"
                >
                  info@importalemania.com
                </a>
              </div>
            </div>
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#0A2540] mb-4">
              2. Datos personales que recopilamos
            </h2>
            <p>
              Cuando rellenas el formulario de solicitud de este sitio web, recopilamos los siguientes datos
              personales con el único propósito indicado:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#0A2540] text-white">
                    <th className="text-left p-3 rounded-tl-lg">Dato</th>
                    <th className="text-left p-3">Categoría</th>
                    <th className="text-left p-3 rounded-tr-lg">Finalidad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  {[
                    ["Nombre", "Identificativo", "Personalizar la comunicación con el importador"],
                    ["Teléfono", "Contacto", "Que un importador verificado te contacte en menos de 24h"],
                    ["Marca del vehículo", "Preferencia", "Seleccionar importadores especializados en esa marca"],
                    ["Modelo del vehículo", "Preferencia", "Afinar la búsqueda del vehículo idóneo"],
                    ["Presupuesto", "Preferencia", "Filtrar opciones ajustadas a tu capacidad de compra"],
                  ].map(([dato, cat, fin]) => (
                    <tr key={dato} className="bg-white even:bg-[#F5F7FA]">
                      <td className="p-3 font-medium text-[#0A2540]">{dato}</td>
                      <td className="p-3 text-[#5A6A7A]">{cat}</td>
                      <td className="p-3 text-[#5A6A7A]">{fin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-[#5A6A7A]">
              No recogemos datos especialmente sensibles (salud, ideología, raza, etc.) ni datos de menores
              de 14 años. Si eres menor de esa edad, no utilices este formulario.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#0A2540] mb-4">
              3. Base jurídica del tratamiento
            </h2>
            <p>
              El tratamiento de tus datos se basa en tu <strong>consentimiento explícito</strong>, que otorgas
              al marcar la casilla de aceptación y enviar el formulario (artículo 6.1.a del RGPD). Puedes
              retirar tu consentimiento en cualquier momento escribiendo a{" "}
              <a href="mailto:info@importalemania.com" className="text-[#FF6A00] hover:underline">
                info@importalemania.com
              </a>
              . La retirada del consentimiento no afecta a la licitud del tratamiento previo.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#0A2540] mb-4">
              4. Finalidad del tratamiento
            </h2>
            <p>Tratamos tus datos exclusivamente para:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-[#374151]">
              <li>
                <strong>Gestionar tu solicitud de importación:</strong> poner en contacto tu perfil de
                búsqueda con importadores verificados que puedan ofrecerte opciones adecuadas.
              </li>
              <li>
                <strong>Comunicaciones derivadas de la solicitud:</strong> los importadores pueden contactarte
                por teléfono para presentarte vehículos que se ajusten a tu búsqueda.
              </li>
            </ul>
            <p className="mt-4">
              No utilizaremos tus datos para envíos de publicidad no solicitada ni los cederemos a terceros
              con fines comerciales propios, salvo las comunicaciones necesarias descritas en el apartado 5.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#0A2540] mb-4">
              5. Destinatarios de los datos (encargados del tratamiento)
            </h2>
            <p>
              Para prestar el servicio, los datos son procesados por los siguientes terceros bajo contrato
              de encargado del tratamiento o garantías equivalentes:
            </p>
            <div className="mt-4 space-y-4">
              {[
                {
                  name: "Make.com (Celonis SE)",
                  role: "Automatización de flujos de datos",
                  desc: "Recibe los datos del formulario a través de un webhook seguro (HTTPS) y los enruta a nuestra hoja de cálculo de leads. Los servidores de procesamiento se encuentran en la Unión Europea (región eu1).",
                  link: "https://www.make.com/en/privacy-notice",
                },
                {
                  name: "Google LLC (Google Sheets)",
                  role: "Almacenamiento de solicitudes",
                  desc: "Las solicitudes se almacenan en una hoja de cálculo privada de Google Sheets, accesible solo por el equipo de ImportAlemania. Google LLC está adherida al marco EU-US Data Privacy Framework.",
                  link: "https://policies.google.com/privacy",
                },
                {
                  name: "Netlify, Inc.",
                  role: "Alojamiento del sitio web",
                  desc: "El sitio web está alojado en Netlify. Netlify puede registrar datos técnicos de acceso (IP, User-Agent) con fines de seguridad e infraestructura. Netlify está adherida al marco EU-US Data Privacy Framework.",
                  link: "https://www.netlify.com/privacy/",
                },
                {
                  name: "Vercel Inc. (Vercel Analytics)",
                  role: "Estadísticas de uso anónimas",
                  desc: "Vercel Analytics recoge métricas de rendimiento y navegación de forma anonimizada (sin cookies y sin identificar al usuario). No se comparte ningún dato personal identificable.",
                  link: "https://vercel.com/legal/privacy-policy",
                },
              ].map((item) => (
                <div key={item.name} className="border border-[#E2E8F0] rounded-xl p-5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-semibold text-[#0A2540]">{item.name}</h3>
                    <span className="text-xs bg-[#FF6A00]/10 text-[#FF6A00] font-medium px-2 py-1 rounded-full shrink-0">
                      {item.role}
                    </span>
                  </div>
                  <p className="text-sm text-[#5A6A7A]">{item.desc}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#FF6A00] hover:underline mt-2 inline-block"
                  >
                    Ver política de privacidad →
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-[#5A6A7A]">
              No vendemos, alquilamos ni cedemos tus datos a terceros distintos de los indicados.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#0A2540] mb-4">
              6. Transferencias internacionales de datos
            </h2>
            <p>
              Google LLC y Netlify, Inc. pueden almacenar o procesar datos fuera del Espacio Económico
              Europeo (EEE). Ambas empresas están certificadas bajo el{" "}
              <strong>EU-US Data Privacy Framework</strong>, mecanismo de transferencia reconocido por la
              Comisión Europea como adecuado (Decisión de adecuación 2023/1795), que garantiza un nivel
              de protección equivalente al europeo.
            </p>
            <p className="mt-3">
              Make.com procesa los datos en servidores de la UE (región eu1), por lo que no existe
              transferencia internacional en su caso.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#0A2540] mb-4">
              7. Plazo de conservación
            </h2>
            <p>
              Conservamos tus datos durante el tiempo necesario para gestionar tu solicitud y el periodo
              mínimo legal exigible. En la práctica:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-[#374151]">
              <li>
                <strong>Solicitudes activas:</strong> hasta que el proceso de búsqueda y contacto con
                importadores concluya o el usuario solicite la supresión de sus datos.
              </li>
              <li>
                <strong>Conservación mínima legal:</strong> 1 año desde la recogida del consentimiento,
                de conformidad con la LOPDGDD.
              </li>
            </ul>
            <p className="mt-4">
              Transcurridos estos plazos, los datos serán eliminados de forma segura o anonimizados con
              fines estadísticos.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#0A2540] mb-4">
              8. Tus derechos
            </h2>
            <p>
              De acuerdo con el RGPD (artículos 15–22) y la LOPDGDD, tienes los siguientes derechos sobre
              tus datos personales:
            </p>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              {[
                { derecho: "Acceso", desc: "Conocer qué datos tratamos sobre ti." },
                { derecho: "Rectificación", desc: "Corregir datos inexactos o incompletos." },
                { derecho: "Supresión", desc: "Solicitar que eliminemos tus datos (\"derecho al olvido\")." },
                { derecho: "Limitación", desc: "Restringir el tratamiento en determinadas circunstancias." },
                { derecho: "Portabilidad", desc: "Recibir tus datos en formato estructurado y legible." },
                { derecho: "Oposición", desc: "Oponerte al tratamiento de tus datos en ciertos casos." },
              ].map((item) => (
                <div key={item.derecho} className="bg-[#F5F7FA] rounded-xl p-4">
                  <div className="font-semibold text-[#0A2540] text-sm mb-1">
                    Derecho de {item.derecho}
                  </div>
                  <div className="text-[#5A6A7A] text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
            <p className="mt-5">
              Para ejercer cualquiera de estos derechos, escríbenos a{" "}
              <a href="mailto:info@importalemania.com" className="text-[#FF6A00] hover:underline">
                info@importalemania.com
              </a>{" "}
              indicando tu nombre, el derecho que deseas ejercer y aportando copia de tu DNI u otro
              documento identificativo. Responderemos en el plazo máximo de{" "}
              <strong>un mes</strong> (prorrogable a tres en casos complejos).
            </p>
            <p className="mt-4">
              Si consideras que el tratamiento de tus datos no es conforme a la normativa, puedes
              presentar una reclamación ante la{" "}
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF6A00] hover:underline"
              >
                Agencia Española de Protección de Datos (AEPD)
              </a>
              , la autoridad de control competente en España.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#0A2540] mb-4">
              9. Cookies y tecnologías de rastreo
            </h2>
            <p>
              Este sitio web <strong>no utiliza cookies propias</strong> ni herramientas de rastreo
              invasivas. Vercel Analytics recoge únicamente métricas de rendimiento anonimizadas (tiempo
              de carga, tasa de rebote, páginas vistas) sin identificar al visitante ni utilizar cookies.
            </p>
            <p className="mt-3">
              Si en el futuro se implementan cookies de terceros, actualizaremos esta política y mostraremos
              el correspondiente aviso de cookies antes de su uso.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#0A2540] mb-4">
              10. Seguridad de los datos
            </h2>
            <p>
              Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos frente al
              acceso no autorizado, pérdida, alteración o divulgación, entre ellas:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-[#374151]">
              <li>Transmisión cifrada mediante <strong>HTTPS/TLS</strong> en todo el sitio.</li>
              <li>Acceso restringido a las hojas de cálculo solo a personal autorizado de ImportAlemania.</li>
              <li>Uso de webhooks seguros (HTTPS) para el envío de datos a Make.com.</li>
              <li>Alojamiento en infraestructura con certificaciones de seguridad reconocidas (Netlify).</li>
            </ul>
          </section>

          {/* 11 */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#0A2540] mb-4">
              11. Modificaciones de esta política
            </h2>
            <p>
              ImportAlemania se reserva el derecho de actualizar esta Política de Privacidad en cualquier
              momento para adaptarla a cambios legislativos, jurisprudenciales o de negocio. La fecha de
              la última actualización aparece al comienzo del documento. Te recomendamos revisarla
              periódicamente.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#0A2540] mb-4">
              12. Normativa aplicable
            </h2>
            <p>
              Esta Política de Privacidad se rige por:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-[#374151]">
              <li>
                <strong>Reglamento (UE) 2016/679</strong> del Parlamento Europeo y del Consejo, de
                27 de abril de 2016 (RGPD).
              </li>
              <li>
                <strong>Ley Orgánica 3/2018</strong>, de 5 de diciembre, de Protección de Datos
                Personales y garantía de los derechos digitales (LOPDGDD).
              </li>
            </ul>
          </section>

          {/* CTA */}
          <div className="border-t border-[#E2E8F0] pt-10">
            <p className="text-sm text-[#5A6A7A]">
              ¿Tienes alguna pregunta sobre esta política?{" "}
              <a href="mailto:info@importalemania.com" className="text-[#FF6A00] hover:underline font-medium">
                Escríbenos a info@importalemania.com
              </a>
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-[#FF6A00] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#e55f00] transition-colors text-sm"
              >
                ← Volver a la web
              </Link>
              <Link
                href="/aviso-legal"
                className="inline-flex items-center gap-2 border border-[#E2E8F0] text-[#0A2540] font-semibold px-6 py-3 rounded-xl hover:bg-[#F5F7FA] transition-colors text-sm"
              >
                Ver aviso legal →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
