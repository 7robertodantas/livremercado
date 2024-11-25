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




const ArrowButton: React.FC<ButtonProps> = ({ action}) => {
  const params = useParams();
  // Garante que params.id seja uma string única ou use um valor padrão
  const idAsString = Array.isArray(params.id) ? params.id[0] : params.id;

  // Converte para número com parseInt e define um fallback
  const currentId = idAsString ? parseInt(idAsString, 10) : 1;

  const router = useRouter();

  const handleClick = () => {
    // Incrementa ou decrementa o valor na URL, dependendo da ação
    const newPage = action === 'next' ? currentId + 1 : currentId - 1;

    // Adicionar lógica para atualizar a URL (se necessário)
    console.log(`Navegando para a página: ${newPage}`);
    const nextUrl = newPage != 0 ?  "/products/"+ newPage : "/"
    router.push(nextUrl); // Navega para a nova rota
  };

  return (
    <Button onClick={handleClick}>
     <Title>{action === 'next' ? '>' : '<'}</Title>  {/* Muda o símbolo conforme a ação */}
    </Button>
  );
};

const NextPage = () => { 
  const currentPage = 1; 
  return (
    <div>
      <ArrowButton action="next" />
    </div>
  );
};

const PrevPage = () => { 
  const currentPage = 1; 
  return (
    <div>
      <ArrowButton action="prev" /> 
    </div>
  );
}; 

// Exporta os dois componentes
export { NextPage, PrevPage };
