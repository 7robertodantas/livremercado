'use client';

import styled from "styled-components";
import { CartItem } from "@/types/CartItem";
import ItemCheckout from "../ItemCheckout";
import { useState, useEffect } from 'react';
import { deleteCartItem, listCartItems, updateCartItem } from "@/services/checkout";

const CheckoutItemsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const EmptyCart = styled.span`
  font-size: 24px;
  color: black;
  font-weight: regular;
  text-align: center;
`

const Checkout = () => {
  const [productList, setProductList] = useState<CartItem[]>([]);
  const [totalValue, setTotalValue] = useState<number>(0);

  const loadTotalValue = () => {
    const newTotalValue = productList.reduce((total, { product, quantity }) => total + product.price * quantity, 0);
    setTotalValue(newTotalValue);
  };

  const loadCart = async () => {
    const page = await listCartItems();
    setProductList(page.items);
  };

  const handleUpdateQuantity = async (id: string, newQuantity: number) => {
    await updateCartItem(id, newQuantity);
    loadCart();
  };

  const handleRemoveItem = async (id: string) => {
    await deleteCartItem(id);
    loadCart();
  };
  
  useEffect(() => {
    loadCart();
  }, []);

  useEffect(() => {
    loadTotalValue();
  }, [productList]);

  const productCheckout = productList?.map((product) => {
    return (
      <ItemCheckout key={product.id}
                    image={product.product.imageUrl}
                    product={product.product}
                    quantity={product.quantity}
                    onRemove={() => handleRemoveItem(product.product.id)}
                    onUpdateQuantity={(newQuantity) => handleUpdateQuantity(product.product.id, newQuantity)} />
    );
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <CheckoutItemsDiv>
        {productCheckout.length > 0 ? (productCheckout) : (<EmptyCart>Carrinho está vazio</EmptyCart>)}
      </CheckoutItemsDiv>
      <Total>Valor Total: R$ {totalValue}</Total>
      <Button>Checkout</Button>
    </div>
  );
};

export default Checkout;