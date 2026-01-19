import FilterProjectsDisplayTypes from "./projects_display_types.filter";

const FilterGetTypeForQuery = (
    type: FilterProjectsDisplayTypes
) => {
    if (type === "all") {
        return ``
    } else {
        return `
filter: {
    category: "${type}"
}
`
    }
};

export default FilterGetTypeForQuery;