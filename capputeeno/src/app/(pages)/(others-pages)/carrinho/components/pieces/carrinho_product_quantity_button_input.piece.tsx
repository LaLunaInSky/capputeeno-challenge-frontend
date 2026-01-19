"use client"

import HookUseLocalStorage from "@/app/contexts/hooks/use_local_storage.hook";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface PieceCarrinhoProductQuantityButtonInputProps {
    quantity: number,
    id: string,
}

const CarrinhoProductQuantityButtonInput = styled.select`
    width: 65px;
    height: 40px;

    border: 1px solid var(--border-text-dark);
    border-radius: 8px;

    background-color: var(--bg-second);

    padding: 1px;

    font-family: inherit;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;

    color: var(--text-dark);
    
    & > option {
        cursor: pointer;
    }
`

const PieceCarrinhoProductQuantityButtonInput = ({
    quantity,
    id,
} : PieceCarrinhoProductQuantityButtonInputProps) => {
    const {
        updateTheQuantity
    } = HookUseLocalStorage();
    
    const router = useRouter();

    const limitOptions = 10;

    const quantityOptions: number[] = [];

    for (
        let i = 1;
        i <= limitOptions;
        i ++
    ) {
        quantityOptions.push(
            i
        )
    }

    const [
        value, 
        setValue
    ] = useState(
        quantity
    );

    const ChangeValue = (
        newValue: number
    ) => {
        setValue(
            newValue
        );
        console.log("entrou")
        
        updateTheQuantity(
            newValue,
            id
        );

        router.refresh();
    }

    return (
        <CarrinhoProductQuantityButtonInput
            name="quantity" 
            id="quantity" 
            defaultValue={value}
            onChange={(event) => {
                console.log("trocou")
                console.log(event.target.value)
                ChangeValue(Number(event.target.value))
            }}
        >
            {quantityOptions.map(
                (number) => (
                    <option 
                        key={`option_with_number_${number}`}
                        value={`${number}`}
                    >
                        {number}
                    </option>
                )
            )}
        </CarrinhoProductQuantityButtonInput>
    );
};

export default PieceCarrinhoProductQuantityButtonInput;