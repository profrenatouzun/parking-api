const express = require('express');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const config = require('./config.json');

const app = express();
app.use(express.json());

// Configuração do CORS
app.use(cors());	// Allow Everithing

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

app.listen(config.listenToPort, () => {
  console.log(`API rodando em ${config.apiUrl}`);
  console.log(`Documentação: ${config.swaggerUrl}`);
});