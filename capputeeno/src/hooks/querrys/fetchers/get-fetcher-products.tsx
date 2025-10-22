import { GET_RESPONSE_PRODUCTS } from "./responses/get-response-products";
import axios, { AxiosPromise } from "axios";

const API_URL = "https://api-capputeeno.lalunainsky.com";

export const GET_FETCHER_PRODUCTS = (
    query: string
) : AxiosPromise<GET_RESPONSE_PRODUCTS> => {
    return axios.post(
        API_URL, 
        {query}
    )
}