"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { restaurantInfo } from "@/lib/data";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#destaques", label: "Destaques" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Localização" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md shadow-lg shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-section flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-3 group"
          aria-label="Malvadão Artesanal Burguer - Início"
        >
          <div className="relative">
            {/* Glow vermelho atrás da logo para destacar do fundo escuro */}
            <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-110" />
            <img
              src="/LOGO-hd.png"
              alt="Logo Malvadão Artesanal Burguer"
              width={72}
              height={72}
              className="h-16 w-16 md:h-20 md:w-20 object-contain brightness-0 invert group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <p className="font-display text-xl md:text-2xl leading-none text-cream tracking-wider group-hover:text-accent transition-colors">
              MALVADÃO
            </p>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-accent mt-1 font-semibold">
              Artesanal Burguer
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/80 hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <a
          href={restaurantInfo.menuUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex btn-primary text-sm px-6 py-2.5"
        >
          Pedir agora
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-cream hover:text-primary transition-colors"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-dark/98 backdrop-blur-md border-t border-dark-600 overflow-hidden"
          >
            <div className="container-section py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-lg font-medium text-cream/90 hover:text-primary py-2 border-b border-dark-600 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={restaurantInfo.menuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 w-full justify-center"
              >
                Pedir agora
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
