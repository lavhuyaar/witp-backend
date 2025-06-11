import request from 'supertest';
import app from '../app';

describe('GET /pokemons', () => {
  test('testing route', (done) => {
    request(app).get('/pokemons').expect({ message: 'test' }).expect(200, done);
  });
});
