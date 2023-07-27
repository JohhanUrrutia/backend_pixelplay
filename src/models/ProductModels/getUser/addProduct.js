import {pool} from "../../../database/config.js";

export const addProduct = async (
  name,
  description,
  price,
  category,
  stock,
  image,
  userId
) => {
  const text =
    "INSERT INTO products (name, description, price, category, stock, image, userId) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
  const values = [name, description, price, category, stock, image, userId];
  const {rows} = await pool.query(text, values);
  return rows[0];
};
