"use client"

import styled from "styled-components";

const PageLoadingModel = styled.div`
    @keyframes Animation {
        100% {color: #7373803c;}
        0% {color: var(--text-dark);}
    }

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5em;
    font-size: 1.2em;
    color: var(--text-dark);
    animation-name: Animation;
    animation-duration: 1.5s;
    animation-iteration-count: 1500;
    animation-direction: alternate;
    user-select: none;

    font-family: inherit;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
`

const PiecePageLoadingModel = () => {
    return (
        <PageLoadingModel>
            carregando . . .
        </PageLoadingModel>
    );
};

export default PiecePageLoadingModel;