import { About } from "@/components/About";
import { BrandRoster } from "@/components/BrandRoster";
import { Contact } from "@/components/Contact";
import { CreatorRoster } from "@/components/CreatorRoster";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Performance } from "@/components/Performance";
import { ScrollVideoHero } from "@/components/ScrollVideoHero";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <ScrollVideoHero />
        <Services />
        <CreatorRoster />
        <BrandRoster />
        <Performance />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
