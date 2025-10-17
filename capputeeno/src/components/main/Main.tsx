"use client"

import { ReactNode } from "react";
import styled from "styled-components";

const TagMain = styled.main`
    background-color: var(--shapes-light);

    padding-top: 25px;

    margin-top: 80px;

    display: flex;
    justify-content: center;
    align-items: start;

    width: 100vw;
    min-height: 100vh;
`

const ContainerMain = styled.div`
    width: 1120px;

    @media (max-width: 1120px) {
        width: 95vw;
    }
` 

interface MainProps {
    children: ReactNode
}

export function Main({
    children
} : MainProps) {

    return (
        <TagMain>
            <ContainerMain>
                {children}
            </ContainerMain>
        </TagMain>
    )
}