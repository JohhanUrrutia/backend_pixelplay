import {pool} from "../../../database/config.js";

export const userNotTaken = async (userName) => {
  const text = "SELECT userName FROM users WHERE userName = $1";
  const values = [userName];
  const {rows} = await pool.query(text, values);
  if (rows.length > 0) {
    throw new Error("username-already-taken");
  }
  return rows[0];
};
