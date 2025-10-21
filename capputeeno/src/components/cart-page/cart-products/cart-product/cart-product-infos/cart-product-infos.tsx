import styled from "styled-components"
import { TrashIcon } from "./icons/trash-icon"
import { formatPrice } from "@/utils/format-price"
import { QuantityProductInput } from "./quantity-product-input/quantity-product-input"
import { useLocalStorage } from "@/hooks/useLocalStorage"

interface CartProductInfosProps {
    product: undefined
}

const ContainerProdctInfos = styled.div`
    width: 65%;
    height: 100%;

    padding: 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 530px) {
        width: 100%;
    }
`

const ContainerNameAndTrashIcon = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: inherit;

    h1 {
        font-family: inherit;
        font-weight: 300;
        font-size: 20px;
        line-height: 150%;
        letter-spacing: 0%;
        vertical-align: middle;

        color: var(--inputs-and-icons);
    }
`

const ContainerQuantityProductInputAndPrice = styled.div`
    width: 100%;
    height: 40px;

    display: flex;
    justify-content: space-between;

    font-family: inherit;

    margin-top: 25px;

    h2 {
        height: 24px;

        font-family: inherit;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0%;
        text-align: right;
        vertical-align: middle;

        color: var(--shapes-dark);
    }
`

const TagDescription = styled.p`
    width: 98%;
    height: 64px;

    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;

    margin-top: 12px;

    color: var(--inputs-and-icons);

    @media (max-width: 530px) {
        height: auto;
    }
`

const DeleteInput = styled.button`
    width: 24px;
    height: 24px;

    cursor: pointer;

    border: none;
    background-color: transparent;

    display: flex;
    justify-content: center;
    align-items: center;
`

export function CartProductInfos(
    props: CartProductInfosProps
) {
    const {
        deleteItem
    } = useLocalStorage();

    return (
        <ContainerProdctInfos>
            <ContainerNameAndTrashIcon>
                <h1>
                    {props?.product?.name}
                </h1>
                <DeleteInput
                    onClick={() => {
                        deleteItem(props?.product?.id)
                    }}
                >
                    <TrashIcon />
                </DeleteInput>
            </ContainerNameAndTrashIcon>
            <TagDescription>
                {props?.product?.description}
            </TagDescription>
            <ContainerQuantityProductInputAndPrice>
                <QuantityProductInput 
                    quantity={props?.product?.quantity}
                    id={props?.product?.id}
                />
                <h2>
                    {`R$ ${formatPrice(
                        props?.product?.total_price
                    )}`}
                </h2>
            </ContainerQuantityProductInputAndPrice>
        </ContainerProdctInfos>
    )
}