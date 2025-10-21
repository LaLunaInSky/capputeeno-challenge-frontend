import styled from "styled-components"
import { LinkInput } from "./link-input/link-input"

const ContainerLinksInputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    margin-bottom: 12px;

    gap: 12px;

    @media (max-width: 1145px) {
        align-items: end;
    }

    @media (max-width: 575px) {
        align-items: start;
    }
`

export function LinksInputs() {
    return (
        <ContainerLinksInputs>
            <LinkInput
                text={"ajuda"}
            />
            <LinkInput 
                text={"reembolsos"}
            />
            <LinkInput 
                text={"entregas e frete"}
            />
            <LinkInput 
                text={"trocas e devoluções"}
            />
        </ContainerLinksInputs>
    )
}