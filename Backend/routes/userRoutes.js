const express = require('express');
const router = express.Router();
const { register, login, getUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

// Register a new user
router.post('/register', register);

// Login a user
router.post('/login', login);

// Get the logged-in user's info
router.get('/me', authMiddleware, getUser);

module.exports = router;
