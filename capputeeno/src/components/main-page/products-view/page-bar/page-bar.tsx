import styled from "styled-components"
import { ReactNode, useDeferredValue } from "react"
import { ContainerPageBar } from "./page-container/page-container"
import { NothingFound } from "./nothing-found"
import { useQuery } from "@tanstack/react-query"
import { GET_FETCHER_PRODUCTS } from "@/hooks/querrys/fetchers/get-fetcher-products"
import { useFilter } from "@/utils/filters/useFilter"
import { GET_QUERY_ALL_PRODUCTS_TO_MAIN_PAGE_WITHOUT_PAGE } from "@/hooks/querrys/get-query-all-products-to-main-without-page"

interface PageBarProps {
    children: ReactNode
}

const TagPageBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    align-items: center;
    justify-content: start;

    gap: 32px;

    font-family: inherit;

    margin-bottom: 32px;
`

export function PageBar({
    children
} : PageBarProps ) {
    const {
        type,
        organize,
        page,
        search,
        numberOfPages,
        setNumberOfPages,
        setPage
    } = useFilter();

    const searchDeferred = useDeferredValue(
        search
    ).toLowerCase();

    const {
        data
    } = useQuery({
        queryFn: () => GET_FETCHER_PRODUCTS(
            GET_QUERY_ALL_PRODUCTS_TO_MAIN_PAGE_WITHOUT_PAGE(
                type,
                organize
            )
        ),
        queryKey: ['products', type, organize, searchDeferred]
    })

    let products = data?.data?.data?.allProducts ?? [];

    products = products?.filter(
        product => product.name.toLowerCase().includes(searchDeferred)
    );

    const quantityOfProducts = products?.length;

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

    if (quantityOfProducts <= 0) {
        return <NothingFound />
    } else {
        return (
            <TagPageBar> 
                <ContainerPageBar />
                {children}
                <ContainerPageBar />
            </TagPageBar>
        )
    }

}