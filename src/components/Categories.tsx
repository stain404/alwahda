import { categories } from "@/lib/content";
import SectionHead from "./SectionHead";

export default function Categories() {
  return (
    <section id="products" aria-labelledby="products-title" className="py-[clamp(64px,9vw,112px)]">
      <div className="wrap">
        <SectionHead
          id="products-title"
          title="What we supply"
          text="Six product lines, stocked in Doha and delivered to your kitchen or shop."
        />
        {/* Columns share a single top rule; inner dividers mark the grid on wider screens. */}
        <ul className="grid border-t-2 border-plum sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <li
              key={c.title}
              className={`border-frost-line border-b py-6 sm:py-7 sm:pr-7
                ${i % 2 === 1 ? "sm:border-l sm:pl-7" : ""}
                ${i % 3 === 0 ? "lg:border-l-0 lg:pl-0" : "lg:border-l lg:pl-7"}`}
            >
              <h3 className="mb-2 text-[1.2rem] font-bold [font-stretch:110%]">{c.title}</h3>
              <p className="text-muted">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
