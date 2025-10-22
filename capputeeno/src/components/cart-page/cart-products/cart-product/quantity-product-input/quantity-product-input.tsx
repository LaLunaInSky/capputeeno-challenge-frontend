import { useLocalStorage } from "@/hooks/local-storage/useLocalStorage";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components"

interface QuantityProductInputProps {
    quantity: number,
    id: string
}

const TagQuantityProductInput = styled.select`
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
`

export function QuantityProductInput(
props: QuantityProductInputProps
) {
    const router = useRouter();

    const {
        updateTheQuantity
    } = useLocalStorage();

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
        props?.quantity
    );

    const handleChangeValue = (
        newValue: number
    ) => {
        setValue(
            newValue
        );

        updateTheQuantity(
            newValue,
            props?.id
        );

        router.refresh();
    }

    return (
        <TagQuantityProductInput 
            name="quantity" 
            id="quantity" 
            value={value}
        >
            {quantityOptions.map((number) => {
                return (
                    <option 
                        key={`option-${number}`}
                        value={`${number}`}
                        onClick={() => {
                            handleChangeValue(number)
                        }}
                    >
                        {number}
                    </option>
                )
            })}
        </TagQuantityProductInput>
    )
}