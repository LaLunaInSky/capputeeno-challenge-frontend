"use client"

import FunctionFormatPrice from "@/app/contexts/functions/format_price.function";
import styled from "styled-components";
import PieceAddToCartButtonInput from "./add_to_cart_button_input.piece";

interface PieceProductInfosModelProps {
    id: string,
    image_url: string,
    category: string,
    name: string,
    price_in_cents: number,
    description: string,
}

const ProductInfosModel = styled.div`
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

const ProductImage = styled.img`
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

const ProductInfos = styled.div`
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

const ProductCategory = styled.p`
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

const ProductName = styled.h1`
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

const ProductPrice = styled.h2`
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

const ProductShippingInformation = styled.p`
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

const ProductDescription = styled.div`
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

const PieceProductInfosModel = ({
    id,
    image_url,
    category,
    name,
    price_in_cents,
    description
} : PieceProductInfosModelProps) => {

    const productShippingInformation = "*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.";

    return (
        <ProductInfosModel>
            <ProductImage
                src={image_url}
            />
            <ProductInfos>
                <ContainerProductInfos>
                    <ProductCategory>
                        {category === "t-shirts" ? "Camiseta" : "Caneca"}
                    </ProductCategory>
                    <ProductName>
                        {name}
                    </ProductName>
                    <ProductPrice>
                        {FunctionFormatPrice(
                            price_in_cents
                        )}
                    </ProductPrice>
                    <ProductShippingInformation>
                        {productShippingInformation}
                    </ProductShippingInformation>
                    <ProductDescription>
                        <h2>
                            descrição
                        </h2>
                        <p>
                            {description}
                        </p>
                    </ProductDescription>
                </ContainerProductInfos>
                <PieceAddToCartButtonInput 
                    id={id}
                    name={name}
                    image_url={image_url}
                    description={description}
                    price_in_cents={price_in_cents}
                />
            </ProductInfos>
        </ProductInfosModel>
    );
};

export default PieceProductInfosModel;