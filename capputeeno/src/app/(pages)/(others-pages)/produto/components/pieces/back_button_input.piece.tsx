"use client"

import { Saira } from "next/font/google";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import IconArrowLeftBack from "../icons/arrow_left_back.icon";
import { useState } from "react";

const saira = Saira(
  {
    weight: ['500'],
    subsets: ['latin']
  }
)

const BackButtonInput = styled.button`
  width: max-content;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  cursor: pointer;

  border: none;
  background-color: transparent;

  &:hover {
    gap: 10px;
  }

  &:hover > p {
    font-weight: 600;
    color: var(--inputs-and-icons);
  }

  p {
    font-family: inherit;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;

    user-select: none;

    color: var(--text-secondary);
  }
`

const PieceBackButtonInput = () => {
  const router = useRouter();

  const [
    colorIcon,
    setColorIcon
  ] = useState(
    "#617480"
  )

  return (
    <BackButtonInput
      className={saira.className}
      onClick={() => {
        router.push("/")
      }}
      onMouseEnter={() => {
        setColorIcon(
          "#41414D"
        );
      }}
      onMouseLeave={() => {
        setColorIcon(
          "#617480"
        );
      }}
    >
      <IconArrowLeftBack 
        color_icon={colorIcon}
      />
      <p>
        Voltar
      </p>
    </BackButtonInput>
  );
};  

export default PieceBackButtonInput;