"use client"

import { NotFoundPage } from "@/components/product-page/not-found-page/not-found-page";
import { ProductPage } from "@/components/product-page/product-page";
import { GET_FETCHER_PRODUCTS } from "@/hooks/querrys/fetchers/get-fetcher-products";
import { GET_QUERY_PRODUCT_ONLY_ID } from "@/hooks/querrys/get-query-product-only-id";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function Page() {
    const searchParams = useSearchParams();
    
    const idPage = searchParams.get('id');

    const {
        data
    } = useQuery({
        queryFn: () => GET_FETCHER_PRODUCTS(
            GET_QUERY_PRODUCT_ONLY_ID(
                idPage ?? ""
            )
        ),
        queryKey: ['products', idPage]
    })
    
    const product = data?.data?.data?.allProducts ?? [];

    if (
        idPage === null || product?.length < 1
    ) {
        return (
            <NotFoundPage />
        )
    } else {
        return (
            <ProductPage 
                idProduct={idPage}
            />
        )
    }

}