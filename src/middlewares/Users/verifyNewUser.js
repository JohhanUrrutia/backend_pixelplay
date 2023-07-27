import {userNotTaken} from "../../models/UserModels/createUser/verifyUsername.js";
import {handleErrors} from "../../helpers/handleErrors.js";

export const verifyNewUser = async (req, res, next) => {
  try {
    const {userName, firstName, lastName, email, password, address} = req.body;
    if (
      !userName ||
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !address
    ) {
      throw new Error("missing-fields");
    }
    const user = await userNotTaken(userName);
    if (user) {
      throw new Error("username-already-taken");
    }
    next();
  } catch (error) {
    const {status, message} = handleErrors(error.message);
    return res.status(status).json({ok: false, message: message});
  }
};
