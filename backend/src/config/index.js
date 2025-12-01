// backend/src/index.js
const app = require('./app');
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening ${PORT}`));
