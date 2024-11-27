'use client';

import LandingProducts from '@/components/LandingProducts';
import { NextPage, PrevPage } from '@/components/ButtonPage';
import MainLayout from '@/layouts/MainLayout';
import { Product } from '@/types/Product';
import { listProducts } from '@/services/products';
import { useEffect, useState } from 'react';
import styled from "styled-components";
import { useSearchParams } from "next/navigation";


const LandingPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export default function Home() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);

  const search = { 
    page: parseInt(searchParams.get('page') || '0', 10), 
    size: parseInt(searchParams.get('size') || '3', 10)
  };

  console.log(search);

  useEffect(() => {
    listProducts(search).then(setProducts);
  }, [searchParams]);

  return (
    <MainLayout>
      <LandingPage>
        <PrevPage page={search.page}></PrevPage>
          <LandingProducts products={products}></LandingProducts>
        <NextPage page={search.page}></NextPage>
      </LandingPage>
    </MainLayout>
  );
}