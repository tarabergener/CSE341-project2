const express = require('express');

const mongodb = require('./data/database')
const app = express();

const port = process.env.PORT || 3030;

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
