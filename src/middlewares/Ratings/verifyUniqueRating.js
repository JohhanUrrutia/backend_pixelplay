import {pool} from "../../database/config.js";
import { handleErrors } from "../../helpers/handleErrors.js";

export const verifyUniqueRating = async (req, res, next) => {
  try {
    const {productid} = req.params;
    const {userId} = req.body.payload;
    const text = "SELECT * FROM ratings WHERE userid = $1 AND productid = $2";
    const values = [userId, productid];
    const {rows} = await pool.query(text, values);
    if (rows.length > 0) {
      throw new Error("product-already-rated");
    }
    next();
  } catch (error) {
    const {status, message} = handleErrors(error.message);
    return res.status(status).json({ok: false, message: message});
  }
};
