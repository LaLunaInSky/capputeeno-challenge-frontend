"use client"

import { CartPage } from "@/components/cart-page/cart-page"
import styled from "styled-components"

const TagCartPage = styled.div`
    font-family: inherit;
`

export default function Page() {
    
    return (
        <TagCartPage>
            <CartPage />
        </TagCartPage>
    )
}