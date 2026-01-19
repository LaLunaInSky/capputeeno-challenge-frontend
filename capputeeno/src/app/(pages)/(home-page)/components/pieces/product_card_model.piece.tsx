"use client"

import FunctionFormatPrice from "@/app/contexts/functions/format_price.function";
import { Saira } from "next/font/google";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const saira = Saira(
  {
    weight: [
      '300', '600'
    ],
    subsets: ['latin']
  }
)

interface ProductCardModelProps {
    id: string
    image_url: string,
    name: string,
    price_in_cents: number,
}

const ProductCardModel = styled.button`
    width: 256px;
    height: 378px;
    
    background-color: white;
    backdrop-filter: blur(20px);

    border-radius: 8px 8px 4px 4px;
    border: none;

    display: flex;
    flex-direction: column;

    cursor: pointer;

    &:hover {
        outline: var(--inputs-and-icons) 2px solid;
        outline-offset: 1px;
    }

    overflow: hidden;
`

const ImageProduct = styled.img`
    width: 100%;
    height: 300px;

    background-color: var(--orange-brand);
`

const InfoProduct = styled.div`
    width: 100%;
    height: 78px;

    padding: 8px 12px;

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    gap: 8px;
`

const NameProduct = styled.p`
    width: 100%;
    height: 24px;

    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    text-align: start;

    color: var(--inputs-and-icons);
`

const DividerInfosProduct = styled.hr`
    width: 100%;
    height: 1px;
    
    border: none;

    background-color: var(--shapes-02);
`

const PriceProduct = styled.p`
    width: 100%;
    height: 21px;

    color: var(--shapes-dark);
    
    font-family: inherit;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    text-align: start;
`

const PieceProductCardModel = ({
    id,
    image_url,
    name,
    price_in_cents
} : ProductCardModelProps) => {
    const router = useRouter();

    return (
        <ProductCardModel
            onClick={() => {
                router.push(`/produto?id=${id}`);
            }}
        >
            <ImageProduct 
                src={image_url}
            />
            <InfoProduct
                    className={saira.className}
            >
                <NameProduct>
                    {name}
                </NameProduct>
                <DividerInfosProduct />
                <PriceProduct>
                    {FunctionFormatPrice(
                        price_in_cents
                    )}
                </PriceProduct>
            </InfoProduct>
        </ProductCardModel>
    );
};

export default PieceProductCardModel;