import { useFilter } from "@/hooks/main-page/useFilter"
import { FilterTypes } from "@/types/filters/filter-types"
import styled from "styled-components"

interface FilterItemProps {
    selected: boolean
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: left;    
    gap: 39px;

    list-style-type: none;

    @media (max-width: 500px) {
        gap: 24px;
    }

    @media (max-width: 645px) {
        gap: 28px;
        margin-bottom: 15px;
    }
`

const FilterItem = styled.li<FilterItemProps>`
    padding: 2px;    
    cursor: pointer;
    
    font-family: inherit;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;
    
    height: ${props => props.selected ? '28px' : '26px'};
    color: ${props => props.selected ? 'var(--inputs-and-icons)' : 'var(--text-dark)'};
    border-bottom: ${props => props.selected ? '3px solid var(--orange-low)' : ''};
    font-weight: ${props => props.selected ? '600' : '400'};

    &:hover {
        color: ${props => props.selected ? '' : 'var(--orange-low)'};
        border-bottom: ${props => props.selected ? '' : '1px solid var(--orange-low)'};
    }

    @media (max-width: 500px) {
        font-size: 14px;
    }
`

export function FilterByType() {
    const {
        type,
        setType
    } = useFilter();

    const handleChangeType = (
        value: FilterTypes
    ) => {
        setType(
            value
        );
    }

    return (
        <FilterList>
            <FilterItem
                selected={
                    type === FilterTypes.ALL ? true : false
                }
                onClick={() => {
                    handleChangeType(
                        FilterTypes.ALL
                    )
                }}
            >
                todos os produtos
            </FilterItem>
            <FilterItem
                selected={
                    type === FilterTypes.SHIRT ? true : false
                }
                onClick={() => {
                    handleChangeType(
                        FilterTypes.SHIRT
                    )
                }}
            >
                camisetas
            </FilterItem>
            <FilterItem
                selected={
                    type === FilterTypes.MUG ? true : false
                }
                onClick={() => {
                    handleChangeType(
                        FilterTypes.MUG
                    )
                }}
            >
                canecas
            </FilterItem>
        </FilterList>
    )
}