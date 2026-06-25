const express = require('express');
const router = express.Router();
const { optionalAuth } = require('../middleware/auth');

router.get('/', optionalAuth, (req, res) => {
  res.json({ message: 'Get all products' });
});

router.get('/:id', optionalAuth, (req, res) => {
  res.json({ message: 'Get product details', productId: req.params.id });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create product (admin only)' });
});

router.put('/:id', (req, res) => {
  res.json({ message: 'Update product (admin only)' });
});

router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete product (admin only)' });
});

module.exports = router;