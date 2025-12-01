// backend/src/routes/bookings.js
const express = require('express');
const router = express.Router();
const bookingService = require('../services/bookingServices');

router.post('/', (req, res) => {
  try {
    const { userId, facilityId, startTime, endTime } = req.body;
    if (!userId || !facilityId || !startTime || !endTime) return res.status(400).json({ error: 'missing fields' });
    const booking = bookingService.createBooking({ userId, facilityId, startTime, endTime });
    return res.status(201).json(booking);
  } catch (err) {
    if (err.message === 'CONFLICT') return res.status(409).json({ error: 'slot conflict' });
    if (err.message === 'INVALID_TIME') return res.status(400).json({ error: 'invalid time range' });
    return res.status(500).json({ error: 'server error' });
  }
});

router.get('/', (req, res) => res.json(bookingService.getAll()));

router.delete('/:id', (req, res) => {
  try {
    bookingService.cancelBooking(req.params.id);
    return res.status(200).json({ ok: true });
  } catch (err) {
    if (err.code === 'NOT_FOUND' || err.message === 'NOT_FOUND') {
      return res.status(404).json({ error: 'booking not found' });
    }
    return res.status(500).json({ error: 'server error' });
  }
});

module.exports = router;
