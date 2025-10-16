import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./cart-icon";
import styled from "styled-components";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;

    background-color: var(--delete-color);
    color: white;

    position: absolute;
    right: -7px;
    top: 50%;

    font-family: inherit;
    font-weight: 500;
    font-size: 10px;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    line-height: 17px;

`

const Container = styled.div`
    position: relative;
`

export function CartControl() {
    const {
        value
    } = useLocalStorage(
        'cart-items',
        [1, 1]
    )
    
    return (
        <Container>
            <CartIcon/>
            { value.length > 0 &&
                <CartCount>
                    {value.length}
                </CartCount>
            }
        </Container>
    )
}