const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('Hello');
});

const port = 3030;

app.listen(process.env.port || port);
console.log('Web Server is listening on port ' + (process.env.PORT || port))