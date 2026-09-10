"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Award, Users, ChevronDown } from "lucide-react";

const stats = [
  { icon: Award, value: "4.9", label: "Avaliação Google" },
  { icon: Users, value: "+10mil", label: "Pedidos em 3 anos" },
  { icon: Flame, value: "100%", label: "Costela Bovina" },
];

export function About() {
  const [expanded, setExpanded] = useState(false);

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
            Nossa <span className="text-gradient-malvadao">história</span> ❤️🍔
          </h2>

          <div className="space-y-4 text-cream/75 text-lg leading-relaxed">
            <p>
              Antes mesmo de existir a{" "}
              <strong className="text-cream">Malvadão Artesanal Burguer</strong>,
              já existia um sonho — e ele começou dentro de casa.
            </p>
            <p>
              A Simone, ou melhor, a nossa <strong className="text-cream">Sissi</strong>,
              sempre teve um talento especial para preparar lanches. Em meio à
              família, entre brincadeiras e refeições, surgiu aquela ideia que
              parecia apenas uma piada: &ldquo;E se a gente abrisse uma
              lanchonete?&rdquo;
            </p>
            <p>
              Até o nome já estava quase escolhido: &ldquo;Sissi Lanches&rdquo; ou
              &ldquo;Lanches Sissi&rdquo;, em uma brincadeira inspirada no famoso
              &ldquo;Carrara Táxi ou Táxi Carrara&rdquo;, do Agostinho Carrara, de
              A Grande Família. 😂
            </p>
            <p>
              Mas, para o <strong className="text-cream">Emerson</strong>, marido e
              sócio da Simone, aquilo foi deixando de ser apenas uma brincadeira. A
              vontade de ter uma hamburgueria foi crescendo, até que, no dia{" "}
              <strong className="text-cream">10 de julho de 2023</strong>, o sonho
              finalmente ganhou um endereço e um nome: nascia a{" "}
              <strong className="text-cream">Malvadão Artesanal Burguer</strong>.
            </p>

            {/* Continuação da história (Saiba mais) */}
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  id="historia-completa"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden space-y-4"
                >
                  <p>
                    No começo, alguns funcionários ajudavam a tocar a operação, mas
                    pouco a pouco a Malvadão foi se tornando aquilo que hoje é a sua
                    maior essência: <strong className="text-cream">uma empresa familiar</strong>.
                  </p>
                  <p>
                    Primeiro veio o <strong className="text-cream">Everton</strong>, filho
                    do casal, assumindo a chapa. Logo depois, a{" "}
                    <strong className="text-cream">Yasmin</strong> chegou para cuidar do
                    atendimento. Quando o Everton deixou a chapa, a Simone assumiu — e
                    nunca mais saiu de lá. ❤️
                  </p>
                  <p>
                    Depois vieram a <strong className="text-cream">Mariana</strong>, nora
                    da família, no atendimento, e a{" "}
                    <strong className="text-cream">Marli</strong>, mãe da Simone e
                    carinhosamente conhecida como Noninha, dando aquele suporte tão
                    importante nos bastidores.
                  </p>
                  <p>
                    E foi assim, trabalhando juntos, que a Malvadão foi crescendo. Entre
                    uma chapa quente, um pedido saindo, uma batatinha com aquele tempero
                    único e nossos molhos e lanches feitos com muito carinho, fomos
                    conquistando algo que para nós vale ainda mais do que qualquer
                    número: a confiança e o carinho dos nossos clientes.
                  </p>
                  <p>
                    Hoje, já são mais de <strong className="text-cream">10 mil pedidos</strong>{" "}
                    realizados e mais de{" "}
                    <strong className="text-cream">200 avaliações positivas</strong> no
                    Google. São milhares de pessoas que passaram pelo nosso cantinho e
                    fizeram parte dessa história.
                  </p>
                  <p>
                    No fim das contas, a Malvadão é a realização de um sonho que começou
                    com o Emerson, ganhou vida pelas mãos da Simone e hoje é construído
                    diariamente por toda a família.
                  </p>
                  <p className="text-cream italic">
                    Somos uma família fazendo o que ama, para servir pessoas que se
                    tornaram parte da nossa história.
                  </p>
                  <p>
                    E se você chegou até aqui, seja muito bem-vindo ao nosso cantinho.
                    <br />
                    <strong className="text-cream">
                      A casa é nossa, mas a Malvadão também é um pouquinho sua. ❤️🍔
                    </strong>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            aria-controls="historia-completa"
            className="btn-secondary mt-8"
          >
            {expanded ? "Mostrar menos" : "Saiba mais"}
            <ChevronDown
              size={20}
              className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
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
