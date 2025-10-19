import styled from "styled-components"
import { ArrowLeftIcon } from "./icons/arrow-left-icon"
import { ArrowRightIcon } from "./icons/arrow-right-icon"
import { useFilter } from "@/hooks/main-page/useFilter"

interface PageArrowProps {
    disabled: boolean
}

const ContainerPagesArrows = styled.div`
    display: flex;
    gap: 4px;
`

const PageItem= styled.button<PageArrowProps>`
    width: 32px;
    height: 32px;

    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};

    border: none;
    border-radius: 8px;

    background-color: var(--shapes-light-gray);

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: ${props => props.disabled ? "" : "var(--text-dark)"};

        color: var(--shapes-light-gray);

        svg {
            filter: ${props => props.disabled ? "" : "brightness(0) saturate(100%) invert(94%) sepia(13%) saturate(75%) hue-rotate(202deg) brightness(100%) contrast(91%)"};
        }
    }
`

export function PagesArrows() {
    const {
        page,
        numberOfPages,
        setPage
    } = useFilter();

    const handleMinorPageShift = () => {
        if (page > 0) {
            setPage(
                page - 1
            )
        }
    }

    const handleMajorPageShift = () => {
        if (page < (numberOfPages - 1)) {
            setPage(
                page + 1
            )
        }
    }

    return (
        <ContainerPagesArrows>
            <PageItem
                disabled={page === 0 ? true : false}
                onClick={handleMinorPageShift}
            >
                <ArrowLeftIcon />
            </PageItem>
            <PageItem
                disabled={page === (numberOfPages - 1) ? true : false}
                onClick={handleMajorPageShift}
            >
                <ArrowRightIcon />
            </PageItem>
        </ContainerPagesArrows>
    )
}