import Image from "next/image";
import Link from "next/link";

// `compact` is the short version for the home page: no mission and vision, and a link to the About page.
export default function About({ compact = false }: { compact?: boolean }) {
  return (
    <section id="about" aria-labelledby="about-title" className="py-[clamp(64px,9vw,112px)]">
      <div className="wrap grid items-center gap-[clamp(32px,6vw,80px)] md:grid-cols-[0.9fr_1.1fr]">
        {/* Gold block offset behind the photo */}
        <figure className="relative isolate mr-6 max-w-[460px] md:mr-0 md:max-w-none">
          <div aria-hidden className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-md bg-gold" />
          <div className="relative aspect-square overflow-hidden rounded-md">
            <Image
              src="/images/site/about-2.jpg"
              alt="Chicken burger patties with garlic, chilli and lettuce"
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </figure>

        <div>
          <h2 id="about-title" className="section-title">
            Global sourcing, local service
          </h2>
          <p className="mt-5 max-w-[60ch] text-muted">
            Food culture in Qatar is as diverse as the people it serves. Al Wahda Trading WLL brings in products from
            suppliers around the world and delivers them across the country, with the quality and hygiene standards
            our customers expect.
          </p>
          {compact ? (
            <Link href="/about" className="btn mt-8 border-plum text-plum hover:bg-plum hover:text-white">
              More about us
            </Link>
          ) : (
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="border-t-2 border-plum pt-4">
                <h3 className="mb-2 text-[1.2rem] font-bold">Our mission</h3>
                <p className="text-muted">
                  To bring joy to our customers by delivering their orders quickly while meeting the highest quality
                  and hygiene standards.
                </p>
              </div>
              <div className="border-t-2 border-plum pt-4">
                <h3 className="mb-2 text-[1.2rem] font-bold">Our vision</h3>
                <p className="text-muted">To be the leading brand in Qatar for quality frozen and ready-to-cook food.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
