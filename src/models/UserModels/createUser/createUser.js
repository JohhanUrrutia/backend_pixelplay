import {pool} from "../../../database/config.js";

export const createUser = async (
  userName,
  firstName,
  lastName,
  email,
  passwordHashed,
  address
) => {
  const text =
    "INSERT INTO users (username, firstName, lastName, email, password, address) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
  const values = [
    userName,
    firstName,
    lastName,
    email,
    passwordHashed,
    address,
  ];
  const {rows} = await pool.query(text, values);
  return rows[0];
};
