import express from 'express';
import { signin, signup } from '../controller/auth.controller.js';

const router = express.Router();

// Change GET to POST
router.post('/signup', signup);

router.post('/signin', signin);
export default router;
