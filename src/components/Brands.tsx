import Image from "next/image";
import Link from "next/link";
import { brands } from "@/lib/content";
import SectionHead from "./SectionHead";

export default function Brands({ className = "bg-frost" }: { className?: string }) {
  return (
    <section id="brands" aria-labelledby="brands-title" className={`py-[clamp(64px,9vw,112px)] ${className}`}>
      <div className="wrap">
        <SectionHead
          id="brands-title"
          title="Our brands"
          text="Five brands, each with its own range. Open a brand to see every product."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((b) => (
            <li key={b.id}>
              <Link
                href={`/products/${b.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-md bg-white no-underline shadow-[0_1px_0_var(--color-frost-line)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-frost">
                  <Image
                    src={b.images[0].src}
                    alt={b.images[0].alt}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 border-t-[3px] border-gold p-5">
                  <h3 className="text-[1.25rem] font-bold text-plum-deep [font-stretch:110%] group-hover:text-plum">
                    {b.name}
                  </h3>
                  <p className="line-clamp-3 text-[0.98rem] text-muted">{b.note}</p>
                  <span className="mt-auto pt-2 font-semibold text-plum">
                    See {b.images.length} {b.images.length === 1 ? "product" : "products"}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
