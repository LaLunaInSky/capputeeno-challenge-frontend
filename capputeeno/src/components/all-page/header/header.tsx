"use client"

import { styled } from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { SearchBarInput } from "./search/search-input";
import { CartControl } from "./cart/cart-control";
import { useFilter } from "@/utils/filters/useFilter";
import { useRouter } from "next/navigation";

const sairaStencilOne = Saira_Stencil_One(
  {
    weight: ['400'],
    subsets: ['latin']
  }
)

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

    @media (max-width: 500px) {
        height: 56px;
    }
`

const ContainerHeader = styled.div`
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 1120px;

    
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
      
        @media (max-width: 500px) {
            gap: 8px;
            margin-right: 4px;
        }
    }
    
    @media (max-width: 1120px) {
        width: 95vw;
    }

    
`

const Logo = styled.a`
    color: var(--logo-color);
    font-size: 40px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0%;

    cursor: pointer;

    @media (max-width: 500px) {
        font-size: 28px;
        margin-left: 4px;
    }
`

export function Header() {
    const {
        search,
        setSearch
    } = useFilter();

    const router = useRouter();

    return (
        <TagHeader>
            <ContainerHeader>    
                <Logo
                    className={sairaStencilOne.className}
                    onClick={() => {
                        router.refresh();
                        router.push("/");
                    }}
                >
                    capputeeno
                </Logo>
                <div>
                    <SearchBarInput
                        value={search}
                        hangleChange={setSearch}
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