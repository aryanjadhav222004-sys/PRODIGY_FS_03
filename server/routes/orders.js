const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');

router.post('/', authMiddleware, (req, res) => {
  res.json({ message: 'Create order' });
});

router.get('/', authMiddleware, (req, res) => {
  res.json({ message: 'Get user orders' });
});

router.get('/track/:trackingId', (req, res) => {
  res.json({ message: 'Track order', trackingId: req.params.trackingId });
});

router.get('/:id', authMiddleware, (req, res) => {
  res.json({ message: 'Get order details' });
});

module.exports = router;