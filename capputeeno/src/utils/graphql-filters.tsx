import { FilterOrganizes } from "@/types/filters/filter-organizes";
import { FilterTypes } from "@/types/filters/filter-types";

export const getFilterByOrganize = (
    organize: FilterOrganizes
) => {
    switch (organize) {
        case 0:
            return {fields: "", order: ""}
        case 1:
            return {fields: "created_at", order: "DSC"}
        case 2:
            return {fields: "price_in_cents", order: "DSC"}
        case 3:
            return {fields: "price_in_cents", order: "ASC"}
        case 4:
            return {fields: "sales", order: "DSC"}
    }
}

export const getCategoryByType = (
    type: FilterTypes
) => {
    switch (type) {
        case 0:
            return ""
        case 1:
            return "t-shirts"
        case 2:
            return "mugs"
    }
}

export const mountQuerry = (
    type: FilterTypes,
    organize: FilterOrganizes
) => {
    const organizeFilters = getFilterByOrganize(organize);

    if (
        type === FilterTypes.ALL
    ) {
        return `query {
                    allProducts(
                        sortField: "${organizeFilters?.fields}",
                        sortOrder: "${organizeFilters?.order}"
                    ) {
                        name
                        description
                        image_url
                        id
                        category
                        price_in_cents
                        sales
                        created_at
                    }
                }
            `
    } else {
        return `query {
                    allProducts(
                        filter: {
                            category: "${getCategoryByType(type)}"
                        },
                        sortField: "${organizeFilters?.fields}",
                        sortOrder: "${organizeFilters?.order}"
                    ) {
                        name
                        description
                        image_url
                        id
                        category
                        price_in_cents
                        sales
                        created_at
                    }
                }
            `
    }
}