const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.weatherController.getWeather(req, res);
});

router.post("/create", (req, res) => {
  Controllers.weatherController.createWeather(req.body, res);
});

router.put("/update/:id", (req, res) => {
  Controllers.weatherController.updateWeatherById(req, res);
});

router.delete("/delete/:id", (req, res) => {
    Controllers.weatherController.deleteWeatherById(req, res);
  });

module.exports = router;
