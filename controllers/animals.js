const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Users']
    const result = await mongodb.getDatabase().db().collection('animals').find();
    result.toArray().then((animals) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(animals);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Users']
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('animals').find({ _id: userId }, animal);
    result.toArray().then((animals) => {
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
    //if (!ObjectId.isValid(req.params.id)) {
    //    res.status(400).json('Must use a valid contact id to delete a contact.');
    //}
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('animals').deleteOne({ _id: userId });
    if (response.deleteCount > 0) {
        res.status(204).send();
    } 
    else {
        res.status(500).json(response.error || 'Some error has occured deleting an animal.')
    }
};


module.exports = {
    getAll,
    getSingle,
    createAnimal,
    updateAnimal,
    deleteAnimal
};