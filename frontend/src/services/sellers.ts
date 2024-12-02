'use server';

import { Seller } from "@/types/Seller";

export async function getSellerById({ id }: { id: string }): Promise<Seller> {
  const response = await fetch(`http://localhost:4000/seller/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch seller with ID ${id}: ${response.statusText}`);
  }

  const result = await response.json();
  return result;
}