'use client';

import MainLayout from '@/layouts/MainLayout';
import { Product } from '@/types/Product';
import { getProductById } from '@/services/products';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';

export default function PageComponent() {
  const params = useParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (params.id) {
      getProductById({ id: params.id.toString() }).then(setProduct);
    }
  }, [params]);

  return (
    <MainLayout>
      {product && <ProductCard product={product} />}
    </MainLayout>
  );
}