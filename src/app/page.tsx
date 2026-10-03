import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Brands from "@/components/Brands";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Brands />
      <About compact />
      <Testimonials />
      <CtaBand />
    </>
  );
}
