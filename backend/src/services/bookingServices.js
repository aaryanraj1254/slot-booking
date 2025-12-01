// backend/src/services/bookingService.js
// Simple in-memory booking store used for tests & early dev

const bookings = []; // { id, userId, facilityId, startTime, endTime }
let nextId = 1;

function isOverlap(aStart, aEnd, bStart, bEnd) {
  return !(aEnd <= bStart || aStart >= bEnd);
}


function createBooking({ userId, facilityId, startTime, endTime }) {
  const s = new Date(startTime).getTime();
  const e = new Date(endTime).getTime();

  if (isNaN(s) || isNaN(e) || s >= e) {
    throw new Error('INVALID_TIME');
  }

  // check conflict for same facility
  const conflict = bookings.find(b =>
    b.facilityId === facilityId &&
    isOverlap(s, e, new Date(b.startTime).getTime(), new Date(b.endTime).getTime())
  );

  if (conflict) {
    throw new Error('CONFLICT');
  }

  const booking = {
    id: nextId++,
    userId,
    facilityId,
    startTime: new Date(startTime).toISOString(),
    endTime: new Date(endTime).toISOString()
  };

  bookings.push(booking);
  return booking;
}

function getAll() {
  return bookings.slice();
}

function getById(id){
  return bookings.find(b=> b.id === Number(id)) || null;
}

function cancelBooking(id) {
  const idx = bookings.findIndex(b => b.id === Number(id));
  if (idx === -1) {
    const err = new Error('NOT_FOUND');
    err.code = 'NOT_FOUND';
    throw err;
  }
  bookings.splice(idx, 1);
  return true;
}

function clearAll() {
  bookings.length = 0;
  nextId = 1;
}


module.exports = { createBooking, getAll, getById,cancelBooking,clearAll};
