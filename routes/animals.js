const express = require('express');
const router = express.Router();

const animalsController = require('../controllers/animals');

router.get('/', animalsController.getAll);

router.get('/:id', animalsController.getSingle);

router.post('/', animalsController.createAnimal);

router.put('/:id', animalsController.updateAnimal);

router.delete('/:id', animalsController.deleteAnimal);

module.exports = router;