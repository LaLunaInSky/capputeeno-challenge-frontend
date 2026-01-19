"use client"

import styled from "styled-components";

const Main = styled.main`
    background-color: var(--shapes-light);

    /* padding-top: 25px; */

    padding-top: 105px;

    /* margin-top: 80px; */

    display: flex;
    justify-content: center;
    align-items: start;

    min-width: 100vw;
    min-height: 100vh;

    @media (max-width: 500px) {
            margin-top: 56px;
    }
`

const ContainerMain = styled.div`
    width: 1120px;

    @media (max-width: 1120px) {
        width: 95vw;
    }
` 

const TemplateMain = ({
    children
} : React.PropsWithChildren) => {
    return (
        <Main>
            <ContainerMain>
                { children }
            </ContainerMain>
        </Main>
    );
};

export default TemplateMain;