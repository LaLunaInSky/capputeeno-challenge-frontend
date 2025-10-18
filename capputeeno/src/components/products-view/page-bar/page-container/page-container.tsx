import styled from "styled-components"
import { PagesArrows } from "./pages-arrows"
import { PagesNumbers } from "./pages-numbers"

const TagPageBar = styled.div`
    width: 100%;
    height: 32px;

    margin-top: 14px;

    display: flex;
    justify-content: end;
`

export function ContainerPageBar() {
    return (
        <TagPageBar>
            <PagesNumbers />
            <PagesArrows />
        </TagPageBar>
    )
}