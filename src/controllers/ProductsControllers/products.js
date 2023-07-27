import {addProduct} from "../../models/ProductModels/getUser/addProduct.js";
import {getUserProducts} from "../../models/ProductModels/getUser/userProducts.js";
import {allProducts} from "../../models/ProductModels/getUser/allProducts.js";
import {oneProduct} from "../../models/ProductModels/getUser/oneProduct.js";
import {deleteProduct} from "../../models/ProductModels/getUser/deleteProduct.js";
import { handleErrors } from "../../helpers/handleErrors.js";
//recordar verificar que el usuario existe al agregar producto
export const createProduct = async (req, res) => {
  try {
    const {name, description, price, category, stock, image, userId} = req.body;
    addProduct(name, description, price, category, stock, image, userId);
    return res
      .status(200)
      .json({ok: true, message: "Product created successfully"});
  } catch (error) {
    const {status, message} = handleErrors(error.message);
    return res.status(status).json({ok: false, message: message});
  }
};
//
export const UserProducts = async (req, res) => {
  try {
    const {userId} = req.body.payload;
    const userProducts = await getUserProducts(userId);
    return res.status(200).json({ok: true, data: userProducts});
  } catch (error) {
    const {status, message} = handleErrors(error.message);
    return res.status(status).json({ok: false, message: message});
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await allProducts();
    return res.status(200).json({ok: true, products});
  } catch (error) {
    const {status, message} = handleErrors(error.message);
    return res.status(status).json({ok: false, message: message});
  }
};

export const getOneProduct = async (req, res) => {
  try {
    const {id} = req.params;
    const product = await oneProduct(id);
    return res.status(200).json({ok: true, product});
  } catch (error) {
    const {status, message} = handleErrors(error.message);
    return res.status(status).json({ok: false, message: message});
  }
};

export const removeProduct = async (req, res) => {
  try {
    const {id} = req.params;
    const product = await deleteProduct(id);
    return res.status(200).json({ok: true, product});
  } catch (error) {
    const {status, message} = handleErrors(error.message);
    return res.status(status).json({ok: false, message: message});
  }
};

export const productControllers = {
  createProduct,
  UserProducts,
  getProducts,
  getOneProduct,
  removeProduct,
};
