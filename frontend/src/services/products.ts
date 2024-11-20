'use server'

import { Product } from "@/types/Product";


export async function listProducts({ page, size }: { page: number, size: number }): Promise<Product[]> {
  const response = await fetch(`http://localhost:4000/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const result = await response.json();
  return result;
}