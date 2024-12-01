'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Footer, { FooterProps } from '@/components/Footer';
import Header, { HeaderProps } from '@/components/Header';
import Main from '@/components/Main'
import styled from 'styled-components';
import { ChildrenProps } from '@/types';
import { CartContext, CartContextType } from '@/context/CartContext';
import { getCartMetadata } from '@/services/checkout';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;  
`

export default function MainLayout({ children }: ChildrenProps) {
  const [cartCount, setCartCount] = useState(0);
  const ctx : CartContextType = { total: cartCount, setTotal: setCartCount };

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
    <CartContext.Provider value={ctx}>
      <Page>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Page>
    </CartContext.Provider>
  );
}