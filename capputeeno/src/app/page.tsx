"use client"

import { FilterBar } from "@/components/main-page/filter-bar/filter-bar";
import { ProductsView } from "@/components/main-page/products-view/products-view";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <div>
        <FilterBar />
        <ProductsView />
      </div>
    </QueryClientProvider>
  );
}
