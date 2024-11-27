'use client';

import styled from "styled-components";
import { useRouter } from "next/navigation";

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

const Title = styled.h1`
  color: #B0B0B0; 
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
`;

export interface ArrowButtonProps {
  url: string;
  icon: string;
}

const NavButton = ({ url, icon } : ArrowButtonProps) => {
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

export default NavButton;
