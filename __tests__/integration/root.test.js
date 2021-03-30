import request from 'supertest';
import app from '../../src/app';

describe('root api', () => {
  it('se alguem acessar a rota raiz da api', async () => {
    expect.assertions(2);

    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toBe('EXAMPLE-TDD');
  });
});
