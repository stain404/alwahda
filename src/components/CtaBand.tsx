import Link from "next/link";
import { company } from "@/lib/content";

export default function CtaBand() {
  const phone = company.phones[0];
  return (
    <section aria-labelledby="cta-title" className="bg-plum py-[clamp(48px,7vw,88px)] text-white">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-12 gap-y-6">
        <div>
          <h2 id="cta-title" className="section-title text-white">
            Ready to place an order?
          </h2>
          <p className="mt-3 max-w-[46ch] text-[#f1e3ea]">
            Tell us what your kitchen or shop needs and we’ll send prices and delivery times.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn bg-gold text-plum-deep hover:bg-gold-dark">
            Request a price list
          </Link>
          <a href={phone.href} className="btn border-white/60 text-white hover:bg-white hover:text-plum">
            Call {phone.label}
          </a>
        </div>
      </div>
    </section>
  );
}
