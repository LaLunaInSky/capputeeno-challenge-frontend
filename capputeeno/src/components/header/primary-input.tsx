import styled from "styled-components";
import { SearchIcon } from "./search-icon";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const PrimaryInput = styled.input`
    width: 352px;
    border-radius: 8px;
    padding: 10px 16px;
    border: none;

    background-color: var(--bg-secondary);

    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0%;
    text-align: left;
    vertical-align: middle;
    color: var(--text-dark);
`

const InputContainer = styled.div`
    position: relative;
    width: 352px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

    input:focus, input:hover {
        outline-width: 1px;
        outline-style: solid;
        outline-color: var(--text-dark);
    }
`

export function PrimaryInputWithSearchIcon(
    props: InputProps
) {

    return (
        
        <InputContainer>

            <PrimaryInput
                {...props}
            />

            <SearchIcon/>
        </InputContainer>
    )
}