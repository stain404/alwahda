import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: "Al Wahda Trading WLL | Frozen food supplier in Doha, Qatar",
  description:
    "Al Wahda Trading WLL supplies frozen fries, fruit pulp, meat and poultry, burgers, wraps and sauces to restaurants, cafés and shops across Qatar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
