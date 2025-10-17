"use client"

import { FilterBar } from "@/components/filter-bar/filter-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <div>
        <FilterBar />
      </div>
    </QueryClientProvider>
  );
}
