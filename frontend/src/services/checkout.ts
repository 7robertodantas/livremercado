'use server'

import { CartItem } from "@/types/CartItem";
import { Page, PageMetadata } from "@/types/Page";

export async function listCartItems(): Promise<Page<CartItem>> {
    const response = await fetch(`http://localhost:4000/cart`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const result = await response.json();
    return result;
}

export async function getCartMetadata(): Promise<PageMetadata> {
  const response = await fetch(`http://localhost:4000/cart/metadata`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const result = await response.json();
  return result;
}

export async function updateCartItem(productId: string, quantity: number): Promise<void> {
  await fetch(`http://localhost:4000/cart/products/${productId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ quantity }),
  });
}

export async function deleteCartItem(productId: string): Promise<void> {
  await fetch(`http://localhost:4000/cart/products/${productId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}