export const GET_QUERY_PRODUCT_ONLY_ID = (
    id: string
) => {
    return `
    query {
        allProducts(
            filter: {
                id: "${id}"
            }
        ) {
            id
        }
    }
`
}