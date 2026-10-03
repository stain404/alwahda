"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Photo = { src: string; alt: string };

// Photo grid for a brand page. Selecting a photo opens it larger in a dialog.
export default function Gallery({ photos }: { photos: Photo[] }) {
  const [photo, setPhoto] = useState<Photo | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  function open(p: Photo) {
    setPhoto(p);
    dialogRef.current?.showModal();
  }

  return (
    <>
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] sm:gap-3">
        {photos.map((p) => (
          <li key={p.src}>
            <button
              type="button"
              aria-label={`Enlarge: ${p.alt}`}
              onClick={() => open(p)}
              className="group relative block aspect-square w-full cursor-zoom-in overflow-hidden rounded-md bg-white shadow-[0_1px_0_var(--color-frost-line)]"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1200px) 220px, (min-width: 640px) 25vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
              />
            </button>
          </li>
        ))}
      </ul>

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
    </>
  );
}
