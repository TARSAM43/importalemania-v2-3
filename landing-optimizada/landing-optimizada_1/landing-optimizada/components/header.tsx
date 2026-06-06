"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Beneficios", href: "#ventajas" },
  { label: "Cómo funciona", href: "#como-funciona" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-5"
        }`}
      >
        <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <span className={`font-serif text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-[#0A2540]" : "text-white"
              }`}>
                Import<span className="text-[#FF6A00]">Alemania</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-base font-medium transition-all duration-300 hover:text-[#FF6A00] relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6A00] after:transition-all after:duration-300 hover:after:w-full ${
                    isScrolled ? "text-[#5A6A7A]" : "text-white/90"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => handleNavClick("#contacto")}
                className="bg-[#FF6A00] hover:bg-[#e55f00] text-white font-semibold px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                Encontrar mi coche
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled 
                  ? "text-[#0A2540]" 
                  : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-white md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <div className="pt-28 px-6 pb-8 flex flex-col h-full">
          <nav className="flex flex-col gap-2 flex-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-xl font-medium text-[#0A2540] py-4 border-b border-[#E2E8F0] text-left hover:text-[#FF6A00] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <Button
            onClick={() => handleNavClick("#contacto")}
            size="lg"
            className="w-full bg-[#FF6A00] hover:bg-[#e55f00] text-white font-semibold h-14 text-lg rounded-xl shadow-lg"
          >
            Encontrar mi coche
          </Button>
        </div>
      </div>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/95 backdrop-blur-md border-t border-[#E2E8F0] md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <Button
          onClick={() => handleNavClick("#contacto")}
          size="lg"
          className="w-full bg-[#FF6A00] hover:bg-[#e55f00] text-white font-semibold h-14 text-base rounded-xl shadow-lg"
        >
          Encontrar mi coche
        </Button>
      </div>
    </>
  );
}
