'use server'

import { Product } from "@/types/Product";


export async function listProducts({ page, size }: { page: number, size: number }): Promise<Product[]> {
  const params = new URLSearchParams({
    'page': page ? page.toString() : '0',
    'size': size ? size.toString() : '10'
  });

  const response = await fetch(`http://localhost:4000/products?${params}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const result = await response.json();
  return result;
}