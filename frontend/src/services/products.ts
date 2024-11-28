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


export async function updateProductFavorite(
  id: string,
  isFavorite: boolean
): Promise<{ message: string }> {
  try {
    console.log("==================> updateProductFavorite ", id, isFavorite);
    if (!id) {
      throw new Error("ID do produto não fornecido.");
    }
    isFavorite = Boolean(isFavorite);


    if (typeof isFavorite !== "boolean") {

      throw new Error("`isFavorite` deve ser um valor booleano.", isFavorite);
    }

    const response = await fetch(`http://localhost:4000/products/${id}/favorite`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isFavorite }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Falha ao atualizar o status de favorito do produto (ID: ${id}): ${response.statusText} - ${errorText}`
      );
    }

    const result: { message: string } = await response.json();
    return result;
  } catch (error) {
    console.error("Erro na função updateProductFavorite:", error);
    throw error;
  }
}