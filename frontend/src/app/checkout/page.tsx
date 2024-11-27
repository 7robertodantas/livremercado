'use client';

import MainLayout from '@/layouts/MainLayout';
import { CartItem } from '@/types/CartItem';
import Checkout from '@/components/Checkout';

const cart: Array<CartItem> = [
    {
        id: 1,
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
        id: 2,
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

export default function Home() {
  return (
    <MainLayout>
      <Checkout products={cart}></Checkout>
    </MainLayout>
  );
}