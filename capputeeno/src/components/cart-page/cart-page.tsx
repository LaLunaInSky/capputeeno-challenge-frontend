import styled from "styled-components";
import { BackInput } from "../product-page/back-input/back-input";
import { formatPrice } from "@/utils/format-price";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartProducts } from "./cart-products/cart-products";
import { CartOrder } from "./cart-order/cart-order";

const TagCartPage = styled.div`
    width: 100%;
    
    display: flex;
    
    gap: 22px;

    @media (max-width: 1145px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

const ContainerProductsAndBackInput = styled.div`
    width: 736px;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    @media (max-width: 779px) {
        width: 100%;
    }
`

const TagYourCart = styled.h1`
    height: 36px;

    margin-top: 22px;

    font-family: inherit;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    text-transform: uppercase;

    color: var(--inputs-and-icons);
    
    margin-bottom: 6px;
`

const TagTotalProductsAndPrice = styled.p`
    height: 24px;

    font-family: inherit;
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;

    color: var(--inputs-and-icons);

    margin-bottom: 23px;

    span {
        font-family: inherit;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0%;
        vertical-align: middle;

        margin-left: 4px;
    }
`

export function CartPage() {
    const {
        getCountItems,
        getTotalPrice
    } = useLocalStorage();

    const totalPrice = getTotalPrice();

    const totalProducts = getCountItems();

    return (
        <TagCartPage>
            <ContainerProductsAndBackInput>
                <BackInput />
                <TagYourCart>
                    seu carrinho
                </TagYourCart>
                <TagTotalProductsAndPrice>
                    Total ({`${totalProducts} produto${totalProducts != 1 ? "s" : ""}`})
                    <span>
                        {`R$ ${formatPrice(totalPrice)}`}
                    </span>
                </TagTotalProductsAndPrice>
                <CartProducts />
            </ContainerProductsAndBackInput>
            {totalProducts > 0 &&
                <CartOrder />
            }
        </TagCartPage>
    )
}