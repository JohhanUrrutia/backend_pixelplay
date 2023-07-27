import jwt from "jsonwebtoken";
import {handleErrors} from "../../helpers/handleErrors.js";

export const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    console.log(payload);
    if (!payload) {
      throw new Error(401);
    }
    req.body.payload = payload;
    next();
  } catch (error) {
    const {status, message} = handleErrors(error.message);
    return res.status(status).json({ok: false, message: message});
  }
};
