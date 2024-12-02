'use client';

import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useCartContext } from "@/context/CartContext";

const CartButton = styled.button`
  background: var(--c6);
  color: var(--c1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 48px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  height: 50%;

  span {
    margin-left: 8px;
    font-family: 'Material Icons';
    font-size: 24px;
    color: var(--c1);
  }
`;

const CartButtonComponent = () => {
  const router = useRouter();
  const cart = useCartContext();

  const handleCartButtonClick = () => {
    router.push('/checkout');
  };

  return (
    <CartButton onClick={handleCartButtonClick}>
            Carrinho ({cart.totalItems})
            <span className="material-symbols-outlined">shopping_cart</span>
    </CartButton>
  );
}

export default CartButtonComponent;