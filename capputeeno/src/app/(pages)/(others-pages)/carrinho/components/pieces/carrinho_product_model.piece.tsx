"use client"

import HookUseLocalStorage from "@/app/contexts/hooks/use_local_storage.hook";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import IconTrash from "../icons/trahs.icon";
import { useState } from "react";
import PieceCarrinhoProductQuantityButtonInput from "./carrinho_product_quantity_button_input.piece";
import FunctionFormatPrice from "@/app/contexts/functions/format_price.function";

interface CarrinhoProductModelProps {
    id: string,
    name: string,
    image_url: string,
    description: string,
    quantity: number,
    total_price: number
}

const CarrinhoProductModel = styled.div`
    width: 100%;
    height: 211px;

    display: flex;
    justify-content: start;
    align-items: center;

    background-color: white;

    border-radius: 8px;

    overflow: hidden;

    @media (max-width: 530px) {
        width: 80%;
        height: auto;

        flex-direction: column;
    }
`

const ProductImage =  styled.img`
    width: 35%;
    height: 211px;

    background-color: var(--orange-brand);

    @media (max-width: 530px) {
        width: 211px;

        border-radius: 0px 0px 4px 4px;
    }
`

const ProductInfos = styled.div`
    width: 65%;
    height: 100%;

    padding: 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 530px) {
        width: 100%;
    }
`

const ContainerProductNameAndIconTrash = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: inherit;

    h1 {
        font-family: inherit;
        font-weight: 300;
        font-size: 20px;
        line-height: 150%;
        letter-spacing: 0%;
        vertical-align: middle;

        color: var(--inputs-and-icons);
    }
`

const ContainerQuantityProductAndTotalPrice = styled.div`
    width: 100%;
    height: 40px;

    display: flex;
    justify-content: space-between;

    font-family: inherit;

    margin-top: 25px;

    h2 {
        height: 24px;

        font-family: inherit;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0%;
        text-align: right;
        vertical-align: middle;

        color: var(--shapes-dark);
    }
`

const ProductDescription = styled.p`
    width: 98%;
    height: 64px;

    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;

    margin-top: 12px;

    color: var(--inputs-and-icons);

    @media (max-width: 530px) {
        height: auto;
    }
`

const ProductButtonDelete = styled.button`
    width: 24px;
    height: 24px;

    cursor: pointer;

    border: none;
    background-color: transparent;

    display: flex;
    justify-content: center;
    align-items: center;
`

const PieceCarrinhoProductModel = ({
    id,
    name,
    image_url,
    description,
    quantity,
    total_price,
} : CarrinhoProductModelProps) => {
    const {
        deleteItem
    } = HookUseLocalStorage();

    const [
        colorIconTrash,
        setColorIconTrash
    ] = useState(
        "#DE3838"
    );

    const router = useRouter();

    const DeletProduct = () => {
        deleteItem(
            id
        );

        router.refresh();
    };

    return (
        <CarrinhoProductModel>
            <ProductImage 
                src={image_url}
            />
            <ProductInfos>
                <ContainerProductNameAndIconTrash>
                    <h1>
                        {name}
                    </h1>
                    <ProductButtonDelete
                        onClick={DeletProduct}
                        onMouseEnter={() => {
                            setColorIconTrash(
                                "#b06565c3"
                            );
                        }}
                        onMouseLeave={() => {
                            setColorIconTrash(
                                "#DE3838"
                            );
                        }}
                    >
                        <IconTrash 
                            color_icon={colorIconTrash}
                        />
                    </ProductButtonDelete>
                </ContainerProductNameAndIconTrash> 
                <ProductDescription>
                    {description}
                </ProductDescription>
                <ContainerQuantityProductAndTotalPrice>
                    <PieceCarrinhoProductQuantityButtonInput 
                        quantity={quantity}
                        id={id}
                    />
                    <h2>
                        {FunctionFormatPrice(total_price)}
                    </h2>
                </ContainerQuantityProductAndTotalPrice>
            </ProductInfos>
        </CarrinhoProductModel>
    );
};

export default PieceCarrinhoProductModel;