"use client"

import styled from "styled-components";
import PieceCarrinhoOrderSummary from "../pieces/carrinho_order_summary,piece";
import PieceCarrinhoOrderCompleteThePurchaseInput from "../pieces/carrinho_order_complete_the_purchase_input.piece";

const CarrinhoOrder = styled.div`
    width: 352px;
    height: 700px;

    padding: 16px 24px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;

    background-color: white;

    @media (max-width: 1145px) {
        width: 736px;
        height: auto;

        margin-bottom: 22px;

        flex-direction: row;
        align-items: end;
    }

    @media (max-width: 779px) {
        width: 100%;
    }

    @media (max-width: 575px) {
        width: auto;

        flex-direction: column;

        gap: 50px;

        align-items: start;
    }
`

const ContainerCarrinhoOrderInfos = styled.div`
    width: 304px;
    height: 259px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ContainerCarrinhoOrderLinksInputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    margin-bottom: 12px;

    gap: 12px;

    @media (max-width: 1145px) {
        align-items: end;
    }

    @media (max-width: 575px) {
        align-items: start;
    }
`

const LinkInput = styled.p`
    height: 21px;

    user-select: none;

    font-family: inherit;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    text-transform: uppercase;
    text-decoration: underline;
    text-decoration-style: solid;
    text-decoration-thickness: 0%;

    cursor: pointer;

    color: var(--text-dark);
`

const TemplateCarrinhoOrder = () => {
    const linksInputs = [
        "ajuda",
        "reembolsos",
        "entregas e fretes",
        "trocas e devoluções"
    ];

    return (
        <CarrinhoOrder>
            <ContainerCarrinhoOrderInfos>
                <PieceCarrinhoOrderSummary />
                <PieceCarrinhoOrderCompleteThePurchaseInput />
            </ContainerCarrinhoOrderInfos>
            <ContainerCarrinhoOrderLinksInputs>
                {linksInputs.map(
                    (link) => (
                        <LinkInput
                            key={`link_input_${link}`}
                        >
                            {link}
                        </LinkInput>
                    )
                )}
            </ContainerCarrinhoOrderLinksInputs>
        </CarrinhoOrder>
    );
};

export default TemplateCarrinhoOrder;