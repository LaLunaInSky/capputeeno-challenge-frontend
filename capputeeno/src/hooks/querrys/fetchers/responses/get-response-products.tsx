import { GET_PROTOTYPE_DATA_PRODUCT } from "./prototypes-data/get-prototype-data-product"

export interface GET_RESPONSE_PRODUCTS {
    data: {
        allProducts: GET_PROTOTYPE_DATA_PRODUCT[]
    }
}