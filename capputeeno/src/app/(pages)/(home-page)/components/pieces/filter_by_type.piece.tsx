"use client"

import FilterProjectsDisplayTypes from "@/app/contexts/filters/projects_display_types.filter";
import UseFilterContextProjectDisplay from "@/app/contexts/filters/uses/context_projects_display.filter.use";
import styled from "styled-components";

interface FilterItemProps {
    selected: boolean
}

const FilterByType = styled.ul`
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

const PieceFilterByType = () => {
    const {
        type,
        setType
    } = UseFilterContextProjectDisplay();

    const items = [
        [
            "todos os produtos", FilterProjectsDisplayTypes.ALL
        ],
        [
            "camisetas", FilterProjectsDisplayTypes.TSHIRTS
        ],
        [
            "canecas", FilterProjectsDisplayTypes.MUGS
        ]
    ]

    return (
        <FilterByType>
            {items.map(
                (item) => (
                    <FilterItem
                        key={`item_${item[0]}`}
                        selected={
                            type === item[1] ? true : false
                        }
                        onClick={() => {
                            setType(
                                item[1] as FilterProjectsDisplayTypes
                            );
                        }}
                    >
                        { item[0] }
                    </FilterItem>
                )
            )}
        </FilterByType>
    );
};

export default PieceFilterByType;