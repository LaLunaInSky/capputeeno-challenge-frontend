import axios, { AxiosPromise } from "axios";
import ProductModel from "../interfaces/product_model.interface";
import END_POINT_API from "./end_point_api";

interface DataProductModel {
    data: {
        Product: ProductModel
    }
}

const FetcherGetProduct = (
    query: string
) : AxiosPromise<DataProductModel> => {
    return axios.post(
        END_POINT_API(),
        {query}
    );
};

export default FetcherGetProduct;