import { useProducts } from "@/hooks/useProducts"
import styled from "styled-components";
import { ProductCard } from "./product-card";

const ContainerProducts = styled.div`
    width: 100%;
    
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;

    font-family: inherit;

    gap: 32px;
`

export function ProductsList() {

    const {
        data
    } = useProducts();

    return (
        <ContainerProducts>
            { data?.map(product =>
                <ProductCard 
                    key={product.id}
                    image_url={product.image_url}
                    name={product.name}
                    price_in_cents={product.price_in_cents}
                />
            )}
        </ContainerProducts>
    )
}