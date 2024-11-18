'use client';

import type { ReactNode } from 'react';
import Footer, { FooterProps } from '@/components/Footer';
import Header, { HeaderProps } from '@/components/Header';
import Main from '@/components/Main'
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;  
`

export interface MainLayoutProps {
  children: ReactNode;
  header: HeaderProps;
  footer: FooterProps;
}

export default function MainLayout({ children, header, footer }: MainLayoutProps) {
  return (
    <Page>
      <Header {...header}></Header>
      <Main>{children}</Main>
      <Footer {...footer}></Footer>
    </Page>
  );
}