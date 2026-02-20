const express = require('express');
const router = express.Router();
const { getAllParts, getPartById } = require('../controllers/partsController');

router.get('/', getAllParts);
router.get('/:id', getPartById);

module.exports = router;
