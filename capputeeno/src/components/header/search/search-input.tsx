import styled from "styled-components";
import { SearchIcon } from "./search-icon";
import { InputHTMLAttributes, useEffect, useState } from "react";
import { SearchCloseIcon } from "./search-close-icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
    hangleChange: (value: string) => void
}

interface SearchShowProps {
    visabled: boolean
}

const InputContainer = styled.div<SearchShowProps>`
    position: relative;
    width: 352px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);

        @media (max-width: 655px) {
            top: ${props => props.visabled ? "50%" : ""};
            right: ${props => props.visabled ? "40px" : "4px"};
            transform: translateY(${props => props.visabled ? "-50%" : ""});

            background-color: ${props => props.visabled ? "#751e1e32" : "transparent"};
            border-radius: 4px;
        }
    }

    input:focus, input:hover, &:has(svg:nth-of-type(1):hover) {
        outline-width: 1px;
        outline-style: solid;
        outline-color: var(--text-dark);
        border-radius: 8px;
    }

    @media (max-width: 655px) {
        width: ${props => props.visabled ? "110%": "32px"};
        height: ${props => props.visabled ? "140%" : "32px"};
        
        position: ${props => props.visabled ? "absolute" : "relative"};
        left: ${props => props.visabled ? "50%" : ""};
        
        z-index: ${props => props.visabled ? "10" : "0"};
        
        transform: translateX(${props => props.visabled ? "-50%" : ""});
        
        border-radius: 4px;

        background-color: ${props => props.visabled ? "white" : "var(--bg-primary)"};
        
        display: flex;
        align-items: center;
        justify-content: center;

    }
`

const SearchInput = styled.input<SearchShowProps>`
    width: 352px;
    border-radius: 8px;
    padding: 10px 55px 10px 16px;
    border: none;

    background-color: var(--bg-primary);

    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0%;
    text-align: left;
    vertical-align: middle;
    color: var(--text-dark);

    @media (max-width: 655px) {
        visibility: ${props => props.visabled ? "visible" : "hidden"};
    }

    @media (min-width: 441px) and (max-width: 665px) {
        padding: 10px 16px;
    }
`

export function SearchBarInput(
    props: InputProps
) {
    const [
        visabledSearchBar,
        setVisabledSearchBar
    ] = useState(
        false
    );

    const visibilityChangeControl = () => {
        setVisabledSearchBar(
            prev => !prev
        );
    }

    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        if (visabledSearchBar && windowSize.width > 655) {
            visibilityChangeControl()
        } 

        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
        // Set window width/height to state
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        }
        
        // Add event listener
        window.addEventListener("resize", handleResize);
        
        // Call handler right away so state gets updated with initial window size
        handleResize();
        
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, ); // Empty array ensures that effect is only run on mount


    return (
        <InputContainer
            visabled={visabledSearchBar}
            onClick={() => {
                if (!visabledSearchBar) {
                    visibilityChangeControl()
                }
            }}
        >
            <SearchInput
                onChange={(event) => {
                    props.hangleChange(
                        event.target.value
                    )
                }}
                {...props}
                visabled={visabledSearchBar}
            />
            {windowSize.width <= 655 &&
                !visabledSearchBar && 
                    <SearchIcon/>
            }
            {windowSize.width <= 655 &&
                visabledSearchBar &&
                    <div
                        onClick={visibilityChangeControl}
                    >
                        <SearchCloseIcon />
                    </div>
            }
            {windowSize.width > 655 &&
                <SearchIcon />
            }
        </InputContainer>
    )
}