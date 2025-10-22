export const GET_QUERY_PRODUCT = (
    id: string
) => {
    return `
    query {
        allProducts(
            filter: {
                id: "${id}"
            }
        ) {
            name
            image_url
            price_in_cents
            category
            description
        }
    }
`
}