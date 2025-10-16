"use client"

import { styled } from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInputWithSearchIcon } from "./primary-input";
import { CartControl } from "./cart-control";

const sairaStencilOne = Saira_Stencil_One(
  {
    weight: ['400'],
    subsets: ['latin']
  }
)

interface HeaderProps {

}

const TagHeader = styled.header`
    position: fixed;
    width: 100vw;

    z-index: 10;

    background-color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 80px;
    padding: 16px 8px;
`

const ContainerHeader = styled.div`
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 1120px;

    @media (max-width: 1120px) {
        width: 95vw;
    }
    
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }
`

const Logo = styled.a`
    color: var(--logo-color);
    font-size: 40px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0%;
`

export function Header(
    props: HeaderProps
) {

    return (

        <TagHeader>
            <ContainerHeader>    
                <Logo
                    className={sairaStencilOne.className}
                >
                    capputeeno
                </Logo>

                <div>
                    <PrimaryInputWithSearchIcon
                        placeholder="
                            Procurando por algo específico?
                        "
                    />

                    <CartControl/>
                </div>
            </ContainerHeader>
        </TagHeader>
    )
}