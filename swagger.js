const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My Contacts API',
        description: 'Contacts API',
    },
    host: 'cse341-898f.onrender.com',
    schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
//swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//await import('./index.js')
//});