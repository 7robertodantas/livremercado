import db from "../database";
import { Seller } from "../schemas/Saller";

export const createSeller = async (seller: Seller): Promise<void> => {
  return new Promise((resolve, reject) => {
    const { id, name, location, salesLastMonths, goodSupport, onTimeDelivery } = seller;
    db.run(`
      INSERT INTO seller (id, name, location, sales_last_months, good_support, on_time_delivery, created_at)
      VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    `, [id, name, location, salesLastMonths, goodSupport, onTimeDelivery], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export const getSellers = async (): Promise<Seller[]> => {
    return new Promise((resolve, reject) => {
      db.all(`
        SELECT 
          id,
          name,
          location,
          sales_last_months as salesLastMonths,
          good_support as goodSupport,
          on_time_delivery as onTimeDelivery,
          created_at as createdAt
        FROM seller
      `, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows as Seller[]);
        }
      });
    });
  };

export const getSellersPages = async (page: number, size: number): Promise<Seller[]> => {
  const offset = page * size;
  return new Promise((resolve, reject) => {
    db.all(`
      SELECT 
        id,
        name,
        location,
        sales_last_months as salesLastMonths,
        good_support as goodSupport,
        on_time_delivery as onTimeDelivery,
        created_at as createdAt
      FROM seller
      LIMIT ? OFFSET ?
    `, [size, offset], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows as Seller[]);
      }
    });
  });
};

export const getSellerById = async (id: string): Promise<Seller | null> => {
  return new Promise((resolve, reject) => {
    db.get(`
      SELECT 
        id,
        name,
        location,
        sales_last_months as salesLastMonths,
        good_support as goodSupport,
        on_time_delivery as onTimeDelivery,
        created_at as createdAt
      FROM seller
      WHERE id = ?
    `, [id], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row ? (row as Seller) : null);
      }
    });
  });
};

export const updateSeller = async (id: string, updates: Partial<Seller>): Promise<void> => {
  const allowedFields = ["name", "location", "sales_last_months", "good_support", "on_time_delivery"];
  const updateEntries = Object.entries(updates).filter(([key]) => allowedFields.includes(key));

  if (updateEntries.length === 0) {
    throw new Error("No valid fields to update");
  }

  const fields = updateEntries.map(([key]) => `${key} = ?`).join(", ");
  const values = updateEntries.map(([, value]) => value);

  return new Promise((resolve, reject) => {
    db.run(`
      UPDATE seller
      SET ${fields}
      WHERE id = ?
    `, [...values, id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export const deleteSeller = async (id: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.run(`
      DELETE FROM seller
      WHERE id = ?
    `, [id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
