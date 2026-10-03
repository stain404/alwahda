import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/content";
import SectionHead from "./SectionHead";

// Soft panels behind each photo. Cut-out photos on white are blended into the panel colour with
// mix-blend-multiply; photos with their own backdrop (`fill`) cover the whole panel instead.
const panels = ["bg-gold-soft", "bg-frost", "bg-blush", "bg-frost", "bg-blush", "bg-gold-soft"];

export default function Categories() {
  return (
    <section id="products" aria-labelledby="products-title" className="py-[clamp(64px,9vw,112px)]">
      <div className="wrap">
        <SectionHead
          id="products-title"
          title="What we supply"
          text="Six product lines, stocked in Doha and delivered to your kitchen or shop."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <li
              key={c.title}
              className="group relative flex flex-col overflow-hidden rounded-md border border-frost-line bg-white"
            >
              <div className={`relative aspect-[4/3] ${panels[i % panels.length]}`}>
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
                  className={`transition-transform duration-300 group-hover:scale-[1.04] ${c.fill ? "object-cover" : "object-contain p-5 mix-blend-multiply"}`}
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="text-[1.2rem] font-bold [font-stretch:110%]">
                  {c.brand ? (
                    // The link stretches over the whole card
                    <Link
                      href={`/products/${c.brand}`}
                      className="text-plum-deep no-underline after:absolute after:inset-0 group-hover:text-plum"
                    >
                      {c.title}
                    </Link>
                  ) : (
                    c.title
                  )}
                </h3>
                <p className="text-muted">{c.text}</p>
                {c.brand && <span className="mt-auto pt-2 font-semibold text-plum group-hover:underline">See products</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
