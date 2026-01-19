"use client"

import styled from "styled-components"
import PieceBackButtonInput from "../pieces/back_button_input.piece";
import HookUseLocalStorage from "@/app/contexts/hooks/use_local_storage.hook";
import FunctionFormatPrice from "@/app/contexts/functions/format_price.function";
import TemplateCarrinhoProductsDisplay from "./carrinho_products_display.template";
import TemplateCarrinhoOrder from "./carrinho_order.template";

const Carrinho = styled.div`
    font-family: inherit;
    width: 100%;
    
    display: flex;
    
    gap: 22px;

    @media (max-width: 1145px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

const ConteinerCarrinhoProductsAndBackButton = styled.div`
    width: 736px;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    @media (max-width: 779px) {
        width: 100%;
    }
`

const TitleCarrinho = styled.h1`
    height: 36px;

    margin-top: 22px;

    user-select: none;

    font-family: inherit;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    text-transform: uppercase;

    color: var(--inputs-and-icons);
    
    margin-bottom: 6px;
`

const CarrinhoTotalProductsAndPrice = styled.p`
    height: 24px;

    font-family: inherit;
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;

    color: var(--inputs-and-icons);

    margin-bottom: 23px;

    span {
        font-family: inherit;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0%;
        vertical-align: middle;

        margin-left: 4px;
    }
`

const TemplateCarrinho = () => {
    const {
        getCountItems,
        getTotalPrice,
    } = HookUseLocalStorage();

    const totalPrice = getTotalPrice();
    const totalProducts = getCountItems();

    return (
        <Carrinho>
            <ConteinerCarrinhoProductsAndBackButton>
                <PieceBackButtonInput />
                <TitleCarrinho>
                    seu carrinho
                </TitleCarrinho>
                <CarrinhoTotalProductsAndPrice>
                    Total ({`${totalProducts} produto${totalProducts != 1 ? "s" : ""}`})
                    <span>
                        {FunctionFormatPrice(totalPrice)}
                    </span>
                </CarrinhoTotalProductsAndPrice>
                <TemplateCarrinhoProductsDisplay />
            </ConteinerCarrinhoProductsAndBackButton>
            {totalProducts > 0 && (
                <TemplateCarrinhoOrder />
            )}
        </Carrinho>
    );
};

export default TemplateCarrinho;