"use client"

import styled from "styled-components"
import UseFilterContextProjectDisplay from "@/app/contexts/filters/uses/context_projects_display.filter.use"
import IconArrowRight from "../icons/arrow_rigth.icon"
import IconArrowLeft from "../icons/arrow_left.icon"

interface PageBarArrowProps {
    disabled: boolean
}

const PageBarArrows = styled.div`
    display: flex;
    gap: 4px;
`

const PageItem= styled.button<PageBarArrowProps>`
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

const PiecePageBarArrows = () => {
    const {
        page,
        numberOfPages,
        setPage
    } = UseFilterContextProjectDisplay();

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
        <PageBarArrows>
            <PageItem
                disabled={page === 0 ? true : false}
                onClick={handleMinorPageShift}
            >
                <IconArrowLeft />
            </PageItem>
            <PageItem
                disabled={page === (numberOfPages - 1) ? true : false}
                onClick={handleMajorPageShift}
            >
                <IconArrowRight />
            </PageItem>
        </PageBarArrows>
    );
};

export default PiecePageBarArrows;