import { ProductToPageView } from "./product-to-page-view";

export interface ProductFetchResponse {
    data: {
        Product: ProductToPageView
    }
}