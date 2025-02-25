const express = require("express");
const controller = require("../controllers/favoritos");
const router = express.Router();

const path = "favoritos";

router.get(`/${path}/:usuario_id`, controller.obtenerFavoritos);

router.post(`/${path}/proveedor`, controller.agregarProveedorFavorito);

router.post(`/${path}/producto`, controller.agregarProductoFavorito);

router.delete(`/${path}/proveedor`, controller.eliminarProveedorFavorito);

router.delete(`/${path}/producto`, controller.eliminarProductoFavorito);

module.exports = router;
