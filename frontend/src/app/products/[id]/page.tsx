'use client';

import { FooterProps } from '@/components/Footer';
import { HeaderProps } from '@/components/Header';
import LandingProducts from '@/components/LandingProducts';
import { NextPage, PrevPage } from '@/components/ButtonPage';
import MainLayout from '@/layouts/MainLayout';
import { Product } from '@/types/Product';
import styled from "styled-components";
import { useParams } from "next/navigation";

const products: Array<Product> = 
[
  {
    id: '1',
    title: 'Fone de Ouvido Bluetooth JBL Tune 510BT',
    description: 'Fone de ouvido on-ear sem fio com áudio Pure Bass, bateria de longa duração e conectividade Bluetooth 5.0.',
    price: 179.10,
    category: 'Eletrônicos',
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_822738-MLU72836493509_112023-O.webp' // Imagem do produto
  },
  {
    id: '2',
    title: 'Playstation 5 Ps5 Slim de 1 TB',
    description: 'Description for product 2',
    price: 3299.99,
    category: 'Category 2',
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_948815-MLU76516576246_052024-F.webp'
  },
  {
    id: '3',
    title: 'Product 3',
    description: 'Description for product 3',
    price: 19.99,
    category: 'Category 3',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    id: '4',
    title: 'Product 4',
    description: 'Description for product 3',
    price: 19.99,
    category: 'Category 3',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    id: '5',
    title: 'Product 5',
    description: 'Description for product 3',
    price: 19.99,
    category: 'Category 3',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    id: '6',
    title: 'Product 6',
    description: 'Description for product 3',
    price: 19.99,
    category: 'Category 3',
    imageUrl: 'https://via.placeholder.com/150'
  }
];

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