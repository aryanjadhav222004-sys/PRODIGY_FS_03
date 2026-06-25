const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');

router.get('/:id', authMiddleware, (req, res) => {
  res.json({ message: 'Get user profile' });
});

router.put('/:id', authMiddleware, (req, res) => {
  res.json({ message: 'Update user profile' });
});

router.get('/:id/addresses', authMiddleware, (req, res) => {
  res.json({ message: 'Get user addresses' });
});

module.exports = router;