'use client';

import { ChildrenProps } from "@/types";
import styled from "styled-components";
import { useRouter } from "next/navigation";

export interface CardProps {
  title: string;
  imgUrl: string;
  price:  number;
  id: string;
} 

const CardDiv = styled.div`
  background-color: #fff;
  color: #e9e9e9;
  width: 250px;
  height: 300px;
  border-radius: 10px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12); 
  transition: opacity 5s;
  `

const Title = styled.h1`
  color: rgba(0, 0, 0, .9);
  font-size: 14px;
  font-weight: 600;
  padding: 5px 12px 16px 16px;
  text-decoration: none;
  text-align: center;
  overflow: hidden;           
  display: -webkit-box;       
  -webkit-line-clamp: 2;      
  -webkit-box-orient: vertical; 
  word-wrap: break-word;      
  max-width: 240px;
  height: 40px   
`

const Price = styled.h2`
  color: rgba(0, 0, 0, .9);
  font-size: 20px;
  font-weight: 900;
  text-decoration: none;
  text-align: center;     
  max-width: 240px;  
`

const Freight = styled.h3`
  color: rgba(0, 166, 80, .9);
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;     
  max-width: 240px;  
`

const CardContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 12px 16px 16px;
  border-radius: 6px;
  gap: 5px
`
const ProductImage = styled.img`
  width: 240px;
  height: 180px;
  object-fit: scale-down;
`


const Card = ({ title, imgUrl,price,id } : CardProps & ChildrenProps) => {
  const router = useRouter();
  const handleClick = () => {
  router.push("/product/"+ id); // Navega para a nova rota
  };
  return (
    <CardDiv>
      <CardContent onClick={handleClick}>
      <ProductImage src={imgUrl} alt={title} />
      <Title>{title}</Title>
      <Price>R$ {price}</Price>
      <Freight>Frete Grátis</Freight>
      </CardContent>
    </CardDiv>
  );
};

export default Card;