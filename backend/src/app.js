// backend/src/app.js
const express = require('express');
const bookingsRouter = require('./routes/bookings');

const app = express();
app.use(express.json());

// health check
app.get('/', (req, res) => res.json({ ok: true }));

// register routes
app.use('/bookings', bookingsRouter);

module.exports = app;
