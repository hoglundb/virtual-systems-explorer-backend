const express = require('express');
const router = express.Router();
const { getAllParts, getPartById, updatePart } = require('../controllers/partsController');

router.get('/', getAllParts);
router.get('/:id', getPartById);
router.put('/:id', updatePart);

module.exports = router;
