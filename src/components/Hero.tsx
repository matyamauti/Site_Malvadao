"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { restaurantInfo } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-dark overflow-hidden"
      aria-label="Hero"
    >
      {/* Glow decorativo de fundo */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/15 rounded-full blur-[120px] pointer-events-none" />

      <ContainerScroll
        titleComponent={
          <>
            {/* Badge de avaliação */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-700/80 backdrop-blur-sm border border-primary/30 mb-6"
            >
              <Star size={14} className="fill-primary text-primary" />
              <span className="text-xs md:text-sm font-semibold text-cream">
                {restaurantInfo.rating.score} ⭐ no Google · +
                {restaurantInfo.rating.count} avaliações
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-4xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.95] text-cream mb-6"
            >
              O lado{" "}
              <span className="text-gradient-malvadao">malvado</span>
              <br />
              da fome começa aqui.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base md:text-xl text-cream/70 max-w-2xl mx-auto mb-10 text-balance"
            >
              {restaurantInfo.shortDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a href="#destaques" className="btn-primary">
                Ver Cardápio
              </a>
              <a
                href={restaurantInfo.menuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Pedir Agora
              </a>
            </motion.div>
          </>
        }
      >
        {/* Vídeo como destaque principal dentro do Container 3D */}
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-dark-800">
          <video
            src="/videoSite.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
            aria-label="Vídeo de hambúrgueres artesanais do Malvadão"
          />

          {/* Sombra de leitura sutil sobre o vídeo */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/30 pointer-events-none" />
        </div>
      </ContainerScroll>
    </section>
  );
}
