import { ProductsFetchResponse } from "@/types/products/main-page/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { mountQuerry } from "@/utils/main-page/graphql-filters";
import { useDeferredValue } from "react";
import { SetTotalPages } from "@/utils/main-page/set-total-pages";
import { SetPagesList } from "@/utils/main-page/set-pages-list";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (
    query: string
) : AxiosPromise<ProductsFetchResponse> => {
    return axios.post(
        API_URL, 
        {query}
    )
}

export function useProducts() {
    const {
        type,
        organize,
        search,
        page,
        numberOfPages,
        setPage
    } = useFilter();

    const searchDeferred = useDeferredValue(search).toLowerCase();

    const query = mountQuerry(type, organize);

    const {
        data
    } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products', type, organize, searchDeferred, page]
    })

    const products = data?.data?.data?.allProducts;

    const filteredProducts = products?.filter(
        product => product.name.toLowerCase().includes(searchDeferred)
    );

    if (
        page > numberOfPages
    ) {
        setPage(
            numberOfPages - 1
        )
    }

    if (searchDeferred == '') {
        SetTotalPages(
            products
        );

        const productsPerPages  = SetPagesList(
            products
        );
        
        return {
            data: productsPerPages[page]
        };
    } else {
        SetTotalPages(
            filteredProducts
        );

        const productsPerPages  = SetPagesList(
            filteredProducts
        );

        return {
            data: productsPerPages[page]
        };
    }
}