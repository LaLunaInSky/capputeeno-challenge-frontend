"use client"

import FetcherGetProducts from "@/app/contexts/fetchers/get_products.fetcher";
import UseFilterContextProjectDisplay from "@/app/contexts/filters/uses/context_projects_display.filter.use";
import QueryGetAllProductsWithPagination from "@/app/contexts/queries/get_all_products_with_pagination.query";
import { useQuery } from "@tanstack/react-query";
import { useDeferredValue } from "react";
import styled from "styled-components";
import PiecePageLoadingModel from "../pieces/page_loading_model.piece";
import PieceNothingFound from "../pieces/nothing_found_products.piece";
import PieceProductCardModel from "../pieces/product_card_model.piece";

const ProductsDisplayModel = styled.div`
    width: 100%;
    
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    font-family: inherit;

    gap: 32px;
`

const ContainerOtherResults = styled.div`
    margin-top: -5em;
`

const TemplateProductsDisplay = () => {
    const {
        type,
        organize,
        page,
        search
    } = UseFilterContextProjectDisplay();

    const searchDeferred = useDeferredValue(
        search
    ).toLowerCase();

    const {
        data,
        isLoading
    } = useQuery({
        queryFn: () => FetcherGetProducts(
            QueryGetAllProductsWithPagination(
                type,
                organize,
                page
            )
        ),
        queryKey: [
            'products', 
            type, organize, 
            page, searchDeferred
        ],
    });
    
    let products = data?.data?.data?.allProducts;
    
    if (products) {
        products = products?.filter(
            product => product.name.toLowerCase().includes(searchDeferred)
        );
    }
    
    return (
        <ProductsDisplayModel>
            {isLoading && (
                <ContainerOtherResults>
                    <PiecePageLoadingModel />
                </ContainerOtherResults>
            )}
            {!isLoading && products && products.map(
                (product) => (
                    <PieceProductCardModel 
                        key={`product_with_id_${product.id}`}
                        id={product.id}
                        image_url={product.image_url}
                        name={product.name}
                        price_in_cents={product.price_in_cents}
                    />
                )
            )}
            {!isLoading && !products &&(
                <ContainerOtherResults>
                    <PieceNothingFound />
                </ContainerOtherResults>
            )}
        </ProductsDisplayModel>
    );
};

export default TemplateProductsDisplay;