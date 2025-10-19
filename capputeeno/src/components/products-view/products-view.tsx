import { PageBar } from "@/components/products-view/page-bar/page-bar";
import { ProductsList } from "@/components/products-view/products/products-list";

export function ProductsView() {
    return (
        <PageBar>
            <ProductsList />
        </PageBar>
    )
}