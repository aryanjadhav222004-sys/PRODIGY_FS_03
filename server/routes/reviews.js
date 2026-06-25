const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');

router.post('/', authMiddleware, (req, res) => {
  res.json({ message: 'Add review' });
});

router.get('/product/:productId', (req, res) => {
  res.json({ message: 'Get product reviews' });
});

router.put('/:id', authMiddleware, (req, res) => {
  res.json({ message: 'Update review' });
});

router.delete('/:id', authMiddleware, (req, res) => {
  res.json({ message: 'Delete review' });
});

module.exports = router;