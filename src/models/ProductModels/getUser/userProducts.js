import {pool} from "../../../database/config.js";

export const getUserProducts = async (userId) => {
  const text = "SELECT * FROM products WHERE userId = $1";
  const values = [userId];
  const {rows} = await pool.query(text, values);
  return rows;
};
