import styled from "styled-components"

const ButtonCompleteThePurchase = styled.button`
    width: 100%;
    height: 44px;

    border: none;
    border-radius: 4px;

    font-family: inherit;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;

    cursor: pointer;

    color: var(--shapes-light-background);

    background-color: var(--other-green);
`

export function CompleteThePurchaseInput() {
    return (
        <ButtonCompleteThePurchase>
            finalizar a compra
        </ButtonCompleteThePurchase>
    )
}