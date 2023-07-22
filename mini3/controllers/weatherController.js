var Models = require("../models");

const getWeather = async (req, res) => {
  const data = await Models.Weather.findAll();
  res.send({ result: 200, data: data });
};

const createWeather = async (req, res) => {
  const data = await Models.Weather.create(req);
  res.send({ result: 200, data: data });
};

const updateWeatherById = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.send({ result: 400, stauts: false, message: "id is required" });
  }
  //Update weather
  const data = await Models.Weather.update(req.body, {
    where: {
      id: id,
    },
  });

  if (!data) {
    res.send({
      result: 400,
      stauts: false,
      message: "Failed to update weather",
    });
  }
  res.send({
    result: 200,
    stauts: true,
    message: "Update weather succesfully",
  });
};

const deleteWeatherById = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.send({ result: 400, stauts: false, message: "id is required" });
  }
  //Delete weather
  await Models.Weather.destroy({
    where: {
      id: id,
    },
  });

  res.send({
    result: 200,
    stauts: true,
    message: "Deleted weather succesfully",
  });
};

module.exports = {
  getWeather,
  createWeather,
  updateWeatherById,
  deleteWeatherById,
};
