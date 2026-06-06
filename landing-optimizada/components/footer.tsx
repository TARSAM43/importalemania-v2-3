export function Footer() {
  return (
    <footer className="bg-[#F5F7FA] py-12 sm:py-16 md:py-20 pb-24 sm:pb-16 md:pb-20">
      <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-md">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0A2540] mb-4">
              Import<span className="text-[#FF6A00]">Alemania</span>
            </h3>
            <p className="text-[#5A6A7A] leading-relaxed text-sm sm:text-base">
              Captación de solicitudes para personas que quieren importar coches desde Alemania.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-5 text-[#0A2540]">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#5A6A7A] hover:text-[#FF6A00] transition-colors text-sm sm:text-base">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-[#5A6A7A] hover:text-[#FF6A00] transition-colors text-sm sm:text-base">
                  Aviso legal
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-10 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#5A6A7A] text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} ImportAlemania. Todos los derechos reservados.</p>
          <a href="mailto:info@importalemania.com" className="hover:text-[#FF6A00] transition-colors">
            info@importalemania.com
          </a>
        </div>
      </div>
    </footer>
  );
}
