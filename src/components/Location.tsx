"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { restaurantInfo } from "@/lib/data";

const infoItems = [
  {
    icon: MapPin,
    label: "Endereço",
    value: restaurantInfo.address,
    href: restaurantInfo.mapsUrl,
  },
  {
    icon: Phone,
    label: "Telefone",
    value: restaurantInfo.phone,
    href: `https://wa.me/${restaurantInfo.phoneLink}`,
  },
];

const scheduleItems = restaurantInfo.openingHoursDetailed;

export function Location() {
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    restaurantInfo.address
  )}&output=embed`;

  return (
    <section
      id="localizacao"
      className="relative py-24 md:py-32 bg-dark overflow-hidden"
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
            Onde estamos
          </p>
          <h2 className="section-title mb-6 text-balance">
            Venha pro <span className="text-gradient-malvadao">Malvadão.</span>
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Estamos no coração da Guilhermina, em Praia Grande. Te esperamos
            aqui — ou a gente vai até você no delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {infoItems.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-dark-700/60 to-dark-800/40 border border-dark-600/50 hover:border-primary/40 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-widest text-cream/50 mb-1">
                      {item.label}
                    </p>
                    <p className="text-cream font-medium">{item.value}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  {content}
                </motion.a>
              ) : (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  {content}
                </motion.div>
              );
            })}

            {/* CTA Rota */}
            <motion.a
              href={restaurantInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="btn-primary w-full mt-6 text-lg"
            >
              <Navigation size={20} />
              Como chegar
            </motion.a>

            {/* Horário de funcionamento detalhado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-dark-700/60 to-dark-800/40 border border-dark-600/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                  <Clock size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-cream/50">
                    Funcionamento
                  </p>
                  <p className="text-cream font-medium">
                    {restaurantInfo.openingHours}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 pl-1">
                {scheduleItems.map((schedule) => (
                  <li
                    key={schedule.day}
                    className="flex items-baseline justify-between gap-3 text-sm"
                  >
                    <span className="text-cream/80 font-medium">
                      {schedule.day}
                    </span>
                    <span className="text-accent font-semibold">
                      {schedule.time}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden border border-dark-600/50 min-h-[400px] lg:min-h-full"
          >
            <iframe
              src={embedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Malvadão Artesanal Burguer"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
