'use client';

import styled from "styled-components";
import { Product } from "@/types/Product";
import { Page } from "@/types/Page";
import ProductCard from "../ProductCard";
 

const Landing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export interface LandingProductsProps {
  productsPage: Page<Product>
}

const LandingProducts = ({ productsPage } : LandingProductsProps) => {
  const productCards = productsPage.items?.map( (product) => { return (<ProductCard product={product} />) });

  return (
    <Landing>
      {productCards}
    </Landing>
  );
};

export default LandingProducts;