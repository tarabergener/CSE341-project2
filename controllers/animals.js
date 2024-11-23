const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = (req, res) => {
    mongodb
        .getDatabase()
        .db()
        .collection('animals')
        .find()
        .toArray((err, animals) => {
            if (err) {
                res.status(400).json({ message: err });
            }
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(animals);
    });
};

const getSingle = (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid contact id to find an animal.');
    }
    const userId = new ObjectId(req.params.id);
    mongodb
        .getDatabase()
        .db()
        .collection('animals')
        .find({ _id: userId })
        .toArray((err, animals) => {
            if (err) {
                res.status(400).json({ message: err });
            }
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(animals[0]);
    });
};

const createAnimal = async (req, res) => {
    const animal = {
        name: req.body.name,
        scientificName: req.body.scientificName,
        kingdom: req.body.kingdom,
        class: req.body.class,
        size: req.body.size,
        population: req.body.population,
        endangered: req.body.endangered
    };
    const response = await mongodb.getDatabase().db().collection('animals').insertOne(animal);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error has occured adding a new animal.')
    };
};

const updateAnimal = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid contact id when updating a contact.');
      }
    const userId = new ObjectId(req.params.id);
    const animal = {
        name: req.body.name,
        scientificName: req.body.scientificName,
        kingdom: req.body.kingdom,
        class: req.body.class,
        size: req.body.size,
        population: req.body.population,
        endangered: req.body.endangered
    };
    const response = await mongodb.getDatabase().db().collection('animals').replaceOne({ _id: userId }, animal);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error has occured updating an animal.')
    };
};

const deleteAnimal = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid contact id to delete a contact.');
    }
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('animals').remove({ _id: userId }, true);
    if (response.deleteCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error has occured deleting an animal.')
    };
};


module.exports = {
    getAll,
    getSingle,
    createAnimal,
    updateAnimal,
    deleteAnimal
};