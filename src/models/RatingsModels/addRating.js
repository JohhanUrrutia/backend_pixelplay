import { pool } from "../../database/config.js";

export const addRating = async (userId, productid, rating, comment, userName) => {
  const text = "INSERT INTO ratings (userid, productid, rating, comment, username) VALUES ($1, $2, $3, $4, $5) RETURNING *";
  const values = [userId, productid, rating, comment, userName];
  const {rows} = await pool.query(text, values);
  return rows[0];
};
