import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import BrandShelf from "@/components/BrandShelf";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="absolute left-4 -top-16 z-[100] rounded-md bg-plum px-4 py-2.5 text-white focus:top-3"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Categories />
        <BrandShelf />
        <About />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
