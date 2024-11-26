'use client';

import LandingProducts from '@/components/LandingProducts';
import { NextPage, PrevPage } from '@/components/ButtonPage';
import MainLayout from '@/layouts/MainLayout';
import { Product } from '@/types/Product';
import { getProductById, listProducts } from '@/services/products';
import { useEffect, useState } from 'react';
import styled from "styled-components";
import { useParams } from 'next/navigation';


const LandingPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export default function Home() {
  const params = useParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (typeof params.id === 'string') {
      getProductById({ id: params.id }).then(setProduct);
    }
  }, [params]);

  return (
    <MainLayout>
      {product && <LandingProducts products={[product]}></LandingProducts>}
    </MainLayout>
  );
}