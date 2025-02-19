import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utlis/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {

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
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUSer = await User.findOne({ email });
    if (!validUSer) return next(errorHandler(404, 'user not found'));
    const validPassword = bcryptjs.compareSync(password, validUSer.password);
    if (!validPassword) return next(errorHandler(401, 'Invalid password!!'));
    const token = jwt.sign({ id: validUSer._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUSer._doc;
    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json(rest);

  }



  catch (error) {
    next(error);
  }
}

export const google = async (req, res, next) => {
  try {

    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = user._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);

    }
    else {

    }

  }
  catch (error) {
    next(error);
  }
}
