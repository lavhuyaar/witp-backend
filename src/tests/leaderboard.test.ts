import request from 'supertest';
import app from '../app';

describe('GET /leaderboard', () => {
  it('should get the top 25 leaderboard scores', async () => {
    const res = await request(app).get('/leaderboard');

    expect(res.status).toEqual(200);
    expect(res.body.users.length).toBeLessThanOrEqual(25);
  });
});

describe('POST /leaderboard', () => {
  it('should create a new user and score in leaderboard', async () => {
    const res = await request(app)
      .post('/leaderboard')
      .send({ name: 'Test User', timeTook: 140 })
      .set('Accept', 'application/json');

    expect(res.status).toEqual(201);
    expect(res.body.user.name).toEqual('Test User');
    expect(res.body.user.timeTook).toEqual(140);
  });

  it('should return 400 error if name is missing', async () => {
    const res = await request(app)
      .post('/leaderboard')
      .send({ timeTook: 140 })
      .set('Accept', 'application/json');

    expect(res.status).toBe(400);
    expect(res.body.user).toBeUndefined();
  });

  it('should return 400 error if time took is missing', async () => {
    const res = await request(app)
      .post('/leaderboard')
      .send({ name: 'Test User' })
      .set('Accept', 'application/json');

    expect(res.status).toBe(400);
    expect(res.body.user).toBeUndefined();
  });

  it('should return 400 error if time took is 0', async () => {
    const res = await request(app)
      .post('/leaderboard')
      .send({ name: 'Test User', timeTook: 0 })
      .set('Accept', 'application/json');

    expect(res.status).toBe(400);
    expect(res.body.user).toBeUndefined();
  });
});
