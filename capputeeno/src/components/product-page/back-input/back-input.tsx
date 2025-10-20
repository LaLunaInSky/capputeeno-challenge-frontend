"use client"

import styled from "styled-components"
import { BackIcon } from "./icons/back-icon"
import { Saira } from "next/font/google";
import { useRouter } from "next/navigation";

const saira = Saira(
  {
    weight: ['500'],
    subsets: ['latin']
  }
)

const ContainerBackButton = styled.button`
    width: 72px;
    height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    cursor: pointer;

    border: none;
    background-color: transparent;

    p {
        font-family: inherit;
        font-weight: 500;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: 0%;
        vertical-align: middle;

        color: var(--text-secondary);
    }
`

export function BackInput() {
    const router = useRouter();

    return (
        <ContainerBackButton
            className={saira.className}
            onClick={() => {
                router.push("/")

            }}
        >
            <BackIcon />
            <p>
                Voltar
            </p>
        </ContainerBackButton>
    )
}