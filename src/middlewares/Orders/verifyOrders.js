import { handleErrors } from "../../helpers/handleErrors.js";

const post = (req, res, next) => {
  try {
    const {userid, productid, quantity} = req.body;
    if (!userid || !productid || !quantity) {
      throw new Error("missing-fields");
    }
    next();
  } catch (error) {
   const {status, message} = handleErrors(error.message);
    return res.status(status).json({ok: false, message: message});
  }
};

const get = (req, res, next) => {
  try {
    const {userid} = req.body;
    if (!userid) {
      throw new Error("missing-fields");
    }
    next();
  } catch (error) {
   const {status, message} = handleErrors(error.message);
    return res.status(status).json({ok: false, message: message});
  }
};

export const verifyOrders = {
  post,
  get,
};
