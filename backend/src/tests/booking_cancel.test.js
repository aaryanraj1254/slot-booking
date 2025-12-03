// backend/src/tests/bookings_cancel.test.js
const request = require('supertest');
const app = require('../app');
const bookingService = require('../services/bookingServices');

describe('Bookings API - cancellation', () => {
  beforeEach(() => bookingService.clearAll());

  test('can cancel an existing booking', async () => {
    // create one
    const created = bookingService.createBooking({
      userId: 'u1',
      facilityId: 'court-1',
      startTime: '2025-12-01T10:00:00.000Z',
      endTime: '2025-12-01T11:00:00.000Z'
    });

    // delete it via API
    await request(app)
      .delete(`/bookings/${created.id}`)
      .expect(200)
      .expect(res => {
        if (!res.body.ok) throw new Error('expected ok:true');
      });

    // ensure service reports not-found now
    expect(bookingService.getById(created.id)).toBeNull();
  });

  test('deleting non-existent booking returns 404', async () => {
    await request(app)
      .delete('/bookings/9999')
      .expect(404);
  });
});
