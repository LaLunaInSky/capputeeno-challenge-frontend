const QueryGetAnProductById = (
    id: string
) => {
    return `
        query GetAnProductById {
            Product(
                id: "${id}"
            ) {
                id
                image_url
                category
                name
                price_in_cents
                description
            }
        }
    `;
};

export default QueryGetAnProductById;