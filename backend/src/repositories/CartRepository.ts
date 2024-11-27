import { Cart } from "../schemas/Cart";

import db from "../database";

interface CartItemQuery {
  cartItemId: number;
  productId: string;
  title: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  isFavorite: boolean;
  sellerId: string | null;
  quantity: number;
};

const getCartItems = async (): Promise<CartItemQuery[]> => {
  return new Promise((resolve, reject) => {
    db.all(`
      SELECT 
        c.id as cartItemId, 
        p.id as productId, 
        p.title, 
        p.description, 
        p.price, 
        p.category, 
        p.image_url as imageUrl,
        p.is_favorite as isFavorite,
        p.seller_id as sellerId,
        c.quantity 
      FROM cart_item c 
      LEFT JOIN product p ON c.product_id = p.id
    `,
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows as CartItemQuery[]);
        }
    });
  });
};

export const addProductToCart = async (productId: string, quantity: number) => {
  return new Promise((resolve, reject) => {
    db.run(`
      INSERT INTO cart_item (product_id, quantity) 
      VALUES (?, ?)
    `, [productId, quantity], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID });
        }
    });
  });
};

export const getCart = async () => {
  const cartItems = await getCartItems();

  const cart: Cart = {
    items: cartItems.map((item: CartItemQuery) => ({
      id: item.cartItemId,
      product: {
        id: item.productId,
        title: item.title,
        description: item.description,
        price: item.price,
        category: item.category,
        imageUrl: item.imageUrl,
        isFavorite: item.isFavorite,
        sellerId: item.sellerId,
      },
      quantity: item.quantity
    }))
  };

  return cart;
};

export const updateProductInCart = async (productId: string, quantity: number) => {
  return new Promise((resolve, reject) => {
    db.run(`
      UPDATE cart_item 
      SET quantity = ? 
      WHERE product_id = ?
    `, [quantity, productId], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ changes: this.changes });
        }
    });
  });
};

export const removeProductFromCart = async (productId: string) => {
  return new Promise((resolve, reject) => {
    db.run(`
      DELETE FROM cart_item 
      WHERE product_id = ?
    `, [productId], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ changes: this.changes });
        }
    });
  });
};