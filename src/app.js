const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.status(200).json({
    mensagem: 'DevFlow Solutions - API no ar',
    versao: '1.0.0',
  });
});

app.get('/health', (request, response) => {
  response.status(200).json({ status: 'ok' });
});

module.exports = app;