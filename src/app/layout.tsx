import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

export const metadata: Metadata = {
  title: "Malvadão Artesanal Burguer | O lado malvado da fome começa aqui",
  description:
    "Hamburgueria artesanal em Praia Grande - SP. Hambúrgueres suculentos, batata crocante e pão brioche/australiano artesanal. Peça pelo delivery ou venha nos visitar.",
  keywords: [
    "hamburgueria",
    "hambúrguer artesanal",
    "Praia Grande",
    "delivery",
    "Malvadão",
    "burger",
  ],
  openGraph: {
    title: "Malvadão Artesanal Burguer",
    description: "O lado malvado da fome começa aqui.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics 4 */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-dark text-cream overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
