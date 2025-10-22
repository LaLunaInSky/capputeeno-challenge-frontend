"use client"

import { FilterBar } from "@/components/main-page/filter-bar/filter-bar";
import { ProductsView } from "@/components/main-page/products-view/products-view";

export default function Home() {
  return (
      <>
        <FilterBar />
        <ProductsView />
      </>
  );
}
