import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import Solutions from "@/components/sections/Solutions";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Index() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Trust />
      <Solutions />
      <Benefits />
      <Testimonials />
      <Pricing />
      <Process />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
