'use client';

import { FooterProps } from '@/components/Footer';
import { HeaderProps } from '@/components/Header';
import LandingProducts from '@/components/LandingProducts';
import MainLayout from '@/layouts/MainLayout';
import { Product } from '@/types/Product';
import { listProducts } from '@/services/products';
import { useEffect, useState } from 'react';

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



export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    listProducts({ page: 0, size: 10 }).then(setProducts);
  }, []);

  return (
    <MainLayout header={header} footer={footer}>
      <LandingProducts products={products}></LandingProducts>
    </MainLayout>
  );
}