"use client"

import styled from "styled-components";
import PieceNotFoundPage from "../pieces/not_found_page.piece";
import PieceBackButtonInput from "../pieces/back_button_input.piece";
import { usePathname } from "next/navigation";

const NotFound = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
`

const TemplateNotFound = () => {
    const pathname = usePathname();
    const pathnames = pathname.split("/");
    const lengthPathnames = pathnames.length;
    let link_url = "/";

    for (
        const index in pathnames
    ) {
        const indexNumber = Number(index)

        if (
            indexNumber < lengthPathnames - 1
        ) {
            if (
                pathnames[index] != ""
            ) {
                link_url += `${pathnames[index]}/`;
            }
        }
    }

    return (
        <NotFound>
            <PieceBackButtonInput 
                link_url={link_url}
            />
            <PieceNotFoundPage />
        </NotFound>
    );
};

export default TemplateNotFound;