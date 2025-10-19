import { useProducts } from "@/hooks/main-page/useProducts"
import styled from "styled-components";
import { ProductCard } from "./product-card";

const ContainerProducts = styled.div`
    width: 100%;
    
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

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
                    id={product.id}
                />
            )}
        </ContainerProducts>
    )
}