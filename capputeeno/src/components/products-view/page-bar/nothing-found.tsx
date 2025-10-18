import styled from "styled-components"

const TagNothingFound = styled.p`
    width: 100%;
    height: 30vh;

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

export function NothingFound() {
    return (
        <TagNothingFound>
            <span>
                Resultado não encontrado
            </span>
        </TagNothingFound>
    )
}