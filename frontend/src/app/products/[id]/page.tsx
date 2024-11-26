'use client';

import MainLayout from '@/layouts/MainLayout';
import { Product } from '@/types/Product';
import { getProductById, listProducts } from '@/services/products';
import { useEffect, useState } from 'react';
import styled from "styled-components";
import { useParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';


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
      {product && <ProductCard product={product} />}
    </MainLayout>
  );
}