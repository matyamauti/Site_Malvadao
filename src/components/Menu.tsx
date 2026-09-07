"use client";

import { motion } from "framer-motion";
import { ArrowRight, ImageOff } from "lucide-react";
import { menuCategories, restaurantInfo, highlightBurgers, specialBurgers } from "@/lib/data";
import ArcFlowCarousel, { type SmoothSliderItem } from "@/components/ui/arc-flow-carousel";

// Mapeia os burgers em destaque para o formato aceito pelo carrossel.
const carouselItems: SmoothSliderItem[] = highlightBurgers.map((burger) => ({
  src: burger.image,
  alt: burger.name,
  title: burger.title,
  description: burger.description,
  label: burger.name,
}));

type MenuItem = (typeof menuCategories)[number]["items"][number] & { link?: string };
type SpecialBurger = (typeof specialBurgers)[number] & { link?: string };

function hasImage(item: MenuItem): item is MenuItem & { image: string } {
  return "image" in item && typeof (item as { image?: unknown }).image === "string";
}

export function Menu() {
  return (
    <>
      {/* ===== SEÇÃO DESTAQUES (CARROSSEL) ===== */}
      <section
        id="destaques"
        className="relative bg-dark overflow-hidden"
        aria-label="Hambúrgueres em destaque"
      >
        {/* Degradê no topo: melhora o contraste do título sobre os cards */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-72 md:h-80"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.75) 40%, rgba(10,10,10,0) 100%)",
          }}
        />

        {/* Cabeçalho sobreposto ao carrossel */}
        <div className="absolute top-0 left-0 right-0 z-20 pt-28 md:pt-32 pb-6">
          <div className="container-section text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-3"
            >
              Em destaque
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="section-title mb-3 text-balance"
            >
              Os <span className="text-gradient-malvadao">malvados</span> favoritos.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-cream/80 max-w-xl mx-auto text-sm md:text-base"
            >
              Arraste pra navegar • 6 burgers que são a cara do Malvadão.
            </motion.p>
          </div>
        </div>

        {/* O carrossel ocupa a seção inteira (fullscreen vertical) */}
        <div className="relative">
          <ArcFlowCarousel
            items={carouselItems}
            radiusRatio={0.85}
            cardRatio={0.15}
            minCardWidth={130}
            maxCardWidth={220}
            cardAspect={0.62}
            overlap={-0.05}
            arcOffset={0.65}
            smoothing={5.5}
            dragSensitivity={1.2}
            momentum={1}
            snap={false}
            wheelControl="horizontal"
            autoRotateSpeed={0.1}
            pauseOnHover
            surfaceColor="#0A0A0A"
          />
        </div>
      </section>

      {/* ===== SEÇÃO CARDÁPIO COMPLETO ===== */}
      <section
        id="cardapio"
        className="relative py-24 md:py-32 bg-gradient-to-b from-dark via-dark-800/30 to-dark overflow-hidden"
      >
        <div className="container-section">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-accent uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Nosso cardápio
            </p>
            <h2 className="section-title mb-6 text-balance">
              Escolha seu <span className="text-gradient-malvadao">malvado</span> favorito.
            </h2>
            <p className="text-cream/70 max-w-2xl mx-auto">
              Blend artesanal, pão crocante e ingredientes selecionados. Cada
              mordida é uma experiência.
            </p>
          </motion.div>

          {/* ===== HAMBÚRGUERES ===== */}
          {menuCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <div className="flex items-end justify-between border-b border-dark-600 pb-4 mb-8">
                <div>
                  <h3 className="font-display text-3xl md:text-4xl uppercase tracking-wide text-cream">
                    {category.name}
                  </h3>
                  <p className="text-sm text-cream/60 mt-1">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
                {category.items.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.link || restaurantInfo.menuUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden rounded-2xl bg-dark-700/40 border border-dark-600/50 hover:border-primary/40 transition-all cursor-pointer block"
                    aria-label={`Ver ${item.name} no cardápio`}
                  >
                    {/* Imagem (se houver) ou placeholder */}
                    <div className="relative h-40 bg-gradient-to-br from-dark-600 to-dark-800 overflow-hidden">
                      {hasImage(item) ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={item.image}
                          alt={item.name}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-cream/20">
                          <ImageOff size={36} className="mb-2" />
                          <span className="font-display text-sm uppercase tracking-widest">
                            foto em breve
                          </span>
                        </div>
                      )}
                      {/* Overlay no hover */}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs uppercase tracking-wider font-semibold bg-primary px-3 py-1.5 rounded-full text-white">
                          Pedir →
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="font-display text-xl uppercase tracking-wide text-cream leading-tight group-hover:text-primary transition-colors">
                          {item.name}
                        </h4>
                        <span className="font-mono text-accent font-semibold whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm text-cream/65 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}

          {/* ===== BURGUERS ESPECIAIS ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-end justify-between border-b border-dark-600 pb-4 mb-8">
              <div>
                <h3 className="font-display text-3xl md:text-4xl uppercase tracking-wide text-cream">
                  Burguers Especiais
                </h3>
                <p className="text-sm text-cream/60 mt-1">
                  Para os dias que merecem algo a mais
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
              {(specialBurgers as SpecialBurger[]).map((item, i) => (
                <motion.a
                  key={item.slug}
                  href={item.link || restaurantInfo.menuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-2xl bg-dark-700/40 border border-dark-600/50 hover:border-primary/40 transition-all cursor-pointer block"
                  aria-label={`Ver ${item.name} no cardápio`}
                >
                  {/* Imagem (se houver) ou placeholder */}
                  <div className="relative h-40 bg-gradient-to-br from-dark-600 to-dark-800 overflow-hidden">
                    {item.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-cream/20">
                        <ImageOff size={36} className="mb-2" />
                        <span className="font-display text-sm uppercase tracking-widest">
                          foto em breve
                        </span>
                      </div>
                    )}
                    {/* Badge Especial */}
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-accent/90 backdrop-blur-sm text-[0.65rem] uppercase tracking-wider font-bold text-dark">
                      ★ Especial
                    </div>
                    {/* Overlay no hover */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs uppercase tracking-wider font-semibold bg-primary px-3 py-1.5 rounded-full text-white">
                        Pedir →
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="font-display text-xl uppercase tracking-wide text-cream leading-tight group-hover:text-primary transition-colors">
                        {item.name}
                      </h4>
                      <span className="font-mono text-accent font-semibold whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm text-cream/65 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ===== CARDÁPIO COMPLETO (VÍDEO) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-dark-600/50"
          >
            {/* Vídeo de fundo */}
            <video
              src="/cardapioCompleto.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
              aria-label="Cardápio completo do Malvadão"
            />

            {/* Overlay escuro */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark/85 via-dark/70 to-dark/85 pointer-events-none" />

            {/* Decorativos sutis */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/15 rounded-full blur-[80px] pointer-events-none" />

            {/* Conteúdo sobreposto */}
            <div className="relative z-10 p-10 md:p-16 text-center min-h-[420px] flex flex-col items-center justify-center">
              <p className="text-accent uppercase tracking-[0.4em] text-xs md:text-sm font-semibold mb-5">
                Cardápio Completo
              </p>

              <h3 className="font-display text-3xl md:text-5xl text-cream mb-5 leading-tight max-w-3xl">
                Onde cada mordida é uma <span className="text-gradient-malvadao">experiência</span> à parte.
              </h3>

              <p className="text-cream/80 max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
                Descubra combinações que vão além do pão e do blend. Cada item do nosso cardápio foi pensado para transformar uma refeição em memória.
              </p>

              <a
                href={restaurantInfo.menuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-10 py-4 group"
              >
                Explorar cardápio completo
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <p className="mt-6 text-xs text-cream/50 uppercase tracking-widest">
                Pedidos via Anota Aí
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
