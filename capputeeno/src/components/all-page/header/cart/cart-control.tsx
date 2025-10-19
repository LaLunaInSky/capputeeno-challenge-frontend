"use client"

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const ContainerCart = styled.div`
    position: relative;
    width: 30px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 4px;

    cursor: pointer;

    &:hover {
        background-color: var(--bg-primary);
    }
`

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

export function CartControl() {
    const {
        value
    } = useLocalStorage(
        'cart-items',
        ["", ""]
    )

    const router = useRouter();
    
    return (
        <ContainerCart
            onClick={() => {
                router.push("/carrinho")
            }}
        >
            <CartIcon/>
            { value.length > 0 &&
                <CartCount>
                    {value.length}
                </CartCount>
            }
        </ContainerCart>
    )
}