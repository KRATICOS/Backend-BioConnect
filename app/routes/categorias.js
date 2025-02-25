const express = require("express");
const controller = require("../controllers/categorias");
const router = express.Router();

const path = "categorias";

router.get(`/${path}`, controller.getData);

router.get(`/${path}/:id`, controller.getSingle);

module.exports = router;
