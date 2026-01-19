"use client"

import styled from "styled-components"
import { useState } from "react"
import UseFilterContextProjectDisplay from "@/app/contexts/filters/uses/context_projects_display.filter.use"
import FilterProjectsDisplayOrganizes from "@/app/contexts/filters/projects_display_organizes.filter"
import IconArrowDown from "../icons/arrow_down.icon"
import TemplateFiltersByOrganizesDisplay from "../templates/filters_by_organizes_display.template"

const FilterByOrganizes = styled.div`
    position: relative;

    @media (max-width: 500px) {
        position: absolute;

        top: 105px;
        right: 17px;
    }

    @media (max-width: 580px) and (min-width: 501px) {
        position: absolute;
        
        top: 130px;
        right: 17px;
    }
`

const ContainerFilterByOrganizes = styled.button`
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

const PieceFilterByOrganizes = () => {
    const [
        isOpen,
        setIsOpen
    ] = useState(
        false
    );

    const {
        organize
    } = UseFilterContextProjectDisplay();

    const handleChangedIsOpen = () => {
        setIsOpen(
            prev => !prev
        )
    };

    const textListForTheFilterOrganize = [
        "Organizar por",
        "Novidades",
        "Preço: Maior - menor",
        "Preço: Menor - maior",
        "Mais vendidos"
    ];

    return (
        <FilterByOrganizes
            onClick={handleChangedIsOpen}
        >
            <ContainerFilterByOrganizes>
                {
                    organize === 0 ? textListForTheFilterOrganize[0] :
                    organize === 1 ? textListForTheFilterOrganize[1] :
                    organize === 2 ? textListForTheFilterOrganize[2] : 
                    organize === 3 ? textListForTheFilterOrganize[3] : 
                    organize === 4 ? textListForTheFilterOrganize[4] :
                    ""
                }
                <div>
                    <IconArrowDown />    
                </div>
            </ContainerFilterByOrganizes>
            {isOpen && (
                <TemplateFiltersByOrganizesDisplay/>
            )}
        </FilterByOrganizes>
    );
};

export default PieceFilterByOrganizes;