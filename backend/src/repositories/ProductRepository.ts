import { Product } from "../schemas/Product";

const products: Array<Product> = 
    [
      {
        id: 'df0c11a4-a7fc-4531-86a4-b0181ba5cdd6',
        title: 'Product 1',
        description: 'Description for product 1',
        price: 29.99,
        category: 'Category 1',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        id: 'a5f14cdf-37e4-41d7-9e93-f42f346869f5',
        title: 'Product 2',
        description: 'Description for product 2',
        price: 49.99,
        category: 'Category 2',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        id: 'e036a66f-5e2e-45de-a063-bc7a7150382f',
        title: 'Product 3',
        description: 'Description for product 3',
        price: 19.99,
        category: 'Category 3',
        imageUrl: 'https://via.placeholder.com/150'
      }
    ];

export const getProducts = async () => {
  return products;
}

export const getProductById = async (id: string) => {
  return products.find(product => product.id === id);
}