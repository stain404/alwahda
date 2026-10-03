import { company } from "@/lib/content";
import EnquiryForm from "./EnquiryForm";

const linkClass = "text-white underline decoration-white/40 underline-offset-[3px] hover:decoration-gold";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-plum text-white">
      <div className="wrap grid gap-[clamp(32px,6vw,80px)] py-[clamp(64px,9vw,112px)] md:grid-cols-2">
        <div>
          <h2 id="contact-title" className="section-title text-white">
            Talk to us about an order
          </h2>
          <p className="mt-4 max-w-[44ch] text-[#f1e3ea]">
            Tell us what your kitchen or shop needs and we’ll send prices and delivery times.
          </p>
          <dl className="mt-8 grid gap-[22px]">
            <div>
              <dt className="mb-1 font-bold text-gold">Phone</dt>
              <dd className="grid">
                {company.phones.map((p) => (
                  <a key={p.href} href={p.href} className={linkClass}>
                    {p.label}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="mb-1 font-bold text-gold">Email</dt>
              <dd>
                <a href={`mailto:${company.email}`} className={linkClass}>
                  {company.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="mb-1 font-bold text-gold">Office</dt>
              <dd>
                {company.address[0]}
                <br />
                {company.address[1]}
              </dd>
            </div>
          </dl>
        </div>

        <EnquiryForm />
      </div>

      <iframe
        title="Map showing Aziziya Shopping Complex, Doha"
        src={`https://maps.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&z=15&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-[340px] w-full border-0"
      />
    </section>
  );
}
