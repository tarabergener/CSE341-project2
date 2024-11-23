const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('animals').find();
    result.toArray(). then((animals) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(animals);
    });
};

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id)
    const result = await mongodb.getDatabase().db().collection('animals').find({ _id: userId });
    result.toArray(). then((animals) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(animals[0]);
    });
};

module.exports = {
    getAll,
    getSingle
};