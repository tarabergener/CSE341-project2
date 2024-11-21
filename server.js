const express = require('express');
const app = express();

const port = 3030;

app.get('/', (req, res) =>{
    res.send('Hello');
});

app.use('/', require('./routes'));

app.listen(process.env.port || port);
console.log('Web Server is listening on port ' + (process.env.PORT || port))