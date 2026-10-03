import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, email or visit Al Wahda Trading WLL at Aziziya Shopping Complex, Doha, or send an enquiry for prices and delivery times.",
};

export default function ContactPage() {
  return <Contact />;
}
