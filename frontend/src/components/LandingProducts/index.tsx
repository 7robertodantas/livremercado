'use client';

import styled from "styled-components";
import Card from "../Card";
import { Product } from "@/types/Product";
 
const MiniCard = styled.div`
  max-width: 250px;
`

export interface LandingProductsProps {
  products: Array<Product>
}

const LandingProducts = ({ products } : LandingProductsProps) => {

  const productCards = products?.map( (product) => { return (
    <MiniCard key={product.title}>
      <Card title={product.title}>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </Card>
    </MiniCard>) });

  return (
    <div>
      {productCards}
    </div>
  );
};

export default LandingProducts;