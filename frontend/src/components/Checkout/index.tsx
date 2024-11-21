'use client';

import styled from "styled-components";
import { CartItem } from "@/types/CartItem";
import ItemCheckout from "../ItemCheckout";
 
const MiniCard = styled.div`
  max-width: 500px;
`

export interface CheckoutProps {
  products: Array<CartItem>
}

const Checkout = ({ products } : CheckoutProps) => {

  const productCheckout = products?.map( (product) => { return (
    <MiniCard key={product.index}>
      <ItemCheckout image={product.product.imageUrl} product={product.product} quantity={product.quantity} />
    </MiniCard>) });

  return (
    <div>
      {productCheckout}
    </div>
  );
};

export default Checkout;