// Dados da hamburgueria Malvadão Artesanal Burguer
export const restaurantInfo = {
  name: "Malvadão Artesanal Burguer",
  tagline: "O lado malvado da fome começa aqui.",
  shortDescription:
    "Hambúrguer artesanal, ingredientes selecionados e o pão crocante que só o Malvadão tem.",
  rating: {
    score: 4.9,
    count: 213,
  },
  priceRange: "R$ 40–60 por pessoa",
  address: "R. Honduras, 265 - Guilhermina, Praia Grande - SP",
  phone: "(13) 97807-3231",
  phoneLink: "5513978073231",
  openingHours: "Quinta a Domingo · 18h às 23h",
  openingHoursDetailed: [
    { day: "Quinta", time: "18h às 23h" },
    { day: "Sexta", time: "18h às 00h" },
    { day: "Sábado", time: "18h às 00h" },
    { day: "Domingo", time: "18h às 23h" },
  ],
  services: ["Consumo no local", "Drive-through", "Delivery"],
  menuUrl: "https://app.anota.ai/malvadao-burguer_",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=R.+Honduras,+265+-+Guilhermina,+Praia+Grande+-+SP",
};

export const differentials = [
  {
    icon: "Beef",
    title: "Hambúrguer Artesanal",
    description: "Blend exclusivo, carne suculenta no ponto certo.",
    background: "/menu/malvadao.png",
  },
  {
    icon: "Wheat",
    title: "Pão Brioche/Australiano",
    description: "Pão artesanal fresquinho, a marca registrada do Malvadão.",
    background: "/menu/top-cheddar.png",
  },
  {
    icon: "Utensils",
    title: "Batata Temperada",
    description: "Crocante por fora, macia por dentro, com tempero da casa.",
    background: "/batata.png",
  },
  {
    icon: "HeartHandshake",
    title: "Atendimento Próximo",
    description: "Atendimento rápido, gente que trata você bem.",
    background: "/fachada.png",
  },
];

// 6 burgers em destaque — alimentam o carrossel e o cardápio.
export const highlightBurgers = [
  {
    slug: "malvadao",
    name: "Malvadão",
    image: "/menu/malvadao.png",
    title: "O carro-chefe da casa",
    description:
      "Blend artesanal 180g, queijo derretido, alface, tomate, picles e o molho da casa no pão crocante.",
    price: "R$ 35,00",
    link: "https://pedido.anota.ai/product/693cd0fdd72f97c2eabeedaf/0/malvadao-burguer_?categoryType=simple_item",
  },
  {
    slug: "top-cheddar",
    name: "Top Cheddar",
    image: "/menu/top-cheddar.png",
    title: "Para cheddar lovers",
    description:
      "Blend 180g, cheddar duplo derretido, bacon crocante e cebola caramelizada no pão artesanal.",
    price: "R$ 35,00",
    link: "https://pedido.anota.ai/product/693f3b6af0a397aad1c77203/0/malvadao-burguer_?categoryType=simple_item",
  },
  {
    slug: "salada-bacon",
    name: "Salada Bacon",
    image: "/menu/salada-bacon.png",
    title: "O equilíbrio perfeito",
    description:
      "Blend 180g, bacon, alface fresca, tomate, cebola roxa, picles e molho da casa.",
    price: "R$ 36,00",
    link: "https://pedido.anota.ai/product/693f3c63d72f97c2eaec5b94/0/malvadao-burguer_?categoryType=simple_item",
  },
  {
    slug: "big-salada",
    name: "Big Salada",
    image: "/menu/big-salada.png",
    title: "Frescor em camadas",
    description:
      "Blend 180g, dupla de queijo, alface, tomate, cebola roxa, picles e maionese da casa.",
    price: "R$ 39,00",
    link: "https://pedido.anota.ai/product/693f3db67c2ed382150c6f9a/0/malvadao-burguer_?categoryType=simple_item",
  },
  {
    slug: "madmax",
    name: "MadMax",
    image: "/menu/madmax.png",
    title: "Sem limites",
    description:
      "Dois blends 180g, cheddar duplo, bacon, ovo, cebola caramelizada e barbecue no pão crocante.",
    price: "R$ 35,00",
    link: "https://pedido.anota.ai/product/693f3af61ba1ac79e956c0cc/0/malvadao-burguer_?categoryType=simple_item",
  },
  {
    slug: "frangolino",
    name: "Frangolino",
    image: "/menu/frangolino.png",
    title: "O Malvadão de frango",
    description:
      "Filé de frango empanado, alface, tomate, picles, queijo e maionese da casa no pão crocante.",
    price: "R$ 35,00",
    link: "https://pedido.anota.ai/product/693cd2eacf35f0e40bce631a/0/malvadao-burguer_?categoryType=simple_item",
  },
];

