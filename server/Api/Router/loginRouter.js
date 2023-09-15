
import express from 'express';
const loginRouter = express.Router();
import Form from '../../DB-Config/model/formModel.js';
import bcrypt from "bcrypt";

loginRouter.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await Form.findOne({ email }).populate('settings');
    if (!user) {
      return res.send({ success: false, message: 'Email is not Registered' });
    }
    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.send({ success: false, message: 'Invalid email or password' });
    }
    // Passwords match, send success response
    return res.send({ success: true, message: 'Login successful', user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});

export default loginRouter;