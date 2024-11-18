'use client';

import { FooterProps } from '@/components/Footer';
import { HeaderProps } from '@/components/Header';
import LandingProducts from '@/components/LandingProducts';
import MainLayout from '@/layouts/MainLayout';
import { Product } from '@/types/Product';

const products: Array<Product> = 
[
  {
    id: '1',
    title: 'Product 1',
    description: 'Description for product 1',
    price: 29.99,
    category: 'Category 1',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    id: '2',
    title: 'Product 2',
    description: 'Description for product 2',
    price: 49.99,
    category: 'Category 2',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    id: '3',
    title: 'Product 3',
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

export default function Home() {
  return (
    <MainLayout header={header} footer={footer}>
      <LandingProducts products={products}></LandingProducts>
    </MainLayout>
  );
}