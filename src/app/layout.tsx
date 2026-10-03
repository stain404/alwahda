import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: {
    default: "Al Wahda Trading WLL | Frozen food supplier in Doha, Qatar",
    template: "%s | Al Wahda Trading WLL",
  },
  description:
    "Al Wahda Trading WLL supplies frozen fries, fruit pulp, meat and poultry, burgers, wraps and sauces to restaurants, cafés and shops across Qatar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <a
          href="#main"
          className="absolute left-4 -top-16 z-[100] rounded-md bg-plum px-4 py-2.5 text-white focus:top-3"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
