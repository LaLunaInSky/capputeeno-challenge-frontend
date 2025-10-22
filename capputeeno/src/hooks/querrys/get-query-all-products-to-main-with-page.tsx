import { FilterTypes } from "@/utils/filters/filter-types"
import { GET_TYPE_FILTER_QUERY } from "./filters/get-type-filter-query"
import { FilterOrganizes } from "@/utils/filters/filter-organizes";
import { GET_ORGANIZE_FILTER_QUERY } from "./filters/get-organize-filter-query";

export const GET_QUERY_ALL_PRODUCTS_TO_MAIN_PAGE_WITH_PAGE = (
    type: FilterTypes,
    organize: FilterOrganizes,
    page: number
) => {
    const filterType = GET_TYPE_FILTER_QUERY(type);

    const filterOrganize = GET_ORGANIZE_FILTER_QUERY(organize);
    
    return `
        query {
            allProducts(
                ${filterType != "" ? `${filterType},` : ""}
                page: ${page}, 
                perPage: 12,
                ${organize > 0 ? filterOrganize : ""}
            ) {
                id
                name
                image_url
                price_in_cents
            }
        }
    `
}