'use client';

import styled from "styled-components";
import Card from "../Card";
import { Product } from "@/types/Product";
import Link from "next/link";
 
const MiniCard = styled.div`
 padding-top:10px

`
const Landing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export interface LandingProductsProps {
  products: Array<Product>
}


const LandingProducts = ({ products } : LandingProductsProps) => {

  const productCards = products?.map( (product) => { return (
    <MiniCard key={product.title}>
      <Card title={product.title} imgUrl={product.imageUrl} price={product.price} id={product.id}> </Card>
    </MiniCard>) });

  return (
    <Landing>
      {productCards}
    </Landing>
  );
};

export default LandingProducts;