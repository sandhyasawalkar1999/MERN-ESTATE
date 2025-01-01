import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {

  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required!' });
  }
  try {
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });

  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};
