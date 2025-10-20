import styled from "styled-components"
import { BackInput } from "../back-input/back-input"

const ContainerNotFoundPage = styled.div`
    
`

const TagNotFoundPage = styled.p`
    font-family: inherit;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    text-align: center;
    text-transform: uppercase;

    margin-top: 50px;

    color: var(--text-dark);
`

export function NotFoundPage() {
    return (
        <ContainerNotFoundPage>
            <BackInput />
            <TagNotFoundPage>
                página não encontrada
            </TagNotFoundPage>
        </ContainerNotFoundPage>
    )
}