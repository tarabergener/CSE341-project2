const validator = require('../helpers/validate');

const saveAnimal = (req, res, next) => {
  const validationRule = {
    name: 'required|string',
    scientificName: 'required|string',
    kingdom: 'required|string',
    class: 'required|string',
    size: 'required|string',
    population: 'required|integer',
    endangered: 'required|boolean'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveAnimal
};