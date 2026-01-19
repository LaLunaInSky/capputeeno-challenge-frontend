import FilterGetTypeForQuery from "../filters/get_type_for_query.filter";
import FilterGetOrganizeForQuery from "../filters/get_organize_for_query.filter";
import FilterProjectsDisplayTypes from "../filters/projects_display_types.filter";
import FilterProjectsDisplayOrganizes from "../filters/projects_display_organizes.filter";

const QueryGetAllProductsWithPagination = (
    type: FilterProjectsDisplayTypes,
    organize: FilterProjectsDisplayOrganizes,
    page: number
) => {
    const filterType = FilterGetTypeForQuery(type);

    const filterOrganize = FilterGetOrganizeForQuery(organize);
    
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
    `;
};

export default QueryGetAllProductsWithPagination;