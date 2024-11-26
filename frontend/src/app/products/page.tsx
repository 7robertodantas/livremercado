'use client';

import LandingProducts from '@/components/LandingProducts';
import { ArrowButton, NextPage, PrevPage } from '@/components/ButtonPage';
import MainLayout from '@/layouts/MainLayout';
import { Product } from '@/types/Product';
import { listProducts } from '@/services/products';
import { useEffect, useState } from 'react';
import styled from "styled-components";
import { useSearchParams } from "next/navigation";
import { Page, PageFactory } from '@/types/Page';


const LandingPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export default function Home() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Page<Product>>(PageFactory.emptyPage<Product>());

  const search = { 
    page: parseInt(searchParams.get('page') || '0', 10), 
    size: parseInt(searchParams.get('size') || '3', 10)
  };

  const getProductsUrl = (page: number) => {
    const params = new URLSearchParams({
      'page': page.toString(),
    });
    return `/products?${params}`;
  };

  useEffect(() => {
    listProducts(search).then(setProducts);
  }, [searchParams]);

  return (
    <MainLayout>
      <LandingPage>
        {products.hasPreviousPage && <ArrowButton icon='<' url={getProductsUrl(products.previousPage)}></ArrowButton>}
          <LandingProducts productsPage={products}></LandingProducts>
        {products.hasNextPage && <ArrowButton icon='>' url={getProductsUrl(products.nextPage)}></ArrowButton>}
      </LandingPage>
    </MainLayout>
  );
}