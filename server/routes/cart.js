const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');

router.get('/', authMiddleware, (req, res) => {
  res.json({ message: 'Get cart items' });
});

router.post('/', authMiddleware, (req, res) => {
  res.json({ message: 'Add to cart' });
});

router.put('/:itemId', authMiddleware, (req, res) => {
  res.json({ message: 'Update cart item' });
});

router.delete('/:itemId', authMiddleware, (req, res) => {
  res.json({ message: 'Remove from cart' });
});

module.exports = router;