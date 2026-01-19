"use client"

import { useState } from "react";
import FilterProjectsDisplayTypes from "../filters/projects_display_types.filter";
import FilterProjectsDisplayOrganizes from "../filters/projects_display_organizes.filter";
import FilterContextProjectsDisplay from "../filters/context_projects_display.filter";

const ProviderContextProjectsDisplay = ({
    children
} : React.PropsWithChildren) => {
    const [
        search,
        setSearch
    ] = useState(
        ''
    );

    const [
        organize,
        setOrganize
    ] = useState(
        FilterProjectsDisplayOrganizes.NONE
    );

    const [
        page,
        setPage
    ] = useState(
        0
    );

    const  [
        type,
        setType
    ] = useState(
        FilterProjectsDisplayTypes.ALL
    );

    const [
        numberOfPages,
        setNumberOfPages
    ] = useState(
        5
    );

    return (
        <FilterContextProjectsDisplay.Provider
            value={{
                search, organize, page, type, numberOfPages,
                setSearch, setOrganize,
                setPage, setType,
                setNumberOfPages
            }}
        >
            {children}
        </FilterContextProjectsDisplay.Provider>
    );
};

export default ProviderContextProjectsDisplay;