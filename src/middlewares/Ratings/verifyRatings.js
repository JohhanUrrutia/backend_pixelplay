import {handleErrors} from "../../helpers/handleErrors.js";

const get = (req, res, next) => {
  try {
    const {productid} = req.params;
    if (!productid) {
      throw new Error("missing-fields");
    }
    next();
  } catch (error) {
    const {status, message} = handleErrors(error.message);
    return res.status(status).json({ok: false, message: message});
  }
};

const post = (req, res, next) => {
  try {
    const {rating, comment} = req.body;
    const {productid} = req.params;
    const {userId, userName} = req.body.payload;
    if (!userId || !productid || !rating || !comment || !userName) {
      throw new Error("missing-fields");
    }
    next();
  } catch (error) {
    const {status, message} = handleErrors(error.message);
    return res.status(status).json({ok: false, message: message});
  }
};

const Delete = (req, res, next) => {
  try {
    const {ratingId} = req.body;
    if (!ratingId) {
      throw new Error("missing-fields");
    }
    next();
  } catch (error) {
    const {status, message} = handleErrors(error.message);
    return res.status(status).json({ok: false, message: message});
  }
};

export const verifyRatings = {
  get,
  post,
  Delete,
};
