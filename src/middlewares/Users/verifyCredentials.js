import {validateUser} from "../../models/UserModels/createUser/validateUser.js";
import bcrypt from "bcryptjs";
import {handleErrors} from "../../helpers/handleErrors.js";

export const verifyCredentials = async (req, res, next) => {
  try {
    const {email, password} = req.body;
    if (!email || !password) {
      throw new Error("missing-credentials");
    }
    const user = await validateUser(email);
    if (!user) {
      throw new Error("user-not-found");
    }
    const validatedPassword = await bcrypt.compare(password, user.password);
    if (!validatedPassword) {
      throw new Error("password-email-not-match");
    }
    req.body.userName = user.username;
    req.body.id = user.id;
    next();
  } catch (error) {
    console.log(error.message);
    const {status, message} = handleErrors(error.message);
    return res.status(status).json({ok: false, message: message});
  }
};
