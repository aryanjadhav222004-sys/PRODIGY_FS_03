const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');

router.post('/register', (req, res) => {
  res.json({ message: 'Register endpoint' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'Login endpoint' });
});

router.post('/logout', authMiddleware, (req, res) => {
  res.json({ message: 'Logout endpoint' });
});

router.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: 'Profile endpoint', user: req.user });
});

router.put('/profile', authMiddleware, (req, res) => {
  res.json({ message: 'Update profile endpoint' });
});

module.exports = router;