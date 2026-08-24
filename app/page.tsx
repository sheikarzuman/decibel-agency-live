import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CreatorRoster } from "@/components/CreatorRoster";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Pillars } from "@/components/Pillars";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Pillars />
        <CreatorRoster />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
