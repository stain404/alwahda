import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section aria-labelledby="voices-title" className="py-[clamp(64px,9vw,112px)]">
      <div className="wrap">
        <h2 id="voices-title" className="section-title mb-10">
          What customers say
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col justify-between gap-5 rounded-md bg-frost p-7">
              <blockquote className="text-[1.1rem] leading-[1.55]">
                <p>“{t.quote}”</p>
              </blockquote>
              <figcaption className="font-bold text-plum">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
