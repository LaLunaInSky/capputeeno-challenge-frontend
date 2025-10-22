import { useLocalStorage } from "@/hooks/local-storage/useLocalStorage"
import styled from "styled-components"
import { CartProduct } from "./cart-product/cart-product";

interface ProductCartInterface {
    id: string,
    name: string,
    image_url: string,
    description: string,
    price_in_cents: number,
    quantity: number,
    total_price: number
}

const TagNotFoundProducts = styled.p`
    margin-top: 15px;

    font-weight: 600;
    text-transform: uppercase;

    color: var(--orange-brand);
`

const ContainerCartProducts = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    gap: 16px;
`

export function CartProducts() {
    const {
        getCountItems,
        getItems
    } = useLocalStorage();

    const totalItems = getCountItems();
    
    if (
        totalItems === 0
    ) {
        return (
            <TagNotFoundProducts>
                nenhum produto no carrinho
            </TagNotFoundProducts>    
        )
    } else {
        const items = getItems().reverse();
        
        return (
            <ContainerCartProducts>
                {items.map((
                    item: ProductCartInterface
                ) => {
                    return (
                        <CartProduct
                            key={item.id}
                            product={item}
                        />
                    )
                })}
            </ContainerCartProducts>
        )
    }
}