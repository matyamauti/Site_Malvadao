"use client";

import { motion } from "framer-motion";
import { Flame, Award, Users, PartyPopper } from "lucide-react";

const stats = [
  { icon: Award, value: "4.9", label: "Avaliação Google" },
  { icon: Users, value: "+10mil", label: "Pedidos em 3 anos" },
  { icon: Flame, value: "100%", label: "Costela Bovina" },
];

export function About() {
  return (
    <section className="relative py-24 md:py-32 bg-dark overflow-hidden">
      {/* Padrão decorativo */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-section grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Sobre nós
          </p>
          <h2 className="section-title mb-6 text-balance">
            Tradição artesanal, <br />
            <span className="text-gradient-malvadao">atitude malvada.</span>
          </h2>

          <div className="space-y-4 text-cream/75 text-lg leading-relaxed">
            <p>
              O <strong className="text-cream">Malvadão</strong> nasceu em
              Praia Grande com uma missão simples: fazer o melhor hambúrguer
              artesanal da região, sem enrolação.
            </p>
            <p>
              Trabalhamos com <strong className="text-cream">100% costela bovina</strong>,
              ingredientes selecionados e o famoso pão brioche/australiano que
              virou marca registrada da casa. Cada lanche é montado na hora, com
              aquele capricho que você sente na primeira mordida.
            </p>
            <p>
              Aqui o atendimento é próximo, o ambiente é descolado e o sabor é
              de verdade. Seja no salão, no drive-thru ou no delivery — a
              experiência Malvadão é a mesma.
            </p>
          </div>
        </motion.div>

        {/* Stats / Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-dark-700 to-accent/10 border border-dark-600 p-8 md:p-12">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/30 rounded-full blur-[80px] -z-10" />

            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                    className="flex items-center gap-5 p-5 rounded-2xl bg-dark/40 backdrop-blur-sm border border-dark-600/50"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shrink-0">
                      <Icon size={26} className="text-white" />
                    </div>
                    <div>
                      <div className="font-display text-4xl text-cream leading-none">
                        {stat.value}
                      </div>
                      <div className="text-sm text-cream/60 uppercase tracking-wider mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
