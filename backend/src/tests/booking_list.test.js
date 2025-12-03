// backend/src/tests/bookings_list.test.js
const request = require('supertest');
const app = require('../app');
const bookingService = require('../services/bookingServices');

describe('Bookings API - list & filters', () => {
  beforeEach(() => bookingService.clearAll());

  test('GET /bookings returns all bookings when no filter provided', async () => {
    bookingService.createBooking({
      userId: 'u1',
      facilityId: 'court-1',
      startTime: '2025-12-02T08:00:00.000Z',
      endTime: '2025-12-02T09:00:00.000Z'
    });
    bookingService.createBooking({
      userId: 'u2',
      facilityId: 'court-2',
      startTime: '2025-12-02T10:00:00.000Z',
      endTime: '2025-12-02T11:00:00.000Z'
    });

    const res = await request(app).get('/bookings').expect(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body).toHaveLength(2);
  });

  test('GET /bookings?userId=u1 returns only that user bookings', async () => {
    bookingService.createBooking({
      userId: 'u1',
      facilityId: 'court-1',
      startTime: '2025-12-02T08:00:00.000Z',
      endTime: '2025-12-02T09:00:00.000Z'
    });
    bookingService.createBooking({
      userId: 'u2',
      facilityId: 'court-1',
      startTime: '2025-12-02T09:00:00.000Z',
      endTime: '2025-12-02T10:00:00.000Z'
    });

    const res = await request(app).get('/bookings').query({ userId: 'u1' }).expect(200);
    expect(res.body.every(b => b.userId === 'u1')).toBe(true);
    expect(res.body).toHaveLength(1);
  });

  test('GET /bookings?facilityId=court-1 returns only that facility bookings', async () => {
    bookingService.createBooking({
      userId: 'u1',
      facilityId: 'court-1',
      startTime: '2025-12-02T08:00:00.000Z',
      endTime: '2025-12-02T09:00:00.000Z'
    });
    bookingService.createBooking({
      userId: 'u2',
      facilityId: 'court-2',
      startTime: '2025-12-02T09:00:00.000Z',
      endTime: '2025-12-02T10:00:00.000Z'
    });

    const res = await request(app).get('/bookings').query({ facilityId: 'court-1' }).expect(200);
    expect(res.body.every(b => b.facilityId === 'court-1')).toBe(true);
    expect(res.body).toHaveLength(1);
  });
});
