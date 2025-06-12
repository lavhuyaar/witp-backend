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

  //Cleans up dummy data
  afterAll(async () => {
    await db.pokemon.delete({
      where: {
        name: 'Dummy Pokemon',
      },
    });
  });
});

describe('POST /pokemons/verify', () => {
  const mockedData = {
    name: 'Dummy Pokemon',
    image: 'www.dummy.com',
    PositionXLeft: 110,
    PositionXRight: 160,
    PositionYTop: 60,
    PositionYBottom: 120,
  };

  let dummyPokemonId: string;

  // Creates a dummy pokemon data first
  beforeEach(async () => {
    const res1 = await request(app).post('/pokemon/new').send(mockedData);

    // Gets the id
    dummyPokemonId = res1.body.pokemon.id;
  });

  it('should verify whether Pokemon has accurate position', async () => {
    const res = await request(app)
      .post(`/pokemon/verify/${dummyPokemonId}`)
      .send({ positionX: 120, positionY: 100 })
      .set('Accept', 'application/json');

    expect(res.status).toEqual(200);
  });

  it('should return error with wrong position', async () => {
    const res = await request(app)
      .post(`/pokemon/verify/${dummyPokemonId}`)
      .send({ positionX: 100, positionY: 10 })
      .set('Accept', 'application/json');

    expect(res.status).toEqual(400);
  });

  it('should return error with no id as params', async () => {
    const res = await request(app)
      .post(`/pokemon/verify`)
      .send({ positionX: 100, positionY: 10 })
      .set('Accept', 'application/json');

    expect(res.status).toEqual(404);
  });

  it('should return error with invalid coordinates', async () => {
    const res = await request(app)
      .post(`/pokemon/verify/${dummyPokemonId}`)
      .send({ dummyKey: 'dummyValue' })
      .set('Accept', 'application/json');

    expect(res.status).toEqual(400);
  });

  //Clears the dummy data
  afterEach(async () => {
    await db.pokemon.delete({
      where: {
        name: 'Dummy Pokemon',
      },
    });
  });
});
