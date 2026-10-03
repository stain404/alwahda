import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Categories from "@/components/Categories";
import Brands from "@/components/Brands";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Frozen fries, fruit pulp, meat and poultry, burger products, wraps, mayonnaise and ketchup, supplied in Doha, Qatar.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Our products"
        text="Fries, fruit, meat, wraps and sauces from five brands, all available from one supplier."
      />
      <Categories />
      <Brands />
      <CtaBand />
    </>
  );
}
