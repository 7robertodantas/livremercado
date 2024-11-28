'use server'

import { Page } from "@/types/Page";
import { Product } from "@/types/Product";
import { CartItem } from "@/types/CartItem";

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

export async function listProducts({ page, size }: { page: number, size: number }): Promise<Page<Product>> {
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