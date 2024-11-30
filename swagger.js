const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Animals Api',
        description: 'Animals Api'
    },
    host: 'cse341-project2-jpcc.onrender.com',
    schemes: [ 
        'https'
    ]
};

const outputFile = './swagger.json';
const endpointsFile = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFile, doc);