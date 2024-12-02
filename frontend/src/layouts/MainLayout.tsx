'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Main from '@/components/Main'
import styled from 'styled-components';
import { ChildrenProps } from '@/types';
import CartContextProvider, {  } from '@/context/CartContext';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;  
`

export default function MainLayout({ children }: ChildrenProps) {

  return (
    <CartContextProvider>
      <Page>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Page>
    </CartContextProvider>
  );
}