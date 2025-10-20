"use client"

import styled from "styled-components"
import { BackInput } from "./back-input/back-input"
import { useProduct } from "@/hooks/product-page/useProduct"
import { ProductInfos } from "./product-infos/product-infos"
import { NotFoundPage } from "./not-found-page/not-found-page"

interface ProductPageProps {
    idProduct: string
}

const TagProductPage = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
`

const ContainerProductInfos = styled.div`
    width: 100%;
    height: 580px;

    margin-top: 22px;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 32px;

    @media (max-width: 770px) {
        flex-direction: column;
        
        height: auto;

        margin-bottom: 50px;
    }
`

const ImageProduct = styled.img`
    width: 640px;
    height: 580px;

    border-radius: 4px;

    background-color: var(--orange-brand);

    @media (max-width: 1154px) {
        width: 50%;
        height: 90%;
    }

    @media (max-width: 820px) {
        height: 80%;
    }

    @media (max-width: 770px) {
        width: 70%;
        height: 40%;
    }

    @media (max-width: 540px) {
        width: 80%;
    }
`

export function ProductPage(
    props: ProductPageProps
) {
    const {
        data
    } = useProduct(props.idProduct);

    if (
        data === undefined || data === null
    ) {
        return (
            <NotFoundPage />
        )
    } else {
        return (
            <TagProductPage>
                <BackInput/>
                <ContainerProductInfos>
                    <ImageProduct 
                        src={`${data?.image_url}`}
                    />
                    <ProductInfos 
                        product={data}
                        id={props.idProduct}
                    />
                </ContainerProductInfos>
            </TagProductPage>       
        )
    }

}