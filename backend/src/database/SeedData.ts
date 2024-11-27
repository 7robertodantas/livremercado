import db from "./index";
import fs from 'fs';
import path from 'path';

export const seedDatabase = async () => {

  const seedDown = path.resolve(__dirname, '../../db/seed/seed-down.sql');
  const seedUp = path.resolve(__dirname, '../../db/seed/seed-up.sql');
  const seedDownSql = fs.readFileSync(seedDown, 'utf-8');
  const seedUpSql = fs.readFileSync(seedUp, 'utf-8');

  try {
    await new Promise((resolve, reject) => {
      db.exec(seedDownSql, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log("[seed cleanup] SQL script executed successfully.");
          resolve(null);
        }
      });
    });

    await new Promise((resolve, reject) => {
      db.exec(seedUpSql, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log("[seed populate] SQL script executed successfully.");
          resolve(null);
        }
      });
    });
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};
