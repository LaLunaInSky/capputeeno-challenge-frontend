"use client"

import styled from "styled-components"
import PiecePageBarNumbers from "./page_bar_numbers.piece";
import PiecePageBarArrows from "./page_bar_arrows.piece";


const TagPageBar = styled.div`
    width: 100%;
    height: 32px;

    margin-top: 14px;

    display: flex;
    justify-content: end;
`

const PiecePageBarContainerModel = () => {
    return (
        <TagPageBar>
            <PiecePageBarNumbers />
            <PiecePageBarArrows />
        </TagPageBar>
    );
};

export default PiecePageBarContainerModel;