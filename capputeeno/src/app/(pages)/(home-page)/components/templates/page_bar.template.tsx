"use client"

import FetcherGetProducts from "@/app/contexts/fetchers/get_products.fetcher";
import UseFilterContextProjectDisplay from "@/app/contexts/filters/uses/context_projects_display.filter.use";
import QueryGetAllProductsWithoutPagination from "@/app/contexts/queries/get_all_products_without_pagination.query";
import { useQuery } from "@tanstack/react-query";
import { useDeferredValue, useEffect, useState } from "react";
import styled from "styled-components";
import PiecePageBarContainerModel from "../pieces/page_bar_container_model.piece";
import PiecePageLoadingModel from "../pieces/page_loading_model.piece";
import PieceNothingFoundProducts from "../pieces/nothing_found_products.piece";

const PageBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    align-items: center;
    justify-content: start;
    gap: 32px;
    font-family: inherit;
    margin-bottom: 32px;
`


const TemplatePageBar = ({
    children
} : React.PropsWithChildren) => {
    const {
        type,
        organize,
        page,
        search,
        numberOfPages,
        setNumberOfPages,
        setPage
    } = UseFilterContextProjectDisplay();

    const [
        quantityOfProducts,
        setQuantityOfProducts
    ] = useState(
        0
    );

    const searchDeferred = useDeferredValue(
        search
    ).toLowerCase();

    const {
        data,
        isLoading
    } = useQuery({
        queryFn: () => FetcherGetProducts(
            QueryGetAllProductsWithoutPagination(
                type,
                organize
            )
        ),
        queryKey: ['products', type, organize, searchDeferred]
    })

    let products = data?.data?.data?.allProducts;

    products = products?.filter(
        product => product.name.toLowerCase().includes(searchDeferred)
    );
    
    useEffect(() => {
        if (products) {
            setQuantityOfProducts(
                products?.length
            )    
        }

        if (quantityOfProducts <= 0) {
            setNumberOfPages(1)
        } else {
            setNumberOfPages(
                Math.ceil(quantityOfProducts/12)
            )
    
            if (page > numberOfPages) {
                setPage(numberOfPages - 1);
            }
        }
    }, [
        products,
        setQuantityOfProducts,
        quantityOfProducts,
        setNumberOfPages,
        page
    ])

    if (isLoading) {
        return (
            <PageBar>
                <PiecePageLoadingModel />
            </PageBar>
        );
    } else {
        if (quantityOfProducts <= 0) {
            return (
                <PageBar>
                    <PieceNothingFoundProducts />
                </PageBar>
            );
        } else {
            return (
                <PageBar>
                    <PiecePageBarContainerModel />
                        {children}
                    <PiecePageBarContainerModel />
                </PageBar>
            );
        }
    }
};

export default TemplatePageBar;