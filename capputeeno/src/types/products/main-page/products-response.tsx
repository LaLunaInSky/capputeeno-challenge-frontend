import { ProductToCard } from "./product-to-card"

export interface ProductsFetchResponse {
    data: {
        allProducts: ProductToCard[]
    }
}