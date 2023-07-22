const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/profile", (req, res) => {
  Controllers.userController.getUser(req, res);
});

module.exports = router;