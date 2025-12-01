// backend/tests/bookings.test.js
const request = require('supertest');
const app = require('../app'); // make sure this path is correct
const bookingService = require('../services/bookingServices');

describe('Bookings API (basic)', () => {
  beforeEach(() => {
    bookingService.clearAll();
  });

  test('creates a booking successfully', async () => {
    const res = await request(app)
      .post('/bookings')
      .send({
        userId: 'u1',
        facilityId: 'court-1',
        startTime: '2025-12-01T10:00:00.000Z',
        endTime: '2025-12-01T11:00:00.000Z'
      })
      .expect(201);

    expect(res.body).toHaveProperty('id');
    expect(res.body.userId).toBe('u1');
  });

  test('rejects invalid time input', async () => {
    await request(app)
      .post('/bookings')
      .send({
        userId: 'u1',
        facilityId: 'court-1',
        startTime: 'invalid',
        endTime: '2025-12-01T11:00:00.000Z'
      })
      .expect(400);
  });

  test('prevents overlap on same facility', async () => {
    // first booking
    await request(app)
      .post('/bookings')
      .send({
        userId: 'u1',
        facilityId: 'court-1',
        startTime: '2025-12-01T10:00:00.000Z',
        endTime: '2025-12-01T11:00:00.000Z'
      })
      .expect(201);

    // overlapping booking should fail
    await request(app)
      .post('/bookings')
      .send({
        userId: 'u2',
        facilityId: 'court-1',
        startTime: '2025-12-01T10:30:00.000Z',
        endTime: '2025-12-01T11:30:00.000Z'
      })
      .expect(409);
  });
});
