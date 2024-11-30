'use client';

import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useState } from 'react';
import { useEffect } from 'react';
import { getCartMetadata } from "@/services/checkout";

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
  const [cartCount, setCartCount] = useState(0);

  const handleCartButtonClick = () => {
    router.push('/checkout');
  };

    useEffect(() => {
        const fetchCartMetadata = async () => {
            try {
                const metadata = await getCartMetadata();
                setCartCount(metadata.total);
            } catch (error) {
                console.error('Failed to fetch cart metadata:', error);
            }
        };

        fetchCartMetadata();
    }, []);

  return (
    <CartButton onClick={handleCartButtonClick}>
            Carrinho ({cartCount})
            <span className="material-symbols-outlined">shopping_cart</span>
    </CartButton>
  );
}

export default CartButtonComponent;