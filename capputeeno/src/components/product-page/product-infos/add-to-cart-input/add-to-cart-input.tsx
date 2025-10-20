"use client"

import styled from "styled-components"
import { CartIconWhite } from "./icons/cart-icon-white"
import { useLocalStorage } from "@/hooks/useLocalStorage"

interface AddToCartProps {
    product: undefined,
    id: string
}

const AddToCartInput = styled.button`
    width: 100%;
    height: 44px;

    padding: 12px 0px;

    cursor: pointer;

    border: none;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 12px;

    font-family: inherit;

    background-color: var(--blue-brand);

    &:hover {
        background-color: var(--orange-brand);
    }
`

const TagInfoInput = styled.p`
    height: 24px;

    font-family: inherit;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;

    color: var(--shapes-light-background);

`

export function AddToCart(
    props: AddToCartProps
) {
    const {
        addItemToLocalStorage
    } = useLocalStorage();

    return (
        <AddToCartInput
            onClick={() => {
                addItemToLocalStorage(
                    props.product
                )
            }}
        >
            <CartIconWhite />
            <TagInfoInput>
                adicionar ao carrinho
            </TagInfoInput>
        </AddToCartInput>
    )
}