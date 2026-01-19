import FilterGetTypeForQuery from "../filters/get_type_for_query.filter";
import FilterProjectsDisplayTypes from "../filters/projects_display_types.filter";
import FilterProjectsDisplayOrganizes from "../filters/projects_display_organizes.filter";
import FilterGetOrganizeForQuery from "../filters/get_organize_for_query.filter";

const QueryGetAllProductsWithoutPagination = (
    type: FilterProjectsDisplayTypes,
    organize: FilterProjectsDisplayOrganizes,
) => {
    const filterType = FilterGetTypeForQuery(type);

    const filterOrganize = FilterGetOrganizeForQuery(organize);

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
    `;
};

export default QueryGetAllProductsWithoutPagination;