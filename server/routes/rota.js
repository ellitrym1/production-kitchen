const express = require("express");
const router = express.Router();

const rotaController = require("../controller/rotaController");

router.get("/", rotaController.getRota);

module.exports = router;
