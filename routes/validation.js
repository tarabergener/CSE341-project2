const { check } = require('express-validator');
exports.createAnimal = [
    check('name', 'Name is required').not().isEmpty(),
    check('scientificName', 'Scientific name is required').not().isEmpty(),
    check('kingdom', 'Kingdom is required').not().isEmpty(),
    check('class', 'Class is required').not().isEmpty(),
    check('size', 'Size is required in feet (ex. 5ft)').not().isEmpty(),
    check('population', 'Population must be a number. Do not include commas.').isInt(),
    check('endangered', 'Endangered must be true or false.').isBoolean()
]

exports.updateAnimal = [
    check('name', 'Name is required').isString(),
    check('scientificName', 'Scientific name is required').isString(),
    check('kingdom', 'Kingdom is required').isString(),
    check('class', 'Class is required').isString(),
    check('size', 'Size is required in feet (ex. 5ft)').isString(),
    check('population', 'Population must be a number. Do not include commas.').isInt(),
    check('endangered', 'Endangered must be true or false.').isBoolean()
]

exports.deleteAnimal = [
    
]