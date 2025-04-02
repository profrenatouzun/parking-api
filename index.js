const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

const app = express();
app.use(express.json());

// Rotas
app.use('/api/v1',require('./endpoints/entry'));
app.use('/api/v1',require('./endpoints/exit'));
app.use('/api/v1',require('./endpoints/check'));
app.use('/api/v1',require('./endpoints/time'));
app.use('/api/v1',require('./endpoints/update'));
app.use('/api/v1',require('./endpoints/slots'));
app.use('/api/v1',require('./endpoints/report'));
app.use('/api/v1',require('./endpoints/cancel'));

// Swagger UI
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000');
  console.log('Documentação: http://localhost:3000/docs');
});