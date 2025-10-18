import styled from "styled-components"
import { ReactNode } from "react"
import { ContainerPageBar } from "./page-container/page-container"
import { useProducts } from "@/hooks/useProducts"
import { NothingFound } from "./nothing-found"

interface PageBarProps {
    children: ReactNode
}

const TagPageBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    align-items: center;
    justify-content: start;

    gap: 32px;

    font-family: inherit;

    margin-bottom: 32px;
`

export function PageBar({
    children
} : PageBarProps ) {
    const {
        data
    } = useProducts();

    return (
        <TagPageBar>
            {data?.length > 0 && 
                <ContainerPageBar />
            }
            {children}
            {data?.length <= 0 &&
                <NothingFound />
            }
            {data === undefined &&
                <NothingFound />
            }
            {data?.length > 0 && 
                <ContainerPageBar />
            }
        </TagPageBar>
    )
}