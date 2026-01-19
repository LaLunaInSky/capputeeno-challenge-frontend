"use client"

import HookUseLocalStorage from "@/app/contexts/hooks/use_local_storage.hook";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const CarrinhoOrderCompleteThePurchaseInput = styled.button`
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

const PieceCarrinhoOrderCompleteThePurchaseInput = () => {
    const router = useRouter();
        
    const {
        completeThePurchase
    } = HookUseLocalStorage();

    const handleChanged = () => {
        completeThePurchase();

        alert("Compra concluida com sucesso!!");

        router.replace("/");
    }

    return (
        <CarrinhoOrderCompleteThePurchaseInput
            onClick={handleChanged}
        >
            finalizar a compra
        </CarrinhoOrderCompleteThePurchaseInput>
    );
};

export default PieceCarrinhoOrderCompleteThePurchaseInput;