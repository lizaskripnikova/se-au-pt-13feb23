"use strict";

module.exports = (app) => {
  const calculatorController = require('../controllers/calculatorController');


  //Root router
  app.get("/", (req, res) => {
    res.send('MVC Structure');
  })

  //Calculator Operation
  app.get('/operation/add', (req, res) => {
    calculatorController.addNumbers(req, res);
  })
}
