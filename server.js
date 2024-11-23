const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./data/database');
const cors = require('cors');
const { createValidation, updateValidation, deleteValidation } = require('./validation.js');
const app = express();

const port = process.env.PORT || 3030;

app.use(cors());
app.get('/', (req, res) => {
    res.send('Node js file upload rest apis');
});

//app.post('/animals', createValidation, (req, res, next) => {

//});

//app.post('/animals', updateValidation, (req, res, next) => {
    
//});

//app.post('/animals', deleteValidaiton, (req, res, next) => {
    
//});

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, 2-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    } else {
        app.listen(port, () => {console.log(`Running on port ${port}`)});
    }
});

//performs the same task as "app.listen(port, () => {console.log..." code above

//app.listen(process.env.port || port);
//console.log('Web Server is listening on port ' + (process.env.PORT || port))
