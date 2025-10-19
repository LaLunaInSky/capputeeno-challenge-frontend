import { useFilter } from "@/hooks/main-page/useFilter";

export const SetPagesList = (
    products: []
) => {
    const {
        numberOfPages
    } = useFilter();

    const productsPerPage = [];
    const totalProductsPerPage = 12;
    let finalIndex = 12;

    for (
        let i = 0;
        i < numberOfPages;
        i++
    ) {
        const initalIndex = finalIndex - totalProductsPerPage;

        productsPerPage.push(
            []
        );

        productsPerPage[i] = products?.slice(initalIndex, finalIndex)

        finalIndex += 12;
    }

    return productsPerPage;
}