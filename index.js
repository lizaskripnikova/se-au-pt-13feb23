const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send({
    status: true,
    data: [
      {
        id: 0,
        location: 'Melbourne',
        population: 4500000
      },
      {
        id: 1,
        location: 'Sydney',
        population: 5000000
      },
    ],
    message: 'Getting city data succesfully'
  });
});
app.listen(port, () => {
  console.log(`Example app  listening at http://localhost:${port}`);
});