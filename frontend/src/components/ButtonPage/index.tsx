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


export interface PageProps {
  page: number;
}

export interface ArrowButtonProps {
  page: number;
  icon: string;
}



const ArrowButton = ({ page, icon } : ArrowButtonProps) => {
  const router = useRouter();
  const handleClick = () => {
    const params = new URLSearchParams({
      'page': page ? page.toString() : '0',
    });

    const newPage = `/products?${params}`;
    console.log(`Navegando para a página: ${newPage}`);
    router.push(newPage); // Navega para a nova rota
  };

  return (
    <Button onClick={handleClick}>
     <Title>{icon}</Title>  {/* Muda o símbolo conforme a ação */}
    </Button>
  );
};

const NextPage = ({ page }: PageProps) => { 
  return (
    <div>
      <ArrowButton page={page+1} icon=">" />
    </div>
  );
};

const PrevPage = ({ page }: PageProps) => { 
  if (page > 0) {
    return (
      <div>
        <ArrowButton page={page-1} icon="<" /> 
      </div>
    );
  }
  return <></>
}; 

// Exporta os dois componentes
export { NextPage, PrevPage };
