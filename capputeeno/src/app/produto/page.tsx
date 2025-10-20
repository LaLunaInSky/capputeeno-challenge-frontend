"use client"

import { NotFoundPage } from "@/components/product-page/not-found-page/not-found-page";
import { ProductPage } from "@/components/product-page/product-page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function Page() {
    const client = new QueryClient();

    const searchParams = useSearchParams();

    if (searchParams.get('id') === null) {
        return (
            <NotFoundPage />
        )
    } else {
        return (
            <QueryClientProvider
                client={client}
            >
                <ProductPage 
                    idProduct={searchParams.get('id') as string}
                />
            </QueryClientProvider>
        )
    }

}