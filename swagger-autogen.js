const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger-output.json';
const endpointsFiles = ['./endpoints/*.js'];

const doc = {
  info: {
    title: 'Parking API',
    description: 'API para gerenciamento de estacionamento',
    version: '1.0.0',
  },
  host: 'localhost:3000',
  basePath: '/api/v1',
  schemes: ['http'],
};

swaggerAutogen(outputFile, endpointsFiles, doc);

