"use client"

import styled from "styled-components"

const NothingFoundProduct = styled.p`
    width: 100%;
    margin-top: 5em;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: inherit;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;

    user-select: none;

    span {
        display: block;
        text-transform: none;
        color: var(--text-dark);
    }
`

const PieceNothingFoundProduct = () => {
    return (
        <NothingFoundProduct>
            <span>
                404 | Página não encontrada
            </span>
        </NothingFoundProduct>
    );
};

export default PieceNothingFoundProduct;