import { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import CitySection from "./components/CitySection";
import JournalSection from "./components/JournalSection";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      smoothWheel: true,
      wheelMultiplier: 0.75,
      touchMultiplier: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-dvh bg-[#f8f7f4] text-[#11110f]">
      <Navbar />

      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <CitySection />
        <JournalSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;