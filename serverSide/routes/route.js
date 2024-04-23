import express from 'express';
import { addUser, handleLogin } from '../controller/user-controller.js';

const router = express.Router();

router.post('/add', addUser);
router.post('/login', handleLogin);
// router.post('/transaction', paymentTransaction);



export default router;
