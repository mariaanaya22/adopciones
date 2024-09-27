const express = require('express');
const router = express.Router();
const adoptantesController = require('../controller/adoptantes.controller');

router.post('/registrarAdo', adoptantesController.registrarAdoptante);
router.get('/disponiblesAdo', adoptantesController.listarAdoptantes);

module.exports = router;
