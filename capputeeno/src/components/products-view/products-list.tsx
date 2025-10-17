import { useProducts } from "@/hooks/useProducts"
import styled from "styled-components";
import { ViewProduct } from "./view-product";

interface ProductsListProps {

}

const ContainerProducts = styled.div`
    width: 100%;
    
    margin-top: 46px;

    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    align-items: center;

    gap: 32px;
`

export function ProductsList(
    props : ProductsListProps
) {

    const {
        data
    } = useProducts();

    return (
        <ContainerProducts>
            <ViewProduct />
        </ContainerProducts>
    )
}