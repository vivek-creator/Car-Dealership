import express from 'express';
import { handleLogin, addUser } from '../controller/user-controller.js'; // Import both handleLogin and addUser
import authenticate from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', handleLogin); // Route for user login

// Route for user registration
router.post('/register', addUser);

// Example protected route
router.get('/protected-route', authenticate, (req, res) => {
    res.json({ message: 'This is a protected route' });
});

export default router;

// import express from 'express';
// import { addUser, handleLogin } from '../controller/user-controller.js';

// const router = express.Router();

// router.post('/add', addUser);
// router.post('/login', handleLogin);
// // router.post('/transaction', paymentTransaction);



// export default router;
