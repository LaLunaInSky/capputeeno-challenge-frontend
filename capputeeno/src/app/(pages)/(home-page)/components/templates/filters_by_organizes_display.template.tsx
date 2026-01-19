"use client"

import FilterProjectsDisplayOrganizes from "@/app/contexts/filters/projects_display_organizes.filter";
import UseFilterContextProjectDisplay from "@/app/contexts/filters/uses/context_projects_display.filter.use";
import styled from "styled-components";

const FiltersByOrganizesDisplay = styled.ul`
    width: 176px;
    height: 132px;
    border-radius: 4px;
    background-color: white;
    padding: 12px 0px;

    box-shadow: 0px 4px 12px 0px #0000001A;

    right: 0px;

    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    z-index: 5;

    list-style: none;
`

const FilterOrganizeItem = styled.li`
    width: 144px;
    height: 24px;

    text-align: start;
    vertical-align: middle;

    color: var(--text-dark);
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;

    cursor: pointer;

    &:hover {
        color: var(--orange-low);
    }
`

const TemplateFiltersByOrganizesDisplay = () => {
    const {
        setOrganize
    } = UseFilterContextProjectDisplay();

    const filtersOrganizes = [
        [
            "Organizar por", FilterProjectsDisplayOrganizes.NONE
        ],
        [
            "Novidades", FilterProjectsDisplayOrganizes.NEWS
        ],
        [
            "Preço: Maior - menor", FilterProjectsDisplayOrganizes.HIGHEST_TO_LOWEST_PRICE
        ],
        [
            "Preço: Menor - maior", FilterProjectsDisplayOrganizes.LOWEST_TO_HIGHEST_PRICE
        ],
        [
            "Mais vendidos", FilterProjectsDisplayOrganizes.BEST_SELLERS
        ]
    ];

    return (
        <FiltersByOrganizesDisplay>
            {filtersOrganizes.map(
                (filterItem) => (
                    <FilterOrganizeItem
                        key={`filter_organize_item_${filterItem[0]}`}
                        onClick={() => {
                            setOrganize(
                                filterItem[1] as FilterProjectsDisplayOrganizes
                            )
                        }}
                    >
                        {filterItem[0]}
                    </FilterOrganizeItem>
                )
            )}
        </FiltersByOrganizesDisplay>
    );
};

export default TemplateFiltersByOrganizesDisplay;