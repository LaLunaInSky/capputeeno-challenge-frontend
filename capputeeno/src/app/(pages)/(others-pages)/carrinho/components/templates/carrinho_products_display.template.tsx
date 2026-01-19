"use client"

import HookUseLocalStorage from "@/app/contexts/hooks/use_local_storage.hook";
import styled from "styled-components";
import PieceCarrinhoProductModel from "../pieces/carrinho_product_model.piece";

interface CarrinhoProductType {
    id: string,
    name: string,
    image_url: string,
    description: string,
    price_in_cents: number,
    quantity: number,
    total_price: number
}

const CarrinhoProductsDisplay = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    
    gap: 16px;
`

const NothingFoundProducts = styled.p`
    margin-top: 15px;

    font-weight: 600;
    text-transform: uppercase;

    color: var(--orange-brand);
`
const TemplateCarrinhoProductsDisplay = () => {
    const {
        getCountItems,
        getItems
    } = HookUseLocalStorage();

    const totalItems = getCountItems();
    const items = getItems().reverse();

    return (
        <CarrinhoProductsDisplay>
            {totalItems <= 0 && (
                <NothingFoundProducts>
                    nenhum produto no carrinho
                </NothingFoundProducts>
            )}
            {totalItems > 0 && items.map(
                (product: CarrinhoProductType) => (
                    <PieceCarrinhoProductModel 
                        key={`product_with_id_${product.id}`}
                        id={product.id}
                        name={product.name}
                        image_url={product.image_url}
                        description={product.description}
                        quantity={product.quantity}
                        total_price={product.total_price}
                    />
                )
            )}
        </CarrinhoProductsDisplay>
    );
};

export default TemplateCarrinhoProductsDisplay;