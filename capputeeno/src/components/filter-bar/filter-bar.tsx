"use client"

import styled from "styled-components";
import { FilterByType } from "./filters-by/filter-by-type";
import { FilterByOrganize } from "./filters-by/filter-by-organize";

const ContainerFilter = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: space-between;
    align-items: start;
`

export function FilterBar() {

    return (
        <ContainerFilter>
            <FilterByType />
            <div>
                <FilterByOrganize />
            </div>
        </ContainerFilter>
    )
}