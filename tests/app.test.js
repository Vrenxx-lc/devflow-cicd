const request = require('supertest');
const app = require('../src/app');

describe('API DevFlow Solutions', () => {
  test('GET / retorna a mensagem e a versão da API', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      mensagem: 'DevFlow Solutions - API no ar',
      versao: '1.0.0',
    });
  });

  test('GET /health retorna o status da API', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});