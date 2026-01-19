"use client"

import { Saira_Stencil_One } from "next/font/google";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import PieceCartModel from "../pieces/cart_model.piece";
import PieceSearchBarInput from "../pieces/search_bar_input.piece";
import UseFilterContextProjectDisplay from "@/app/contexts/filters/uses/context_projects_display.filter.use";

const sairaStencilOne = Saira_Stencil_One(
  {
    weight: ['400'],
    subsets: ['latin']
  }
)

const Header = styled.header`
    position: fixed;
    width: 100vw;

    z-index: 10;

    background-color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 80px;
    padding: 16px 8px;

    top: 0px;

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

const TemplateHeader = () => {
    const {
        search,
        setSearch
    } = UseFilterContextProjectDisplay();

    const router = useRouter();

    return (
        <Header>
            <ContainerHeader>
                <Logo
                    className={sairaStencilOne.className}
                    onClick={() => {
                        router.push("/");
                    }}
                >
                    capputeeno
                </Logo>
                <div>
                    <PieceSearchBarInput 
                        value={search}
                        hangleChange={setSearch}
                        placeholder="
                            Procurando por algo específico?
                        "
                    />
                    <PieceCartModel />
                </div>
            </ContainerHeader>
        </Header>
    );
};

export default TemplateHeader;