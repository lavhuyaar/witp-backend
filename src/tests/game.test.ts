import request from 'supertest';
import app from '../app';
import db from '../db/db';

describe('GET /pokemons', () => {
  it('should return a list of pokemons', async () => {
    const res = await request(app).get('/pokemons');

    expect(res.body.pokemons.length).toBeLessThanOrEqual(5);
    expect(res.status).toBe(200);
  });
});

describe('POST /pokemon/new', () => {
  afterAll(async () => {
   await db.pokemon.delete({
      where: {
        name: 'Dummy Pokemon',
      },
    });
  });

  it('should create a pokemon data', async () => {
    const res = await request(app)
      .post('/pokemon/new')
      .send({
        name: 'Dummy Pokemon',
        image: 'www.google.com',
        PositionXLeft: 11,
        PositionXRight: 11,
        PositionYTop: 11,
        PositionYBottom: 11,
      })
      .set('Accept', 'application/json');

    expect(res.status).toBe(201);
    expect(res.body.pokemon).toBeDefined();
  });

  it('should return error when pokemon name is not mentioned', async () => {
    const res = await request(app)
      .post('/pokemon/new')
      .send({
        name: '',
        image: 'www.google.com',
        PositionXLeft: 11,
        PositionXRight: 11,
        PositionYTop: 11,
        PositionYBottom: 11,
      })
      .set('Accept', 'application/json');

    expect(res.status).toBe(400);
    expect(res.body.pokemon).toBeUndefined();
  });

  it('should return error when pokemon image is not mentioned', async () => {
    const res = await request(app)
      .post('/pokemon/new')
      .send({
        name: 'Dummy Pokemon',
        image: '',
        PositionXLeft: 11,
        PositionXRight: 11,
        PositionYTop: 11,
        PositionYBottom: 11,
      })
      .set('Accept', 'application/json');

    expect(res.status).toBe(400);
    expect(res.body.pokemon).toBeUndefined();
  });
});

// describe('POST /pokemons/verify', async () => {
//     it('should verify whether Pokemon has ')
// })
