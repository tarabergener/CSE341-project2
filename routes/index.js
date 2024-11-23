const express = require('express');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.use('/animals', require('./animals'));

module.exports = router;