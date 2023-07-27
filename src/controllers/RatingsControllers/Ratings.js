import {addRating} from "../../models/RatingsModels/addRating.js";
import {getRatings} from "../../models/RatingsModels/getRatings.js";
import { handleErrors } from "../../helpers/handleErrors.js";

export const setRating = async (req, res) => {
  try {
    const {rating, comment} = req.body;
    const {userId, userName} = req.body.payload;
    const {productid} = req.params;
    const setRating = addRating(userId, productid, rating, comment, userName);
    return res
      .status(200)
      .json({ok: true, message: "Rating set successfuly", setRating});
  } catch (error) {
    const {status, message} = handleErrors(error.message);
    return res.status(status).json({ok: false, message: message});
  }
};

export const allRatings = async (req, res) => {
  try {
    const {productId} = req.params;
    const ratings = await getRatings(productId);
    return res.status(200).json({ok: true, ratings});
  } catch (error) {
    const {status, message} = handleErrors(error.message);
    return res.status(status).json({ok: false, message: message});
  }
};

export const ratingControllers = {
  setRating,
  allRatings
};
