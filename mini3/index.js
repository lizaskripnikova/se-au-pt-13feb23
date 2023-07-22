let express = require("express");
let app = express();
let dbConnect = require("./dbConnect");
dbConnect.connectMysql()


const port = process.env.PORT || 8080;
app.use(express.json());

//Set Router
const weatherRouters = require('./routers/weatherRouters')
app.use('/api/weather',weatherRouters);

//Set Router for user
const userRouter = require('./routers/userRouter')
app.use('/api/user',userRouter);


app.listen(port, () => {
  console.log("Listening on port ", port);
});
