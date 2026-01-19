"use client"

import { useRouter } from "next/navigation";
import { InputHTMLAttributes, useEffect, useState } from "react";
import styled from "styled-components";
import IconSearch from "../icons/search.icon";
import IconSearchClose from "../icons/search_close.icon";

interface PieceSearchBarInputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
    hangleChange: (value: string) => void
}

interface SearchInputFocus {
    focus: boolean
}

const SearchBar = styled.div<SearchInputFocus>`
    display: flex;
    justify-content: space-around;
    align-items: center;    
    width: 352px;
    border-radius: 8px;
    background-color: var(--bg-primary);
    overflow: hidden;

    outline-width: ${props => props.focus ? "1px" : "0px"};
    outline-style: solid;
    outline-color: var(--text-dark);

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: 42px;
        height: 42px;
    }

    input:focus {
        outline-width: 0px;
        outline-style: solid;
        outline-color: var(--text-dark);
    }

    &:hover {
        outline-width: 1px;
        outline-style: solid;
        outline-color: var(--text-dark);
    }

    @media (max-width: 690px) {
        input {
            visibility: ${props => props.focus ? "visible" : "hidden"}
        }

        div {
            position: ${props => props.focus ? "relative" : "absolute"};
        }

        /* justify-content: center; */
        position:  ${props => props.focus ? "absolute" : "relative"};
        left: 0px;
        width: ${props => props.focus ? "100%" : "42px"};
        z-index: ${props => props.focus ? "20" : "0"};
    }
`

const Input = styled.input/*<SearchInputShow>*/`
    width: 100%;
    padding: 10px 55px 10px 16px;
    border: none;
    background-color: var(--bg-primary);

    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0%;
    text-align: left;
    vertical-align: middle;
    color: var(--text-dark);

    @media (min-width: 441px) and (max-width: 665px) {
        padding: 10px 16px;
    }
`

const PieceSearchBarInput = (
    props: PieceSearchBarInputProps
) => {
    const [
        searchBarInputFocus,
        setSearchBarInputFocus
    ] = useState<boolean>(
        false
    );

    const ChangeFocusInput = () => {
        setSearchBarInputFocus(
            (prev) => !prev
        )
    }

    const router = useRouter();

    return (
        <SearchBar
            focus={searchBarInputFocus}
        >
            <Input
                onChange={(event) => {
                    props.hangleChange(
                        event.target.value
                    )
                }}
                {...props}
                onKeyDown={() => {
                    router.push("/")
                }}
                onFocus={() => {
                    setSearchBarInputFocus(true);
                }}
                onBlur={() => {
                    setSearchBarInputFocus(false)
                }}
            />
            <div
                onClick={ChangeFocusInput}
            >
                {searchBarInputFocus && (
                    <IconSearchClose />
                )}
                {!searchBarInputFocus && (
                    <IconSearch />
                )}
            </div>
        </SearchBar>
    );
};

export default PieceSearchBarInput;