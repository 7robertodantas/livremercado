import { Product } from "../schemas/Product";

import db from "../database";

export const createProduct = async (product: Product): Promise<void> => {
  return new Promise((resolve, reject) => {
    const { id, title, description, price, category, imageUrl, sellerId } = product;
    db.run(`
      INSERT INTO product (id, title, description, price, category, image_url, seller_id)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `, [id, title, description, price, category, imageUrl, sellerId], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export const getProducts = async (page: number, size: number): Promise<Product[]> => {
  const offset = (page) * size;
  return new Promise((resolve, reject) => {
    db.all(`
      SELECT 
        p.id,
        p.title,
        p.description,
        p.price,
        p.category,
        p.image_url as imageUrl,
        p.is_favorite as isFavorite,
        p.seller_id as sellerId
      FROM product p
      LIMIT ? OFFSET ?
    `, [size, offset], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows as Product[]);
      }
    });
  });
}

export const getProductById = async (id: string): Promise<Product | null> => {
  return new Promise((resolve, reject) => {
    db.get(`
      SELECT 
        p.id,
        p.title,
        p.description,
        p.price,
        p.category,
        p.image_url as imageUrl,
        p.is_favorite as isFavorite,
        p.seller_id as sellerId
      FROM product p
      WHERE p.id = ?
    `, [id], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row ? (row as Product) : null);
      }
    });
  });
};

export const updateProductFavorite = async (id: string, isFavorite: boolean): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.run(`
      UPDATE product
      SET is_favorite = ?
      WHERE id = ?
    `, [isFavorite, id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
