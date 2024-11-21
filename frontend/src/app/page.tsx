'use client';

import { FooterProps } from '@/components/Footer';
import { HeaderProps } from '@/components/Header';
import LandingProducts from '@/components/LandingProducts';
import { NextPage, PrevPage } from '@/components/ButtonPage';
import MainLayout from '@/layouts/MainLayout';
import { Product } from '@/types/Product';
import { listProducts } from '@/services/products';
import { useEffect, useState } from 'react';
import styled from "styled-components";

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

const LandingPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    listProducts({ page: 0, size: 3 }).then(setProducts);
  }, []);

  return (
    <MainLayout header={header} footer={footer}>
      <LandingPage>
        <LandingProducts products={products}></LandingProducts>
        <NextPage></NextPage>
      </LandingPage>

    </MainLayout>
  );
}