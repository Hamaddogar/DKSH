
import express from 'express';
const allUsersRouter = express.Router();
import Developers from '../../DB-Config/model/Developer.js'


allUsersRouter.get('/alluser', async (req, res) => {
  try {
    const users = await Developers.find({});
    res.send({ success: true, users });

  } catch (error) {
    console.error('Error retrieving user data:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});


export default allUsersRouter;