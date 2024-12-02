'use server'

import { CartItem } from "@/types/CartItem";
import { Page } from "@/types/Page";

export async function getCart(): Promise<Page<CartItem>> {
    const response = await fetch(`http://localhost:4000/cart`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const result = await response.json();
    return result;
}

export async function addCartItem(productId: string): Promise<void> {
  await fetch(`http://localhost:4000/cart/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productId }),
  });
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