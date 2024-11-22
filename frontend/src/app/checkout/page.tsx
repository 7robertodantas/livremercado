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

const cart: Array<CartItem> = [
    {
        index: 1,
        product: {
          id: 'df0c11a4-a7fc-4531-86a4-b0181ba5cdd6',
          title: 'Product 1',
          description: 'Description for product 1',
          price: 29.99,
          category: 'Category 1',
          imageUrl: 'https://via.placeholder.com/150'
        },
        quantity: 2
      },
      {
        index: 2,
        product: {
          id: 'a5f14cdf-37e4-41d7-9e93-f42f346869f5',
          title: 'Product 2',
          description: 'Description for product 2',
          price: 49.99,
          category: 'Category 2',
          imageUrl: 'https://via.placeholder.com/150'
        },
        quantity: 1
      }
]

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
  //const [products, setProducts] = useState<Product[]>([]);
  // const [cart, setCart] = useState<CartItem[]>([]);

//   useEffect(() => {
//     listProducts({ page: 0, size: 10 }).then(setProducts);
//   }, []);

  // useEffect(() => {
  //   listCartItems().then(setCart);
  // }, []);

  return (
    <MainLayout header={header} footer={footer}>
      {/* <LandingProducts products={products}></LandingProducts> */}
      <Checkout products={cart}></Checkout>
    </MainLayout>
  );
}