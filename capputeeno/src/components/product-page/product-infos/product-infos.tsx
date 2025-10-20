import { formatPrice } from "@/utils/format-price"
import styled from "styled-components"
import { AddToCart } from "./add-to-cart-input/add-to-cart-input"

interface ProductInfosProps {
    product: undefined,
    id: string
}

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

const ContainerProductInfos = styled.div`
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

export function ProductInfos(
    props: ProductInfosProps
) {
    return (
        <TagProductInfos>
            <ContainerProductInfos>
                <TagCategory>
                    {props?.product?.category === "t-shirts" ? "Camiseta" : "Caneca"}
                </TagCategory>
                <TagName>
                    {props?.product?.name}
                </TagName>
                <TagPrice>
                    {`R$ ${formatPrice(
                        props?.product?.price_in_cents
                    )}`}
                </TagPrice>
                <TagShippingInformation>
                    *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.
                </TagShippingInformation>
                <ContainerDescription>
                    <h2>
                        descrição
                    </h2>
                    <p>
                        {props?.product?.description}
                    </p>
                </ContainerDescription>
            </ContainerProductInfos>
            <AddToCart 
                product={props.product}
                id={props.id}
            />
        </TagProductInfos>
    )
}