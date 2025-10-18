import { useFilter } from "@/hooks/useFilter"
import styled from "styled-components"

interface PageNumberProps {
    selected: boolean
}


const ContainerPagesNumber = styled.div`
    height: 100%;

    display: flex;
    justify-content: start;
    align-items: center;

    gap: 1px;

    margin-right: 8px;
`

const PageItem= styled.button<PageNumberProps>`
    width: 32px;
    height: 32px;

    cursor: ${props => props.selected ? "not-allowed" : "pointer"};

    border: ${props => props.selected ? "1px solid var(--orange-low)" : "none"};
    border-radius: 8px;

    background-color: ${props => props.selected ? "var(--shapes-light-background)" : "var(--shapes-light-gray)"};

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: inherit;
    font-weight: ${props=> props.selected ? "600" : "400"};
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;

    color: ${props => props.selected ? "var(--orange-low)" : "var(--text-dark)"};
    
    &:hover {
        background-color: ${props => props.selected ? "var(--shapes-light-background)" : "var(--text-dark)"};

        color: ${props => props.selected ? "var(--orange-low)" : "var(--shapes-light-gray)"};
    }
`

export function PagesNumbers() {
    const {
        page,
        numberOfPages,
        setPage
    } = useFilter();

    const handleChangedPage = (numberPage: number) => {
        setPage(
            numberPage
        )
    }

    const arrayOptions = [];

    for (
        let i = 0;
        i < numberOfPages;
        i++
    ) {
        arrayOptions.push(i);
    }

    return (
        <ContainerPagesNumber>
            {arrayOptions?.map(number => {
                return (
                    <PageItem
                        key={`button_page_${number}`}
                        selected={page === number ? true : false}
                        onClick={() => {
                            handleChangedPage(number)
                        }}
                    >
                        {number + 1}
                    </PageItem>
                )
            })}
        </ContainerPagesNumber>
    )
}