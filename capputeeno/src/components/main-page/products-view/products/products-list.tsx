"use client"

import styled from "styled-components";
import { ProductCard } from "./product-card";
import { useQuery } from "@tanstack/react-query";
import { GET_FETCHER_PRODUCTS } from "@/hooks/querrys/fetchers/get-fetcher-products";
import { useFilter } from "@/utils/filters/useFilter";
import { GET_QUERY_ALL_PRODUCTS_TO_MAIN_PAGE_WITH_PAGE } from "@/hooks/querrys/get-query-all-products-to-main-with-page";
import { useDeferredValue } from "react";

const ContainerProducts = styled.div`
    width: 100%;
    
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    font-family: inherit;

    gap: 32px;
`

export function ProductsList() {
    const {
        type,
        organize,
        page,
        search
    } = useFilter();

    const searchDeferred = useDeferredValue(
        search
    ).toLowerCase();

    const {
        data
    } = useQuery({
        queryFn: () => GET_FETCHER_PRODUCTS(
            GET_QUERY_ALL_PRODUCTS_TO_MAIN_PAGE_WITH_PAGE(
                type,
                organize,
                page
            )
        ),
        queryKey: ['products', type, organize, page, searchDeferred]
    })

    console.log(searchDeferred);

    
    let products = data?.data?.data?.allProducts;
    
    products = products?.filter(
        product => product.name.toLowerCase().includes(searchDeferred)
    );

    return (
        <ContainerProducts>
            { products?.map(product =>
                <ProductCard 
                    key={product.id}
                    image_url={product.image_url}
                    name={product.name}
                    price_in_cents={product.price_in_cents}
                    id={product.id}
                />
            )}
        </ContainerProducts>
    )
}