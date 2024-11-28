import { Product } from "../schemas/Product";

import db from "../database";
import { Page, PageFactory } from "../schemas/Page";

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

export const getProducts = async (page: number, size: number, search?: string): Promise<Page<Product>> => {
  const offset = page * size;
  const searchQuery = search ? `%${search}%` : null;
  const searchCondition = searchQuery ? `WHERE p.title LIKE ?` : '';
  const queryParams = searchQuery ? [searchQuery, size, offset] : [size, offset];

  return new Promise((resolve, reject) => {
    db.get(`SELECT COUNT(*) as count FROM product p ${searchCondition}`, searchQuery ? [searchQuery] : [], (err, result: { count: number }) => {
      if (err) {
        reject(err);
      } else {
        const totalElements = result.count;

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
          ${searchCondition}
          LIMIT ? OFFSET ?
        `, queryParams, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(PageFactory.of<Product>(page, size, rows as Product[], totalElements));
          }
        });
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
