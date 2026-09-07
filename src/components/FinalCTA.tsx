"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { restaurantInfo } from "@/lib/data";

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-dark overflow-hidden">
      {/* Logo como marca d'água de fundo (suave e centralizada) */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/LOGO-hd.png"
          alt=""
          className="w-[600px] md:w-[800px] opacity-[0.12] object-contain"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>

      {/* Glows sutis em tons da logo (creme/dourado, sem vermelho) */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cream/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-section relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 200,
            }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent mb-8"
            style={{ boxShadow: "0 0 40px rgba(244, 162, 97, 0.25)" }}
          >
            <Flame size={40} className="text-dark" />
          </motion.div>

          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.95] text-cream mb-6 text-balance">
            A fome bateu? <br />
            Então pede um{" "}
            <span className="text-gradient-malvadao">Malvadão.</span>
          </h2>

          <p className="text-lg md:text-xl text-cream/75 max-w-xl mx-auto mb-10 text-balance">
            Peça agora pelo nosso app, retire no drive-thru ou venha curtir o
            point. Você decide.
          </p>

          <motion.a
            href={restaurantInfo.menuUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-12 py-5 font-display text-xl md:text-2xl uppercase tracking-wider text-dark transition-all hover:bg-cream"
            style={{ boxShadow: "0 0 40px rgba(244, 162, 97, 0.3)" }}
          >
            <Flame size={24} />
            Pedir meu Malvadão
          </motion.a>

          <p className="mt-6 text-sm text-cream/50 uppercase tracking-widest">
            Delivery · Drive-thru · Salão
          </p>
        </motion.div>
      </div>
    </section>
  );
}
