const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');

router.get('/', authMiddleware, (req, res) => {
  res.json({ message: 'Get wishlist' });
});

router.post('/', authMiddleware, (req, res) => {
  res.json({ message: 'Add to wishlist' });
});

router.delete('/:productId', authMiddleware, (req, res) => {
  res.json({ message: 'Remove from wishlist' });
});

module.exports = router;