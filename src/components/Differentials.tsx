"use client";

import { motion } from "framer-motion";
import { Beef, Wheat, Utensils, HeartHandshake } from "lucide-react";
import { differentials } from "@/lib/data";

const iconMap = {
  Beef,
  Wheat,
  Utensils,
  HeartHandshake,
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function Differentials() {
  return (
    <section
      id="sobre"
      className="relative py-24 md:py-32 bg-dark overflow-hidden"
    >
      {/* Decorativo de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-accent/50" />

      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Nossos diferenciais
          </p>
          <h2 className="section-title text-balance">
            Por que somos <span className="text-gradient-malvadao">malvados</span> com sabor.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-2xl border border-dark-600/50 hover:border-accent/40 transition-all duration-500 cursor-pointer"
              >
                {/* Imagem de fundo com opacidade suave */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-55 transition-opacity duration-700"
                  style={{ backgroundImage: `url(${item.background})` }}
                />

                {/* Overlay escuro para legibilidade */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-br from-dark/85 via-dark/75 to-dark/85 group-hover:from-dark/75 group-hover:via-dark/65 group-hover:to-dark/75 transition-all duration-500"
                />

                {/* Borda com brilho no hover */}
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 1px 0 0 rgba(244, 162, 97, 0.2)",
                  }}
                />

                {/* Conteúdo */}
                <div className="relative z-10 p-6 h-full flex flex-col min-h-[300px]">
                  <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center mb-5 group-hover:bg-accent/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Icon size={28} className="text-accent" />
                  </div>

                  <h3 className="font-display text-[1.4rem] leading-[1.15] uppercase tracking-wide text-cream mb-3 min-h-[3.3rem]">
                    {item.title}
                  </h3>
                  <p className="text-cream/70 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Linha que se expande no hover */}
                  <div className="mt-auto pt-4">
                    <div className="h-px bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
