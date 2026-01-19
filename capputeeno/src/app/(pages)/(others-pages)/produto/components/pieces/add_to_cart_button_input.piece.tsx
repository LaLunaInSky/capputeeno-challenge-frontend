"use client"

import HookUseLocalStorage from "@/app/contexts/hooks/use_local_storage.hook";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import IconCartWhite from "../icons/cart_white.icon";

interface PieceAddToCartButtonInputProps {
    id: string,
    name: string,
    image_url: string,
    description: string,
    price_in_cents: number
}

const AddToCartButtonInput = styled.button`
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

const InfoCartInput = styled.p`
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

const PieceAddToCartButtonInput = ({
    id,
    name,
    image_url,
    description,
    price_in_cents,
} : PieceAddToCartButtonInputProps) => {
    const router = useRouter();
    
    const {
        addItemToLocalStorage
    } = HookUseLocalStorage();

    const handleClick = () => {
        addItemToLocalStorage(
            {
                id: id,
                name: name,
                image_url: image_url,
                description: description,
                price_in_cents: price_in_cents
            }
        );

        router.refresh()
    }

    return (
        <AddToCartButtonInput
            onClick={handleClick}
        >
            <IconCartWhite />
            <InfoCartInput>
                adicionar ao carrinho
            </InfoCartInput>
        </AddToCartButtonInput>
    );
};

export default PieceAddToCartButtonInput;