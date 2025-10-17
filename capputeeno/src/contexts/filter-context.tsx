"use client"

import { FilterOrganizes } from "@/types/filters/filter-organizes";
import { FilterTypes } from "@/types/filters/filter-types";
import { createContext, ReactNode, useState } from "react";

export const FilterContext = createContext({
    search  : ''                  ,
    organize: FilterOrganizes.NONE,
    page    : 0                   ,
    type    : FilterTypes.ALL     ,
    setSearch  : (value: string         ) => {},
    setOrganize: (value: FilterOrganizes) => {},
    setPage    : (value: number         ) => {},
    setType    : (value: FilterTypes    ) => {}
})

interface ProviderProps {
    children: ReactNode
}

export function FilterContextProvider({
    children
} : ProviderProps) {
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
        FilterOrganizes.NONE
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
        FilterTypes.ALL
    );

    return (
        <FilterContext.Provider
            value={{
                search, organize, page, type,
                setSearch, setOrganize,
                setPage, setType
            }}
        >
            {children}
        </FilterContext.Provider>
    )
}