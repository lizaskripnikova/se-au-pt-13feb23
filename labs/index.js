const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors')
const routes = require("./routers/router");

//Enable all cors for all request
app.use(cors())


routes(app); //register the route
app.listen(port, () => {
  console.log(`Example app  listening at http://localhost:${port}`);
});