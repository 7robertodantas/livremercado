'use client';

import MainLayout from '@/layouts/MainLayout';
import Checkout from '@/components/Checkout';

export default function Home() {
  return (
    <MainLayout>
      <Checkout />
    </MainLayout>
  );
}