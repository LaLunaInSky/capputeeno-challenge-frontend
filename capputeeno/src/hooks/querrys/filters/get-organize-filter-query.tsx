import { FilterOrganizes } from "@/utils/filters/filter-organizes"

export const GET_ORGANIZE_FILTER_QUERY = (
    organize: FilterOrganizes
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
}