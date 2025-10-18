import { useFilter } from "@/hooks/useFilter";

export function SetTotalPages(
    array: []
) {
    const {
        setNumberOfPages
    } = useFilter();

    const totalPages = Math.floor(array?.length / 12);

    if (totalPages == 0) {
        setNumberOfPages(
            1
        );
    } else {
        setNumberOfPages(
            totalPages
        );
    }
}