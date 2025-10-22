import { useLocalStorage } from "@/hooks/local-storage/useLocalStorage"
import { formatPrice } from "@/utils/format-price"
import styled from "styled-components"

const ContainerOrderTotal = styled.div`
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

export function OrderTotal() {
    const {
        getTotalPrice
    } = useLocalStorage();
    
    const totalPrice = getTotalPrice();
    
    const totalOrder = totalPrice + 4000; 

    return (
        <ContainerOrderTotal>
            <h2>
                Total
            </h2>
            <p>
                {formatPrice(
                        totalOrder
                )}
            </p>
        </ContainerOrderTotal>
    )
}