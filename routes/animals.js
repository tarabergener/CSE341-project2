const express = require('express');
const router = express.Router();

const animalsController = require('../controllers/animals');
const validation = require('../middleware/validate');

//const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', animalsController.getAll);

router.get('/:id', animalsController.getSingle);

router.post('/', isAuthenticated, validation.saveAnimal, animalsController.createAnimal);

router.put('/:id', isAuthenticated, validation.saveAnimal, animalsController.updateAnimal);

router.delete('/:id', isAuthenticated, animalsController.deleteAnimal);

module.exports = router;