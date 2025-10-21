import { useLocalStorage } from "@/hooks/useLocalStorage"
import { formatPrice } from "@/utils/format-price"
import styled from "styled-components"

const ContainerSubtotalAndDeliveryInfo = styled.div`
    width: 100%;

    margin-top: 29px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 12px;
`

const TagItem = styled.div`
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

export function SubTotalAndDeliveryInfo() {
    const {
        getTotalPrice
    } = useLocalStorage();

    const totalPrice = getTotalPrice();

    return (
        <ContainerSubtotalAndDeliveryInfo>
            <TagItem>
                <h2>
                    Subtotal de produtos
                </h2>
                <p>
                    {`R$ ${
                        formatPrice(
                            totalPrice
                        )
                    }`}
                </p>
            </TagItem>
            <TagItem>
                <h2>
                    Entrega
                </h2>
                <p>
                    {`R$ ${
                        formatPrice(
                            4000
                        )
                    }`}
                </p>
            </TagItem>
        </ContainerSubtotalAndDeliveryInfo>
    )
}