// Slide18

// server2.js
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Server 2 is running!');
});

app.listen(port, () => {
  console.log(`Server 2 listening at http://localhost:${port}`);
});
