import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Al Wahda Trading WLL sources frozen and ready-to-cook food from around the world and delivers it across Qatar.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Al Wahda"
        text="A Doha trading company that supplies kitchens and shops with frozen food from trusted brands."
      />
      <About />
      <WhyUs />
      <Testimonials />
      <CtaBand />
    </>
  );
}
