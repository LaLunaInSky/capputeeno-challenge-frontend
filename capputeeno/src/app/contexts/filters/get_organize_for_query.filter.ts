import FilterProjectsDisplayOrganizes from "./projects_display_organizes.filter"

const FilterGetOrganizeForQuery = (
    organize: FilterProjectsDisplayOrganizes
) => {
    switch (organize) {
        case 0:
            return `
sortField: "",
sortOrder: "",
`
        case 1:
            return `
sortField: "created_at",
sortOrder: "DSC",
`
        case 2:
            return `
sortField: "price_in_cents",
sortOrder: "DSC",
`
        case 3:
            return `
sortField: "price_in_cents",
sortOrder: "ASC",
`
        case 4:
            return `
sortField: "sales",
sortOrder: "DSC",
`
    }
};

export default FilterGetOrganizeForQuery;