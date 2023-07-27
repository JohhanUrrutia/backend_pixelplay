import bcrypt from "bcryptjs";

export const passwordHash = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(req.body.password, salt);
    req.body.passwordHashed = passwordHashed;
    next();
  } catch (error) {
    return error;
  }
};
