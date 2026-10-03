import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";
import { brands, getBrand } from "@/lib/content";

export function generateStaticParams() {
  return brands.map((b) => ({ brand: b.id }));
}

export async function generateMetadata({ params }: PageProps<"/products/[brand]">): Promise<Metadata> {
  const brand = getBrand((await params).brand);
  if (!brand) return {};
  return { title: brand.name, description: brand.note };
}

export default async function BrandPage({ params }: PageProps<"/products/[brand]">) {
  const brand = getBrand((await params).brand);
  if (!brand) notFound();

  const others = brands.filter((b) => b.id !== brand.id);

  return (
    <>
      <PageHeader title={brand.name} text={brand.note} back={{ href: "/products", label: "All products" }} />

      <section aria-labelledby="gallery-title" className="py-[clamp(48px,7vw,88px)]">
        <div className="wrap">
          <h2 id="gallery-title" className="mb-2 text-[1.5rem] font-extrabold [font-stretch:115%]">
            {brand.images.length} {brand.images.length === 1 ? "product" : "products"}
          </h2>
          <p className="mb-8 text-muted">Select a photo to enlarge it. Ask us for sizes, pack types and prices.</p>
          <Gallery photos={brand.images} />
        </div>
      </section>

      <section aria-labelledby="more-brands-title" className="bg-frost py-[clamp(40px,6vw,72px)]">
        <div className="wrap">
          <h2 id="more-brands-title" className="mb-5 text-[1.3rem] font-extrabold [font-stretch:115%]">
            Other brands
          </h2>
          <ul className="flex flex-wrap gap-2">
            {others.map((b) => (
              <li key={b.id}>
                <Link
                  href={`/products/${b.id}`}
                  className="inline-flex min-h-12 items-center rounded-md border-2 border-plum bg-white px-5 font-bold text-plum no-underline hover:bg-gold-soft"
                >
                  {b.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
