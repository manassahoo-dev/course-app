import express from 'express';
import User from '../models/User';
import authenticate from '../middleware/authenticate';

const router = express.Router();

router.get('/me', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
