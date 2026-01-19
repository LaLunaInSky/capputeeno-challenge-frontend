"use client"

import FunctionFormatPrice from "@/app/contexts/functions/format_price.function";
import HookUseLocalStorage from "@/app/contexts/hooks/use_local_storage.hook";
import styled from "styled-components";

const CarrinhoOrderSummary = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
`

const TitleCarrinhoOrderSummary = styled.h1`
    height: 30px;

    font-family: inherit;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    text-transform: uppercase;

    color: var(--inputs-and-icons);
`

const SeparatorInfos = styled.hr`
    width: 100%;
    height: 1px;

    background-color: var(--shapes-02);
    
    border: none;

    margin-top: 24px;
    margin-bottom: 8px;
`

const CarrinhoOrderSummaryTotalPrice = styled.div`
    width: 100%;
    height: 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h2, p {
        font-family: inherit;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0%;
        vertical-align: middle;

        color: var(--inputs-and-icons);
    }
`

const ContainerSubtotalAndDeliveryInfo = styled.div`
    width: 100%;

    margin-top: 29px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 12px;
`

const ItemInSubTotalAndDelivery = styled.div`
    width: 100%;
    height: 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h2, p {
        font-family: inherit;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0%;
        vertical-align: middle;

        color: var(--inputs-and-icons);
    }
`

const PieceCarrinhoOrderSummary = () => {
    const {
        getTotalPrice
    } = HookUseLocalStorage();

    const totalPrice = getTotalPrice();

    const taxDelivery = 4000;
    
    const totalOrder = totalPrice + taxDelivery;

    return (
        <CarrinhoOrderSummary>
            <TitleCarrinhoOrderSummary>
                resumo do pedido
            </TitleCarrinhoOrderSummary>
            <ContainerSubtotalAndDeliveryInfo>
                <ItemInSubTotalAndDelivery>
                    <h2>
                        Subtotal de produtos
                    </h2>
                    <p>
                        {FunctionFormatPrice(totalPrice)}
                    </p>
                </ItemInSubTotalAndDelivery>
                <ItemInSubTotalAndDelivery>
                    <h2>
                        Entraga
                    </h2>
                    <p>
                        {FunctionFormatPrice(taxDelivery)}
                    </p>
                </ItemInSubTotalAndDelivery>
            </ContainerSubtotalAndDeliveryInfo>
            <SeparatorInfos />
            <CarrinhoOrderSummaryTotalPrice>
                <h2>
                    Total
                </h2>
                <p>
                    {FunctionFormatPrice(totalOrder)}
                </p>
            </CarrinhoOrderSummaryTotalPrice>
        </CarrinhoOrderSummary>
    );
};

export default PieceCarrinhoOrderSummary;