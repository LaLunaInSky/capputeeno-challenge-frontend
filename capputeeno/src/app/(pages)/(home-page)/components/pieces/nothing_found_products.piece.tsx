"use client"

import styled from "styled-components"

const NothingFoundProducts = styled.p`
    width: 100%;
    margin-top: 5em;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: inherit;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;

    span {
        display: block;
        text-transform: none;
        color: var(--text-dark);
    }
`

const PieceNothingFoundProducts = () => {
    return (
        <NothingFoundProducts>
            <span>
                Resultado não encontrado
            </span>
        </NothingFoundProducts>
    );
};

export default PieceNothingFoundProducts;