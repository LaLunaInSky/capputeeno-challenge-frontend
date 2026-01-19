"use client"

import styled from "styled-components";
import PieceFilterByTypeModel from "../pieces/filter_by_type.piece";
import PieceFilterByOrganizes from "../pieces/filter_by_organizes.piece";

const FilterBarDisplay = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: space-between;
    align-items: start;

    @media (max-width: 580px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        gap: 10px;

        margin-top: -10px;
    }
`

const TemplateFiltersBarDisplay = () => {
    return (
        <FilterBarDisplay>
            <PieceFilterByTypeModel />
            <PieceFilterByOrganizes />
        </FilterBarDisplay>
    );
};

export default TemplateFiltersBarDisplay;