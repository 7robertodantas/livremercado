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
import { useParams } from "next/navigation";



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
  const params = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    listProducts({ page: 0, size: 10 }).then(setProducts);
  }, []);
  const idAsString = Array.isArray(params.id) ? params.id[0] : params.id;
  const currentId = idAsString ? parseInt(idAsString, 10) : 1;
  const offset = (currentId -1) * 3;
  const selectedProducts = products.slice(offset, offset+3);

  return (
    <MainLayout header={header} footer={footer}>
      <LandingPage>
      <PrevPage></PrevPage>
      <LandingProducts products={selectedProducts}></LandingProducts>
      <NextPage></NextPage>
      </LandingPage>

    </MainLayout>
  );
}