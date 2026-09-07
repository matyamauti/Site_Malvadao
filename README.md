# 🍔 Malvadão Artesanal Burguer

> O lado malvado da fome começa aqui.

Site institucional da hamburgueria **Malvadão Artesanal Burguer**, localizada em Praia Grande - SP. O projeto apresenta o cardápio completo, diferenciais da casa, localização com mapa integrado e sistema de pedidos online via Anota Aí.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-animations-ff69b4?style=for-the-badge&logo=framer)

---

## ✨ Sobre o Projeto

A **Malvadão** é uma hamburgueria artesanal com **+3 anos de casa** e mais de **+10 mil pedidos** entregues. O site foi construído do zero com foco em:

- 🎨 Identidade visual alinhada à logomarca (creme/dourado/preto)
- ⚡ Performance e SEO otimizados (Next.js 14 App Router)
- 📱 Design 100% responsivo
- 🍔 Cardápio interativo com **14 burgers** (10 tradicionais + 4 especiais)
- 🔗 Integração direta com **Anota Aí** para pedidos online
- 📊 Pronto pra **Google Analytics 4** e Meta Pixel

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|------------|-----|
| **[Next.js 14](https://nextjs.org/)** | Framework React com App Router |
| **[TypeScript](https://www.typescriptlang.org/)** | Tipagem estática em modo strict |
| **[Tailwind CSS](https://tailwindcss.com/)** | Estilização utilitária |
| **[Framer Motion](https://www.framer.com/motion/)** | Animações e transições |
| **[GSAP](https://gsap.com/)** | Carrossel arc-flow dos burgers |
| **[Lucide React](https://lucide.dev/)** | Ícones SVG |
| **Google Fonts (Bebas Neue + Inter)** | Tipografia display e corpo |

---

## 📂 Estrutura do Projeto

```
malvadao/
├── public/                  # Assets estáticos (imagens, vídeo, logo)
│   ├── LOGO-hd.png          # Logo principal
│   ├── cardapioCompleto.mp4 # Vídeo do cardápio
│   ├── fachada.png          # Foto da loja
│   ├── batata.png           # Foto da batata temperada
│   └── menu/                # Fotos dos burgers
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout raiz + Google Analytics
│   │   ├── page.tsx         # Página principal
│   │   └── globals.css      # Estilos globais + gradientes
│   ├── components/
│   │   ├── Header.tsx       # Navegação superior
│   │   ├── Hero.tsx         # Banner principal
│   │   ├── Menu.tsx         # Cardápio completo
│   │   ├── Differentials.tsx # Cards de diferenciais
│   │   ├── About.tsx        # Sobre nós + estatísticas
│   │   ├── Reviews.tsx      # Avaliações de clientes
│   │   ├── Location.tsx     # Mapa e informações
│   │   ├── FinalCTA.tsx     # CTA final (pedido)
│   │   └── Footer.tsx       # Rodapé
│   ├── lib/
│   │   ├── data.ts          # Todos os dados (burgers, preços, links)
│   │   └── utils.ts         # Utilitários (cn)
│   └── components/ui/       # Componentes auxiliares
│       ├── arc-flow-carousel.tsx  # Carrossel interativo
│       └── container-scroll-animation.tsx
└── tailwind.config.ts       # Configuração do tema
```

---

## 🍔 Cardápio

### Burgers Tradicionais (R$ 35-41)
- **Malvadão** — R$ 35,00
- **Top Cheddar** — R$ 35,00
- **Salada Bacon** — R$ 36,00
- **Big Salada** — R$ 39,00
- **MadMax** — R$ 35,00
- **Frangolino** — R$ 35,00
- **Duplo** — R$ 41,00
- **Egg Bacon** — R$ 35,00
- **Top Bacon** — R$ 39,00
- **Calabreso** — R$ 35,00

### Burgers Especiais (R$ 45,00)
- **Triplo** — Três blends 150g com bacon
- **Toscana** — Blend 180g com calabresa e provolone
- **Perigoso** — Muito bacon, ovo e molho da casa
- **Rebelde** — Pepper jack, calabresa e pimenta

Cada burger tem link direto pro **Anota Aí** pra adicionar ao pedido.

---

## 🚀 Como Rodar Localmente

### Pré-requisitos
- **Node.js** 18+ ([download](https://nodejs.org/))
- **npm** ou **yarn** ou **pnpm**

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/SEU_USUARIO/malvadao-artesanal-burguer.git

# 2. Entre na pasta
cd malvadao-artesanal-burguer

# 3. Instale as dependências
npm install

# 4. Rode o servidor de desenvolvimento
npm run dev
```

O site vai abrir em **http://localhost:3000** 🎉

---

## 📦 Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de dev (porta 3000)
npm run build    # Faz o build de produção
npm run start    # Inicia o servidor de produção
npm run lint     # Roda o ESLint
```

---

## 🎨 Customização

### Cores do tema (`tailwind.config.ts`)
```typescript
colors: {
  primary: "#E63946",    // Vermelho da marca
  accent: "#F4A261",     // Dourado mostarda
  cream: "#F1FAEE",      // Creme claro
  dark: "#0A0A0A",       // Preto profundo
}
```

### Adicionar/Editar Burgers
Os dados ficam centralizados em [`src/lib/data.ts`](src/lib/data.ts). Para mudar preços, nomes ou links:

```typescript
{
  slug: "malvadao",
  name: "Malvadão",
  image: "/menu/malvadao.png",
  title: "O carro-chefe da casa",
  description: "Blend artesanal 180g, queijo...",
  price: "R$ 35,00",
  link: "https://pedido.anota.ai/product/SEU_ID/0/malvadao-burguer_?categoryType=simple_item",
}
```

---

## 🌐 Deploy

O projeto está **em produção na Vercel**:

🔗 **URL:** `https://malvadaohamburgueria.vercel.app`

### Deploy manual via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 📊 Recursos Extras

- ✅ **Google Analytics 4** — pronto pra configurar (basta adicionar o ID)
- ✅ **Open Graph** — preview bonito quando compartilhar no WhatsApp/Instagram
- ✅ **SEO** — meta tags, sitemap, robots configurados
- ✅ **Acessibilidade** — ARIA labels, prefers-reduced-motion
- ✅ **Performance** — imagens otimizadas, lazy loading

---

## 📞 Contato da Malvadão

- 📍 **Endereço:** R. Honduras, 265 - Guilhermina, Praia Grande - SP
- 📱 **Telefone:** (13) 97807-3231
- 🕐 **Funcionamento:** Quinta a Domingo · 18h às 23h
- 🌐 **Pedidos:** [anota.ai/malvadao-burguer_](https://app.anota.ai/malvadao-burguer_)

---

## 📝 Licença

Este projeto foi desenvolvido sob encomenda para a **Malvadão Artesanal Burguer**.  
© 2025 Malvadão Artesanal Burguer. Todos os direitos reservados.

---

<div align="center">

**Feito com 🔥 e muito queijo em Praia Grande - SP**

</div>
