'use client';

import styled from "styled-components";
import { Product } from "@/types/Product";
import { Page, PageFactory } from "@/types/Page";
import ProductCard from "../ProductCard";
import NavButton from "./NavButton";
import { useEffect, useState } from "react";
import { listProducts } from "@/services/products";
 
const LandingPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const Landing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export interface LandingProductsProps {
  page: number;
  size: number;
  search: string;
}

const getProductsUrl = (page: number, search: string) => {
  const params = new URLSearchParams({
    'page': page.toString(),
  });

  if (search) {
    params.append('search', search);
  }

  return `/products?${params}`;
};

const LandingProducts = ({ page, size, search } : LandingProductsProps) => {
  const [productsPage, setProductsPage] = useState<Page<Product>>(PageFactory.emptyPage<Product>());

  useEffect(() => {
    listProducts({page , size, search}).then(setProductsPage);
  }, [page, size, search]);


  const productCards = productsPage.items?.map( (product) => { return (<ProductCard key={product.id} product={product} />) });

  return (
    <LandingPage>
      {productsPage.hasPreviousPage && <NavButton icon='<' url={getProductsUrl(productsPage.previousPage, search)} />}
      <Landing>
        {productCards}
      </Landing>
      {productsPage.hasNextPage && <NavButton icon='>' url={getProductsUrl(productsPage.nextPage, search)} />}
    </LandingPage>
  );
};

export default LandingProducts;