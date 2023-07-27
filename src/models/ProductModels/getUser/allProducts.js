import {pool} from "../../../database/config.js";

export const allProducts = async () => {
  const text = "SELECT * FROM products";
  const {rows} = await pool.query(text);
  return rows;
};
