"use client"

import styled from "styled-components";
import { FilterByType } from "./filter-by-type";
import { FilterByOrganize } from "./filter-by-organize";

interface FilterBarProps {

}

const ContainerFilter = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: space-between;
    align-items: start;
`

export function FilterBar(
    props: FilterBarProps
) {

    return (
        <ContainerFilter>
            <FilterByType />
            <div>
                <FilterByOrganize />
            </div>
        </ContainerFilter>
    )
}