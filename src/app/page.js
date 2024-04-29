import CTA from "@/components/cta";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PopularMenu from "@/components/popularmenu";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero className="bg-[#FFF9EA]" />
      <Services />
      <PopularMenu />
      <Testimonials />
      <CTA />
    </main>
  );
}
