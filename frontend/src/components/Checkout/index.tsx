'use client';

import styled from "styled-components";
import { CartItem } from "@/types/CartItem";
import ItemCheckout from "../ItemCheckout";
 
const MiniCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckoutItemsDiv = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 0px;
  background: white;
  border-radius: 12px;
  margin: 0 auto;
  margin-top: 10px;
  box-shadow: 0px 10px 10px 4px #b0b0b0;
`;

const Total = styled.div`
  color: black;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-top: 24px;
`;

const Button = styled.button`
  padding: 6px 24px;
  font-size: 24px;
  font-weight: bold;
  background-color: #00A650;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.5s;

  &:hover{
    background-color: #097a3f;
  }
`;

// const CheckoutDiv = styled.div`
//   display: flex:
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

export interface CheckoutProps {
  products: Array<CartItem>
}

const Checkout = ({ products } : CheckoutProps) => {

  const productCheckout = products?.map( (product) => { return (
    <MiniCard key={product.index}>
      <ItemCheckout image={product.product.imageUrl} product={product.product} quantity={product.quantity} />
    </MiniCard>) });

  const totalValue = products.reduce((item, {product}) => item + product.price, 0);

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <CheckoutItemsDiv>
        {productCheckout}
      </CheckoutItemsDiv>
      <Total>Valor Total: R$ {totalValue}</Total>
      <Button>Checkout</Button>
    </div>
  );
};

export default Checkout;