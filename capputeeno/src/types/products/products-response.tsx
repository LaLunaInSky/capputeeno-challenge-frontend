import { Product } from "./product"

export interface ProductsFetchResponse {
    dara: {
        allProducts: Product[]
    }
}