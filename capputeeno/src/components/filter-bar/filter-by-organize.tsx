import styled from "styled-components"
import { ArrowDownIcon } from "./arrow-down-icon"
import { useState } from "react"
import { useFilter } from "@/hooks/useFilter"
import { FilterOrganizes } from "@/types/filters/filter-organizes"

interface FilterByOrganizeProps {

}

const TagFilter = styled.div`
    position: relative;
`

const ContainerFilter = styled.button`
    height: 24px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    
    border: none;
    background-color: transparent;

    color: var(--text-dark);

    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    vertical-align: middle;    

    cursor: pointer;

    &:hover {
        color: var(--orange-low);
    }

    &:hover > div {
        filter: invert(61%) sepia(75%) saturate(267%) hue-rotate(328deg) brightness(110%) contrast(101%);
    }
    
    div {
        width: 24px;
        height: 24px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const ContainerOrganizesFilters = styled.ul`
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

    list-style: none;
`

const OrganizeFilterItem = styled.li`
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

export function FilterByOrganize(
    props : FilterByOrganizeProps
) {
    const [
        isOpen,
        setIsOpen
    ] = useState(
        false
    );

    const {
        organize,
        setOrganize
    } = useFilter();

    const handleChangeOrganize = (
        value: FilterOrganizes
    ) => {
        setOrganize(
            value
        );

        handleChangedIsOpen();
    }

    const handleChangedIsOpen = () => {
        setIsOpen(
            prev => !prev
        )
    }

    const textListForTheFilterOrganize = [
        "Organizar por",
        "Novidades",
        "Preço: Maior - menor",
        "Preço: Menor - maior",
        "Mais vendidos"
    ]

    return (
        <TagFilter>
            <ContainerFilter
                onClick={handleChangedIsOpen}
            >
                {
                    organize === 0 ? textListForTheFilterOrganize[0] :
                    organize === 1 ? textListForTheFilterOrganize[1] :
                    organize === 2 ? textListForTheFilterOrganize[2] : 
                    organize === 3 ? textListForTheFilterOrganize[3] : 
                    organize === 4 ? textListForTheFilterOrganize[4] :
                    ""
                }
                <div>
                    <ArrowDownIcon />
                </div>
            </ContainerFilter>
            { isOpen && 
                <ContainerOrganizesFilters>
                    <OrganizeFilterItem
                        onClick={() => {
                            handleChangeOrganize(
                                FilterOrganizes.NEWS
                            )
                        }}
                    >
                        {
                            textListForTheFilterOrganize[1]
                        }
                    </OrganizeFilterItem>
                    <OrganizeFilterItem
                        onClick={() => {
                            handleChangeOrganize(
                                FilterOrganizes.HIGHEST_TO_LOWEST_PRICE
                            )
                        }}
                    >
                        {
                            textListForTheFilterOrganize[2]
                        }
                    </OrganizeFilterItem>
                    <OrganizeFilterItem
                        onClick={() => {
                            handleChangeOrganize(
                                FilterOrganizes.LOWEST_TO_HIGHEST_PRICE
                            )
                        }}
                    >
                        {
                            textListForTheFilterOrganize[3]
                        }
                    </OrganizeFilterItem>
                    <OrganizeFilterItem
                        onClick={() => {
                            handleChangeOrganize(
                                FilterOrganizes.BEST_SELLERS
                            )
                        }}
                    >
                        {
                            textListForTheFilterOrganize[4]
                        }
                    </OrganizeFilterItem>
                </ContainerOrganizesFilters>
            }
        </TagFilter>
    )
}