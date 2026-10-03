"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const contactActive = isActive("/contact");

  return (
    <header className="sticky top-0 z-50 border-b border-frost-line bg-white/95 backdrop-blur">
      <div className="wrap relative flex min-h-[72px] items-center justify-between gap-6">
        <Link href="/" aria-label="Al Wahda Trading WLL, home" onClick={() => setOpen(false)}>
          <Image
            src="/images/site/logo.png"
            alt="Al Wahda Trading W.L.L"
            width={1000}
            height={208}
            priority
            className="w-40 md:w-[190px]"
          />
        </Link>

        <button
          type="button"
          className="relative h-12 w-12 md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <span
            aria-hidden
            className={`absolute left-3 top-[17px] h-0.5 w-6 bg-plum-deep transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            aria-hidden
            className={`absolute left-3 top-[24px] h-0.5 w-6 bg-plum-deep ${open ? "opacity-0" : ""}`}
          />
          <span
            aria-hidden
            className={`absolute left-3 top-[31px] h-0.5 w-6 bg-plum-deep transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>

        <nav
          id="site-nav"
          aria-label="Main"
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col border-b border-frost-line bg-white px-[clamp(16px,4vw,40px)] pb-5 pt-2
            md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}
        >
          {navLinks
            .filter((l) => l.href !== "/contact")
            .map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`border-b border-frost py-3.5 font-semibold no-underline hover:text-plum md:border-b-2 md:py-1
                    ${active ? "text-plum md:border-gold" : "text-ink md:border-transparent"}`}
                >
                  {l.label}
                </Link>
              );
            })}
          <Link
            href="/contact"
            aria-current={contactActive ? "page" : undefined}
            onClick={() => setOpen(false)}
            className={`mt-3 rounded-md px-[18px] py-2.5 text-center font-semibold text-white no-underline hover:bg-plum-deep md:mt-0
              ${contactActive ? "bg-plum-deep" : "bg-plum"}`}
          >
            Get a quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
