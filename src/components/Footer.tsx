import Image from "next/image";
import Link from "next/link";
import { brands, company, navLinks } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-frost-line py-10">
      <div className="wrap grid gap-8 md:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
        <div>
          <Image src="/images/site/logo.png" alt="Al Wahda Trading W.L.L" width={1000} height={208} className="w-40" />
          <p className="mt-4 max-w-[30ch] text-[0.95rem] text-muted">
            Frozen food and kitchen staples for restaurants, cafés and shops in Qatar.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-3 text-[1rem] font-bold">Pages</h2>
          <ul className="grid gap-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-ink no-underline hover:text-plum hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Brands">
          <h2 className="mb-3 text-[1rem] font-bold">Brands</h2>
          <ul className="grid gap-2">
            {brands.map((b) => (
              <li key={b.id}>
                <Link href={`/products/${b.id}`} className="text-ink no-underline hover:text-plum hover:underline">
                  {b.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-3 text-[1rem] font-bold">Contact</h2>
          <ul className="grid gap-2 text-[0.95rem]">
            {company.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="text-ink no-underline hover:text-plum hover:underline">
                  {p.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${company.email}`} className="text-ink no-underline hover:text-plum hover:underline">
                {company.email}
              </a>
            </li>
            <li className="text-muted">
              {company.address[0]}, {company.address[1]}
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap mt-10 border-t border-frost-line pt-6">
        <p className="text-[0.9rem] text-muted">
          © {new Date().getFullYear()} {company.name}, Doha, Qatar
        </p>
      </div>
    </footer>
  );
}
