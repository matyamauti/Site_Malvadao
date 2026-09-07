import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Differentials } from "@/components/Differentials";
import { Menu } from "@/components/Menu";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { Location } from "@/components/Location";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Differentials />
        <Menu />
        <About />
        <Reviews />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
