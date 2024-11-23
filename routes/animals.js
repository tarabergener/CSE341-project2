const express = require('express');
const router = express.Router();

const animalsController = require('../controllers/animals');

router.get('/', animalsController.getAll);

router.get('/:id', animalsController.getSingle);

module.exports = router;