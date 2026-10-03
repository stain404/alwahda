import Image from "next/image";
import Link from "next/link";
import { company, heroTiles } from "@/lib/content";

export default function Hero() {
  const mainPhone = company.phones[0];

  return (
    <section id="top" className="overflow-hidden bg-frost py-[clamp(48px,8vw,104px)]">
      <div className="wrap grid items-center gap-[clamp(32px,5vw,72px)] lg:grid-cols-[1.05fr_1fr]">
        <div>
          <h1 className="max-w-[14ch] text-[clamp(2.5rem,6.4vw,5rem)] font-black leading-[0.98] tracking-[-0.02em] text-plum [font-stretch:125%] lg:max-w-[12ch]">
            Frozen food and kitchen staples for Qatar
          </h1>
          <p className="mt-6 max-w-[50ch] text-[clamp(1.05rem,1.6vw,1.2rem)] text-muted">
            We supply restaurants, cafés, caterers and grocers in Doha with fries, fruit pulp, meat and poultry,
            burger patties, wraps and sauces from trusted international brands.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn bg-gold text-plum-deep hover:bg-gold-dark">
              Request a price list
            </Link>
            <a href={mainPhone.href} className="btn border-plum text-plum hover:bg-plum hover:text-white">
              Call {mainPhone.label}
            </a>
          </div>
        </div>

        {/* The product "tray": four category photos stacked like cartons in a cold room. */}
        <ul aria-label="Product range" className="grid grid-cols-2 gap-2.5">
          {heroTiles.map((t, i) => (
            <li
              key={t.src}
              className={`relative overflow-hidden rounded-md bg-white shadow-[0_1px_0_var(--color-frost-line)]
                ${i === 0 ? "border-t-[6px] border-gold" : ""} ${i === 3 ? "border-b-[6px] border-plum" : ""}`}
            >
              <div className="relative aspect-square">
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 280px, 50vw"
                  className="object-contain p-[6%]"
                />
              </div>
              <span className="absolute bottom-2.5 left-2.5 rounded-[3px] bg-plum-deep px-2.5 py-1 text-[0.85rem] font-semibold text-white">
                {t.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
