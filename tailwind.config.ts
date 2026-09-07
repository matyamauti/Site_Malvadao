import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta baseada em hamburgueria artesanal - cores quentes e urbanas
        primary: {
          DEFAULT: "#E63946", // vermelho tomate - "malvado"
          dark: "#B22B36",
          light: "#FF4D5A",
        },
        accent: {
          DEFAULT: "#F4A261", // laranja dourado - pão crocante
          dark: "#E07F3C",
          light: "#FFB97A",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          800: "#1A1A1A",
          700: "#2A2A2A",
          600: "#3A3A3A",
        },
        cream: "#FFF8E7", // pão artesanal claro
      },
      fontFamily: {
        display: ['"Bebas Neue"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
