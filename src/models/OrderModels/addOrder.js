import {pool} from "../../database/config.js";

export const addOrder = async (userid, productid, quantity) => {
  const text =
    "INSERT INTO orders (userid, productid, quantity) VALUES ($1, $2, $3) RETURNING *";
  const values = [userid, productid, quantity];
  const {rows} = await pool.query(text, values);
  return rows[0];
};
