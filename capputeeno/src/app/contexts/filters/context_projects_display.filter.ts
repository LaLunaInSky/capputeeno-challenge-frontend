"use client"

import FilterProjectsDisplayOrganizes from "./projects_display_organizes.filter";
import FilterProjectsDisplayTypes from "./projects_display_types.filter";
import { createContext } from "react";

const FilterContextProjectsDisplay = createContext({
    search: ''                  ,
    organize: FilterProjectsDisplayOrganizes.NONE,
    page: 0,
    type: FilterProjectsDisplayTypes.ALL,
    numberOfPages: 5, 
    setSearch: (value: string) => {},
    setOrganize: (value: FilterProjectsDisplayOrganizes) => {},
    setPage: (value: number) => {},
    setType: (value: FilterProjectsDisplayTypes) => {},
    setNumberOfPages: (value: number) => {},
});

export default FilterContextProjectsDisplay;