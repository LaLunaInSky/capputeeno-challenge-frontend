"use client"

import styled from "styled-components"
import { BackInput } from "./back-input/back-input"
import { useQuery } from "@tanstack/react-query"
import { GET_FETCHER_PRODUCTS } from "@/hooks/querrys/fetchers/get-fetcher-products"
import { GET_QUERY_PRODUCT } from "@/hooks/querrys/get-query-product"
import { formatPrice } from "@/utils/format-price"
import { AddToCart } from "./add-to-cart-input/add-to-cart-input"

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
const TagProductInfos = styled.div`
    width: 448px;
    height: 580px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;

    @media (max-width: 1154px) {
        width: 40%;
        height: 90%;
    }
    
    @media (max-width: 820px) {
        height: 80%;
    }

    @media (max-width: 770px) {
        width: 80%;
        height: 450px;
    }
`

const ContainerDivProductInfos = styled.div`
    width: 100%;
    height: 536px;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    gap: 12px;
`

const TagCategory = styled.p`
    width: 100%;
    height: 24px;

    font-family: inherit;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;

    color: var(--inputs-and-icons);
`

const TagName = styled.h1`
    width: 100%;
    height: 48px;

    font-family: inherit;
    font-weight: 300;
    font-size: 32px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;

    color: var(--inputs-and-icons);
    
    @media (max-width: 1154px) {
        height: auto;
    }
`

const TagPrice = styled.h2`
    width: 150px;
    height: 30px;

    margin-top: -8px;

    font-family: inherit;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;

    color: var(--shapes-dark);
`

const TagShippingInformation = styled.p`
    width: 100%;
    height: 18px;

    margin-top: 12px;

    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;

    color: var(--inputs-and-icons);

    @media (max-width: 770px) {
        height: auto;
    }
`

const ContainerDescription = styled.div`
    width: 100%;
    height: 88px;

    margin-top: 46px;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    gap: 8px;

    font-family: inherit;

    h2 {
        font-family: inherit;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0%;
        vertical-align: middle;
        text-transform: uppercase;
        text-align: start;

        color: var(--text-dark);
    }

    p {
        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: 0%;
        vertical-align: middle;

        color: var(--text-dark);
    }
`

export function ProductPage(
    props: ProductPageProps
) {
    const idPage = props?.idProduct;

    const {
        data
    } = useQuery({
        queryFn: () => GET_FETCHER_PRODUCTS(
            GET_QUERY_PRODUCT(
                idPage ?? ""
            )
        ),
        queryKey: ['products', idPage]
    })
    
    const product = data?.data?.data?.allProducts[0] ?? {
        name: "",
        image_url: "",
        category: "mugs",
        price_in_cents: 1000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae accusamus vero est eum temporibus provident nulla quidem deserunt facilis cumque beatae non incidunt dicta culpa doloribus neque nihil, optio nemo."
    };

    return (
        <TagProductPage>
            <BackInput/>
            <ContainerProductInfos>
                <ImageProduct 
                    src={product.image_url}
                />
                <TagProductInfos>
                    <ContainerDivProductInfos>
                        <TagCategory>
                            {product.category === "t-shirts" ? "Camiseta" : "Caneca"}
                        </TagCategory>
                        <TagName>
                            {product.name}
                        </TagName>
                        <TagPrice>
                            {formatPrice(
                                product.price_in_cents
                            )}
                        </TagPrice>
                        <TagShippingInformation>
                            *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.
                        </TagShippingInformation>
                        <ContainerDescription>
                            <h2>
                                descrição
                            </h2>
                            <p>
                                {product.description}
                            </p>
                        </ContainerDescription>
                    </ContainerDivProductInfos>
                    <AddToCart 
                        product={product}
                        id={idPage}
                    />
                </TagProductInfos>
            </ContainerProductInfos>
        </TagProductPage>       
    )
}