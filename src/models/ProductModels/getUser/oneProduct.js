import {pool} from "../../../database/config.js";

export const oneProduct = async (id) => {
  const text = "SELECT * FROM products WHERE id = $1";
  const values = [id];
  const {rows} = await pool.query(text, values);
  if (!rows[0]) {
    throw new Error(404);
  }
  return rows[0];
};
