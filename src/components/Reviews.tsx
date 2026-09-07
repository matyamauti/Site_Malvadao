"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviews, restaurantInfo } from "@/lib/data";

export function Reviews() {
  return (
    <section
      id="avaliacoes"
      className="relative py-24 md:py-32 bg-gradient-to-b from-dark to-dark-800/40 overflow-hidden"
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
            O que dizem por aí
          </p>
          <h2 className="section-title mb-6 text-balance">
            Aprovado pelos <span className="text-gradient-malvadao">malvados</span> de verdade.
          </h2>

          {/* Rating badge grande */}
          <div className="inline-flex flex-col items-center gap-2 px-8 py-4 rounded-2xl bg-dark-700/40 border border-primary/30 mt-6">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-accent text-accent"
                />
              ))}
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-4xl text-cream">
                {restaurantInfo.rating.score}
              </span>
              <span className="text-cream/60">/ 5</span>
            </div>
            <p className="text-sm text-cream/60">
              {restaurantInfo.rating.count} avaliações no Google
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-dark-700/60 to-dark-800/40 border border-dark-600/50 hover:border-primary/40 transition-all"
            >
              {/* Aspas decorativas */}
              <div className="absolute -top-3 left-6 text-6xl text-primary/30 font-display leading-none">
                &ldquo;
              </div>

              <div className="flex items-center gap-1 mb-3 pt-2">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={14}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="text-cream/85 leading-relaxed mb-5 italic">
                {review.comment}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-dark-600">
                <div>
                  <p className="font-semibold text-cream">{review.name}</p>
                  <p className="text-xs text-cream/50">{review.date}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {review.name.charAt(0)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
