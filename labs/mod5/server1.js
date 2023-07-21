// Slide18

// server1.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Server 1 is running!');
});

app.listen(port, () => {
  console.log(`Server 1 listening at http://localhost:${port}`);
});
