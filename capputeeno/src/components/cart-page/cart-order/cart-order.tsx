import styled from "styled-components"
import { LinksInputs } from "./links-inputs/links-inputs"
import { CartInfos } from "./cart-infos/cart-infos"

const TagCartOrder = styled.div`
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

export function CartOrder() {
    return (
        <TagCartOrder>
            <CartInfos />
            <LinksInputs />
        </TagCartOrder>
    )
}