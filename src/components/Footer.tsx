import { Instagram, Phone, MapPin } from "lucide-react";
import { restaurantInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative bg-dark-800/50 border-t border-dark-600 py-12">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo + descrição */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/LOGO-hd.png"
                alt="Malvadão"
                width={48}
                height={48}
                className="h-12 w-12 object-contain brightness-0 invert"
              />
              <div>
                <p className="font-display text-lg text-cream tracking-wider">
                  MALVADÃO
                </p>
                <p className="text-xs uppercase tracking-widest text-accent">
                  Artesanal Burguer
                </p>
              </div>
            </div>
            <p className="text-sm text-cream/60 max-w-xs">
              O lado malvado da fome começa aqui. Hambúrguer artesanal em Praia
              Grande - SP.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-display text-lg uppercase tracking-wide text-cream mb-4">
              Contato
            </h3>
            <ul className="space-y-2 text-sm text-cream/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <span>{restaurantInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary shrink-0" />
                <a
                  href={`https://wa.me/${restaurantInfo.phoneLink}`}
                  className="hover:text-primary transition-colors"
                >
                  {restaurantInfo.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h3 className="font-display text-lg uppercase tracking-wide text-cream mb-4">
              Horário
            </h3>
            <ul className="space-y-1.5 text-sm text-cream/70">
              {restaurantInfo.openingHoursDetailed.map((schedule) => (
                <li key={schedule.day} className="flex items-baseline gap-2">
                  <span className="text-cream/90 font-medium min-w-[70px]">
                    {schedule.day}
                  </span>
                  <span className="text-accent font-semibold">
                    {schedule.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="pt-3 text-xs text-cream/50">
              {restaurantInfo.priceRange}
            </p>
          </div>
        </div>

        {/* Divisor */}
        <div className="h-px bg-dark-600 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/40">
          <p>
            © {new Date().getFullYear()} {restaurantInfo.name}. Todos os
            direitos reservados.
          </p>
          <p>
            Feito com 🔥 em Praia Grande - SP
          </p>
        </div>
      </div>
    </footer>
  );
}
