import { FilterTypes } from "@/utils/filters/filter-types"
import { GET_TYPE_FILTER_QUERY } from "./filters/get-type-filter-query"
import { FilterOrganizes } from "@/utils/filters/filter-organizes";
import { GET_ORGANIZE_FILTER_QUERY } from "./filters/get-organize-filter-query";

export const GET_QUERY_ALL_PRODUCTS_TO_MAIN_PAGE_WITHOUT_PAGE = (
    type: FilterTypes,
    organize: FilterOrganizes,
) => {
    const filterType = GET_TYPE_FILTER_QUERY(type);

    const filterOrganize = GET_ORGANIZE_FILTER_QUERY(organize);

    return `
        query {
            allProducts${type != "all" || organize > 0 ? "(" : ""}
                ${filterType != "" ? `${filterType},` : ""}
                ${organize > 0 ? filterOrganize : ""}
            ${type != "all" || organize > 0 ? ")" : ""} {
                id
                name
                image_url
                price_in_cents
            }
        }
    `
}