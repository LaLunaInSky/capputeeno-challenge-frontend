import styled from "styled-components"
import { CompleteThePurchaseInput } from "./complete-the-purchase-input/complete-the-purchase-input"
import { OrderSummary } from "./order-summary/order-summary"

const ContainerCartInfos = styled.div`
    width: 304px;
    height: 259px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export function CartInfos() {
    return (
        <ContainerCartInfos>
            <OrderSummary />
            <CompleteThePurchaseInput />
        </ContainerCartInfos>
    )
}