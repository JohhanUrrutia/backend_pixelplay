import {pool} from "../../database/config.js";
import { handleErrors } from "../../helpers/handleErrors.js";

export const verifyDeleteProduct = async (req, res, next) => {
  try {
    const {id} = req.params;
    const {userId} = req.body.payload;
    const text = "SELECT * FROM products WHERE id = $1";
    const values = [id];
    const {rows} = await pool.query(text, values);
    if (rows.length === 0) {
      throw new Error(404);
    }
    console.log(rows[0]);
    if (rows[0].userid !== userId) {
      throw new Error(401);
    }
    next();
  } catch (error) {
    const {status, message} = handleErrors(error.message);
    return res.status(status).json({ok: false, message: message});
  }
};
