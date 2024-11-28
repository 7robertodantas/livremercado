'use client';

import type { ReactNode } from 'react';
import Footer, { FooterProps } from '@/components/Footer';
import Header, { HeaderProps } from '@/components/Header';
import Main from '@/components/Main'
import styled from 'styled-components';
import { ChildrenProps } from '@/types';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;  
`

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <Page>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Page>
  );
}