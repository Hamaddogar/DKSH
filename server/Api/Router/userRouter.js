import express from 'express';
const userRouter = express.Router();
import saveFormData from '../formRouter.js';

userRouter.post('/signup', saveFormData);

export default userRouter;