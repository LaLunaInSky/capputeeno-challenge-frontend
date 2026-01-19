"use client"

import FetcherGetProduct from "@/app/contexts/fetchers/get_product.fetcher";
import QueryGetAnProductById from "@/app/contexts/queries/get_an_product_by_id.query";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import styled from "styled-components";
import PieceBackButtonInput from "../pieces/back_button_input.piece";
import PiecePageLoadingModel from "../pieces/page_loading_model.piece";
import PieceNothingFoundProduct from "../pieces/nothing_found_product.piece";
import PieceProductInfosModel from "../pieces/product_infos_model.piece";

const Product = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
`

const TemplateProduto = () => {
    const searchParams = useSearchParams();
    
    const idPage = searchParams.get('id') as string ?? "";

    const {
        data,
        isLoading
    } = useQuery({
        queryFn: () => FetcherGetProduct(
            QueryGetAnProductById(
                idPage
            )
        ),
        queryKey: ['Product', idPage]
    })
    
    const product = data?.data?.data?.Product;

    return (
        <Product>
           <PieceBackButtonInput />
            {isLoading && (
                <PiecePageLoadingModel />
            )}
            {!isLoading && product && (
                <PieceProductInfosModel 
                    id={product.id}
                    image_url={product.image_url}
                    category={product.category}
                    name={product.name}
                    price_in_cents={product.price_in_cents}
                    description={product.description}
                />
            )}
            {!isLoading && !product && (
                <PieceNothingFoundProduct />
            )}
        </Product>
    );
};

export default TemplateProduto;