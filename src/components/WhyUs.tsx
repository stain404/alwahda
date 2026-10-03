import { reasons } from "@/lib/content";

export default function WhyUs() {
  return (
    <section aria-labelledby="why-title" className="bg-plum-deep py-[clamp(64px,9vw,112px)] text-white">
      <div className="wrap">
        <h2 id="why-title" className="section-title mb-10 text-white">
          Why kitchens choose us
        </h2>
        <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.title} className="border-t-[3px] border-gold pt-[18px]">
              <dt className="mb-2 text-[1.15rem] font-bold [font-stretch:110%]">{r.title}</dt>
              <dd className="text-blush">{r.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
