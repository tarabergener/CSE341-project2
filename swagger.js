const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Animals Api',
        description: 'Animals Api'
    },
    host: 'localhost:3030',
    schemes: [ 
        'https'
    ]
};

const outputFile = './swagger.json';
const endpointsFile = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFile, doc);