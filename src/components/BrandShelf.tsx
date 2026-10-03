"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { brands } from "@/lib/content";
import SectionHead from "./SectionHead";

export default function BrandShelf() {
  const [active, setActive] = useState(0);
  const [photo, setPhoto] = useState<{ src: string; alt: string } | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const brand = brands[active];

  function onTabKey(e: KeyboardEvent) {
    const last = brands.length - 1;
    const next =
      e.key === "ArrowRight" ? (active + 1) % brands.length
      : e.key === "ArrowLeft" ? (active - 1 + brands.length) % brands.length
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  function openPhoto(p: { src: string; alt: string }) {
    setPhoto(p);
    dialogRef.current?.showModal();
  }

  return (
    <section id="brands" aria-labelledby="brands-title" className="bg-frost py-[clamp(64px,9vw,112px)]">
      <div className="wrap">
        <SectionHead
          id="brands-title"
          title="Browse by brand"
          text="Pick a brand to see its products. Select a photo to enlarge it."
        />

        <div role="tablist" aria-label="Brands" className="mb-6 flex flex-wrap gap-2" onKeyDown={onTabKey}>
          {brands.map((b, i) => {
            const selected = i === active;
            return (
              <button
                key={b.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                id={`tab-${b.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="shelf-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`min-h-12 cursor-pointer rounded-md border-2 border-plum px-5 py-3.5 text-[1.05rem] font-bold leading-none [font-stretch:112%]
                  ${selected ? "bg-plum text-white" : "bg-white text-plum hover:bg-gold-soft"}`}
              >
                {b.name}
                <span className="ml-1.5 text-[0.9rem] font-medium opacity-75 [font-stretch:100%]">{b.images.length}</span>
              </button>
            );
          })}
        </div>

        <div id="shelf-panel" role="tabpanel" aria-labelledby={`tab-${brand.id}`} tabIndex={0}>
          <p className="mb-5 max-w-[70ch] text-muted">{brand.note}</p>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-[repeat(auto-fill,minmax(170px,1fr))] sm:gap-3">
            {brand.images.map((img) => (
              <li key={img.src}>
                <button
                  type="button"
                  aria-label={`Enlarge: ${img.alt}`}
                  onClick={() => openPhoto(img)}
                  className="group relative block aspect-square w-full cursor-zoom-in overflow-hidden rounded-md bg-white shadow-[0_1px_0_var(--color-frost-line)]"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1200px) 190px, (min-width: 640px) 25vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Product photo"
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current.close();
        }}
        onClose={() => setPhoto(null)}
        className="m-auto max-h-[92vh] w-[min(92vw,820px)] overflow-visible rounded-md bg-white p-0 backdrop:bg-[rgba(38,10,26,0.82)]"
      >
        {photo && (
          <div className="relative aspect-square w-full">
            <Image src={photo.src} alt={photo.alt} fill sizes="820px" className="rounded-md object-contain" />
          </div>
        )}
        <button
          type="button"
          aria-label="Close photo"
          onClick={() => dialogRef.current?.close()}
          className="absolute right-2 top-2 h-11 w-11 cursor-pointer rounded-full bg-gold text-2xl leading-none text-plum-deep sm:-right-3.5 sm:-top-3.5"
        >
          ×
        </button>
      </dialog>
    </section>
  );
}
