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

const header: HeaderProps = {
  title: 'Livre Mercado',
  links: [{
    title: 'Home',
    href: '/'
  },
  {
    title: 'Buscar',
    href: '/search'
  }]
};

const footer: FooterProps = {
  text: 'Copyright © 1999-2024 livre mercado.'
};

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <Page>
      <Header {...header}></Header>
      <Main>{children}</Main>
      <Footer {...footer}></Footer>
    </Page>
  );
}