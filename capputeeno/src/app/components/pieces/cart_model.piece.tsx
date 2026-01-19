"use client"

import HookUseLocalStorage from "@/app/contexts/hooks/use_local_storage.hook";
import IconCart from "../icons/cart.icon";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const Cart = styled.div`
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

const QuantityDisplay = styled.div`
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

const PieceCartModel = () => {
    const {
        getCountItems
    } = HookUseLocalStorage();

    const quantityOfItems = getCountItems();

    const router = useRouter();
    
    return (
        <Cart
            onClick={() => {
                router.push("/carrinho");
            }}
        >
            <IconCart />
            {quantityOfItems > 0 && (
                <QuantityDisplay>
                    {quantityOfItems}
                </QuantityDisplay>
            )}
        </Cart>
    );
};

export default PieceCartModel;