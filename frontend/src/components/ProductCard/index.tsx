'use client';

import { Product } from "@/types/Product";
import styled from "styled-components";
import Card from "../Card";

const MiniCard = styled.div`
 padding-top:10px

`

export interface ProductCardProps {
    product: Product;
  }
  

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <MiniCard key={product.title}>
          <Card title={product.title} imgUrl={product.imageUrl} price={product.price} id={product.id}> </Card>
        </MiniCard>
    );
}

export default ProductCard;
