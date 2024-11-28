'use server'

import { Page } from "@/types/Page";
import { Product } from "@/types/Product";

export async function getProductById({ id }: { id: string }): Promise<Product> {
  const response = await fetch(`http://localhost:4000/products/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const result = await response.json();
  return result;
}

export async function listProducts({ page, size, search }: { page: number, size: number, search: string }): Promise<Page<Product>> {
  const params = new URLSearchParams({
    'page': page ? page.toString() : '0',
    'size': size ? size.toString() : '10'
  });

  if (search) {
    params.append('search', search);
  }

  console.log('listing products by ', params);

  const response = await fetch(`http://localhost:4000/products?${params}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const result = await response.json();
  return result;
}