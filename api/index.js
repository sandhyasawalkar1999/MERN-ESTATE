import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user_Route.js'; // Correct import
dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use('/api/user', userRouter); // Use the correct router variable

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});
