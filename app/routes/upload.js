const express = require('express');
const controller = require('../controllers/upload');
const router = express.Router();

router.post('/', controller.upload, controller.uploadFile);  // Aquí debe ser POST a "/upload"

module.exports = router;
