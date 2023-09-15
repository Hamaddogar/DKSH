
import express from 'express';
const resetRouter = express.Router();
import bcrypt from "bcrypt";
import UserForgot from '../../DB-Config/model/forgotModel.js';
import Form from '../../DB-Config/model/formModel.js';
import jwt from 'jsonwebtoken';

// Middleware function for JWT verification
const verifyToken = (req, res, next) => {
  const token = req.body.token;
  if (!token) { return res.send({ success: false, message: 'No token provided' }); }
  const secretKey = 'your-secret-key'; // Replace with your own secret key
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) { return res.send({ success: false, message: err.message === "jwt expired" ? "Token is Expired" : err.message }); }
    else { next(); }
  });
};

resetRouter.post('/resetpassword', verifyToken, async (req, res) => {
  const newPassword = req.body.password;
  const token = req.body.token
  try {
    const user = await UserForgot.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (user) {
      const hash = await bcrypt.hash(newPassword, 10); // Using 10 rounds of salt
      await Form.findOneAndUpdate(
        { email: user.email },
        { password: hash }, // Update the password field with the hashed password
        { new: true } // Return the updated document
      );
      res.send({ success: true, message: 'Password Successfully Updated. Move to Login' });
    } else {
      res.send({ success: false, message: 'User not found or token expired' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
export default resetRouter;