// 4 burgers especiais — aparecem na seção dedicada abaixo dos hambúrgueres.
export const specialBurgers = [
  {
    slug: "triplo",
    name: "Triplo",
    image: "/triplo.png",
    title: "Para os destemidos",
    description: "Três blends 150g, queijo, bacon, alface, tomate e molho da casa.",
    price: "R$ 45,00",
    link: "https://pedido.anota.ai/product/693f3fcbd994310a1d6bf98b/0/malvadao-burguer_?categoryType=simple_item",
  },
  {
    slug: "toscana",
    name: "Toscana",
    image: "/toscana.png",
    title: "Sabor italiano",
    description: "Blend 180g, queijo provolone, calabresa, cebola e molho toscana.",
    price: "R$ 45,00",
    link: "https://pedido.anota.ai/product/693f4066f0a397aad1c8363f/0/malvadao-burguer_?categoryType=simple_item",
  },
  {
    slug: "perigoso",
    name: "Perigoso",
    image: "/Perigoso.png",
    title: "Não recomendado para fracos",
    description: "Blend 180g, muito bacon, cheddar, ovo frito, cebola caramelizada e molho perigoso.",
    price: "R$ 45,00",
    link: "https://pedido.anota.ai/product/693f40a31ba1ac79e957bb02/0/malvadao-burguer_?categoryType=simple_item",
  },
  {
    slug: "rebelde",
    name: "Rebelde",
    image: "/rebelde.png",
    title: "O fora da lei",
    description: "Blend 180g, pepper jack, calabresa acebolada, pimenta jalapeño e maionese picante.",
    price: "R$ 45,00",
    link: "https://pedido.anota.ai/product/693f40ded72f97c2eaed2062/0/malvadao-burguer_?categoryType=simple_item",
  },
];

export const menuCategories = [
  {
    id: "hamburgueres",
    name: "Burguers Tradicionais",
    description: "Blend artesanal no pão crocante",
    items: [
      ...highlightBurgers,
      {
        slug: "duplo",
        name: "Duplo",
        image: "/duplo.png",
        title: "Para os famintos",
        description: "Dois blends 150g, queijo, alface, tomate e molho da casa.",
        price: "R$ 41,00",
        link: "https://pedido.anota.ai/product/693cd521424329173e88f752/0/malvadao-burguer_?categoryType=simple_item",
      },
      {
        slug: "egg-bacon",
        name: "Egg Bacon",
        image: "/egg_bacon.png",
        title: "Clássico com ovo",
        description: "Blend 150g, ovo frito, bacon crocante, queijo e molho.",
        price: "R$ 35,00",
        link: "https://pedido.anota.ai/product/693cd3e1c542790206f814fb/0/malvadao-burguer_?categoryType=simple_item",
      },
      {
        slug: "top-bacon",
        name: "Top Bacon",
        image: "/top-bacon.png",
        title: "Orei esse aí",
        description: "Blend 150g, muito bacon, queijo derretido e cebola caramelizada.",
        price: "R$ 39,00",
        link: "https://pedido.anota.ai/product/693f3d05d994310a1d6b8592/0/malvadao-burguer_?categoryType=simple_item",
      },
      {
        slug: "calabreso",
        name: "Calabreso",
        image: "/calabreso.png",
        title: "Pimenta na veia",
        description: "Blend 150g, calabresa acebolada, queijo e molho picante.",
        price: "R$ 35,00",
        link: "https://pedido.anota.ai/product/693f3e02f0a397aad1c7dc95/0/malvadao-burguer_?categoryType=simple_item",
      },
    ],
  },
];

export const reviews = [
  {
    name: "Carlos M.",
    rating: 5,
    comment:
      "Melhor hambúrguer artesanal de Praia Grande, sem dúvidas. Pão crocante, carne suculenta e atendimento top!",
    date: "há 2 semanas",
  },
  {
    name: "Ana Paula S.",
    rating: 5,
    comment:
      "A batata é viciante e o atendimento é sempre rápido. Vou toda semana com a família.",
    date: "há 1 mês",
  },
  {
    name: "Rodrigo F.",
    rating: 5,
    comment:
      "Custo-benefício absurdo. Pão francês no lanche é genial, nunca vi igual. Recomendo demais!",
    date: "há 1 mês",
  },
  {
    name: "Mariana L.",
    rating: 5,
    comment:
      "Ambiente agradável, lanche saboroso e preço justo. O Malvadão virou nosso point favorito.",
    date: "há 2 meses",
  },
  {
    name: "Felipe R.",
    rating: 5,
    comment:
      "Delivery sempre chega rápido e quentinho. Melhor hambúrguer da região, sem exagero!",
    date: "há 2 meses",
  },
  {
    name: "Juliana C.",
    rating: 5,
    comment:
      "Atendimento nota 10, ambiente limpo e o sabor é único. Saio sempre satisfeita!",
    date: "há 3 meses",
  },
];
