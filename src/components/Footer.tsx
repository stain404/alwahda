import Image from "next/image";
import { company, navLinks } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-frost-line py-8">
      <div className="wrap flex flex-wrap items-center justify-between gap-5">
        <Image src="/images/site/logo.png" alt="Al Wahda Trading W.L.L" width={1000} height={208} className="w-40" />
        <nav aria-label="Footer" className="flex flex-wrap gap-5">
          {[...navLinks, { href: "#contact", label: "Contact" }].map((l) => (
            <a key={l.href} href={l.href} className="font-semibold text-ink no-underline hover:text-plum">
              {l.label}
            </a>
          ))}
        </nav>
        <p className="text-[0.9rem] text-muted">
          © {new Date().getFullYear()} {company.name}, Doha, Qatar
        </p>
      </div>
    </footer>
  );
}
