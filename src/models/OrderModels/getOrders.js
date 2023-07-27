import {pool} from "../../database/config.js"

export const getOrdersById = async (userId) => {
  const text = "SELECT * FROM orders WHERE userid = $1";
  const values = [userId];
  const {rows} = await pool.query(text, values);
  return rows;
};