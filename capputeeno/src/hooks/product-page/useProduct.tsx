import { ProductFetchResponse } from "@/types/products/product-page/product-reponse";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (
    query: string
) : AxiosPromise<ProductFetchResponse> => {
    return axios.post(
        API_URL,
        {
            query: `query {
                        Product(
                            id: "${query}"
                        ) {
                            id
                            name
                            description
                            image_url
                            category
                            price_in_cents
                        }
                    }
                `
        }
    )
}

export function useProduct(
    idProduct: string
) {
    const {data} = useQuery({
        queryFn: () => fetcher(idProduct),
        queryKey: ['product', idProduct],
        enabled: !!idProduct
    })

    return {
        data: data?.data?.data?.Product
    }
}