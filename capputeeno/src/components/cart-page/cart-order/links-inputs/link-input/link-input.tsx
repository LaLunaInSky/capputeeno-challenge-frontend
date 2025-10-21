import styled from "styled-components"

interface LinkInputProps {
    text: string
}

const TagLinkInput = styled.p`
    height: 21px;

    font-family: inherit;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    text-transform: uppercase;
    text-decoration: underline;
    text-decoration-style: solid;
    text-decoration-thickness: 0%;

    cursor: pointer;

    color: var(--text-dark);
`

export function LinkInput(
    props: LinkInputProps
) {
    return (
        <TagLinkInput>
            {props.text}
        </TagLinkInput>
    )
}