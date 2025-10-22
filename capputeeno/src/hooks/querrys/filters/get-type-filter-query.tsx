import { FilterTypes } from "@/utils/filters/filter-types"

export const GET_TYPE_FILTER_QUERY = (
    type: FilterTypes
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
}