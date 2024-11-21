'use client';

import { FooterProps } from '@/components/Footer';
import { HeaderProps } from '@/components/Header';
import LandingProducts from '@/components/LandingProducts';
import MainLayout from '@/layouts/MainLayout';
import { Product } from '@/types/Product';
import { listCartItems, listProducts } from '@/services/products';
import { ItemCheckout } from '@/components/ItemCheckout';
import { useEffect, useState } from 'react';
import { CartItem } from '@/types/CartItem';
import Checkout from '@/components/Checkout';

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
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    listProducts({ page: 0, size: 10 }).then(setProducts);
  }, []);

  useEffect(() => {
    listCartItems().then(setCart);
  }, []);

  return (
    <MainLayout header={header} footer={footer}>
      <LandingProducts products={products}></LandingProducts>
      <Checkout products={cart}></Checkout>
    </MainLayout>
  );
}