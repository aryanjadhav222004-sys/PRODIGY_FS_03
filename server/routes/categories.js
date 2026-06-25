const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all categories' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get category details' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create category (admin only)' });
});

module.exports = router;