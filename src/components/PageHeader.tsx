import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  title: string;
  text?: string;
  back?: { href: string; label: string };
  children?: ReactNode;
};

// Banner at the top of every inner page. It holds the page's single h1.
export default function PageHeader({ title, text, back, children }: Props) {
  return (
    <section className="bg-frost py-[clamp(40px,6vw,80px)]">
      <div className="wrap">
        {back && (
          <Link href={back.href} className="mb-5 inline-block font-semibold text-plum hover:underline">
            ← {back.label}
          </Link>
        )}
        <h1 className="max-w-[18ch] text-[clamp(2.2rem,5vw,3.8rem)] font-black leading-[1] tracking-[-0.02em] text-plum [font-stretch:125%]">
          {title}
        </h1>
        {text && <p className="mt-5 max-w-[56ch] text-[1.1rem] text-muted">{text}</p>}
        {children}
      </div>
    </section>
  );
}
