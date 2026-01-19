import axios, { AxiosPromise } from "axios";
import END_POINT_API from "./end_point_api";
import ProductModel from "../interfaces/product_model.interface";

interface DataProductsModel {
    data: {
        allProducts: ProductModel[]
    }
}

const FetcherGetProducts = (
    query: string
) : AxiosPromise<DataProductsModel> => {
    return axios.post(
        END_POINT_API(),
        {query}
    )
};

export default FetcherGetProducts;