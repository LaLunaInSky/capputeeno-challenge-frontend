import styled from "styled-components"
import { TrashIcon } from "./icons/trash-icon"
import { formatPrice } from "@/utils/format-price"
import { QuantityProductInput } from "./quantity-product-input/quantity-product-input"
import { useLocalStorage } from "@/hooks/local-storage/useLocalStorage"
import { useRouter } from "next/navigation"

interface CartProductProps {
    product: {
        id: string,
        name: string,
        image_url: string,
        description: string,
        price_in_cents: number,
        quantity: number,
        total_price: number
    }
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

export function CartProduct(
    props: CartProductProps
) {
    const router = useRouter();
    
    const {
        deleteItem
    } = useLocalStorage();

    const handleChanged = () => {
        deleteItem(
            props?.product?.id
        );

        router.refresh();
    }

    return (
        <TagCartProduct>
            <ImageProduct 
                src={
                    props?.product?.image_url
                }
            />
            <ContainerProdctInfos>
                <ContainerNameAndTrashIcon>
                    <h1>
                        {props?.product?.name}
                    </h1>
                    <DeleteInput
                        onClick={handleChanged}
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
                        {formatPrice(
                            props?.product?.total_price
                        )}
                    </h2>
                </ContainerQuantityProductInputAndPrice>
            </ContainerProdctInfos>
        </TagCartProduct>
    )
}