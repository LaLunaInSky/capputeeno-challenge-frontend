"use client"

import { PageBar } from "@/components/main-page/products-view/page-bar/page-bar";
import { ProductsList } from "@/components/main-page/products-view/products/products-list";

export function ProductsView() {
    return (
        <PageBar>
            <ProductsList />
        </PageBar>
    )
}