import styled from "styled-components"
import { SubTotalAndDeliveryInfo } from "./subtotal-and-delivery-info/subtotal-and-delivery-info"
import { OrderTotal } from "./order-total/order-total"

const ContainerOrderSummary = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
`

const TagOrderSummary = styled.h1`
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

export function OrderSummary() {
    return (
        <ContainerOrderSummary>
            <TagOrderSummary>
                resumo do pedido
            </TagOrderSummary>
            <SubTotalAndDeliveryInfo />
            <SeparatorInfos />
            <OrderTotal />
        </ContainerOrderSummary>
    )
}