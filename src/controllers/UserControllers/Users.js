import {createUser} from "../../models/UserModels/createUser/createUser.js";
import jwt from "jsonwebtoken";
import { handleErrors } from "../../helpers/handleErrors.js";
// verificar que el usuario este disponible
const newUser = async (req, res) => {
  try {
    const {userName, firstName, lastName, email, passwordHashed, address} =
      req.body;
    createUser(userName, firstName, lastName, email, passwordHashed, address);
    return res
      .status(200)
      .json({ok: true, message: "User created successfully"});
  } catch (error) {
    const {status, message} = handleErrors(error.message);
    return res.status(status).json({ok: false, message: message});
  }
};

const LoginUser = async (req, res) => {
  try {
    const {userName, id} = req.body;
    const userId = id;
    const token = jwt.sign({userName, userId}, process.env.SECRET_KEY, {
      expiresIn: "4h",
    });
    return res
      .status(200)
      .json({ok: true, message: "User logged in", token, userName, id});
  } catch (error) {
    const {status, message} = handleErrors(error.message);
    return res.status(status).json({ok: false, message: message});
  }
};

export const userControllers = {
  newUser,
  LoginUser,
};
