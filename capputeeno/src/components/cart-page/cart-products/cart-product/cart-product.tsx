import styled from "styled-components"
import { CartProductInfos } from "./cart-product-infos/cart-product-infos"

interface CartProductProps {
    product: undefined
}

const TagCartProduct = styled.div`
    width: 100%;
    height: 211px;

    display: flex;
    justify-content: start;
    align-items: center;

    background-color: white;

    border-radius: 8px;

    overflow: hidden;

    @media (max-width: 530px) {
        width: 80%;
        height: auto;

        flex-direction: column;
    }
`

const ImageProduct = styled.img`
    width: 35%;
    height: 211px;

    background-color: var(--orange-brand);

    @media (max-width: 530px) {
        width: 211px;

        border-radius: 0px 0px 4px 4px;
    }
`

export function CartProduct(
    props: CartProductProps
) {
    return (
        <TagCartProduct>
            <ImageProduct 
                src={
                    props?.product?.image_url
                }
            />
            <CartProductInfos 
                product={props?.product}
            />
        </TagCartProduct>
    )
}