'use client';

import { ChildrenProps } from "@/types";
import styled from "styled-components";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export interface CardProps {
  title: string;
  imgUrl: string;
  price: number;
}

// Estilização do botão
const Button = styled.button`
  background-color: #fff;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12); 
`;

interface ButtonProps {
  action: 'next' | 'prev';
}

const Title = styled.h1`
  color: #B0B0B0; 
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
`

export interface ArrowButtonProps {
  url: string;
  icon: string;
}

export const ArrowButton = ({ url, icon } : ArrowButtonProps) => {
  const router = useRouter();
  const handleClick = () => {
    console.log(`Navegando para a página: ${url}`);
    router.push(url);
  };

  return (
    <Button onClick={handleClick}>
     <Title>{icon}</Title>
    </Button>
  );
};
