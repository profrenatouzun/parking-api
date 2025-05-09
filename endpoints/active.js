// endpoints/active.js
const express = require('express');
const router = express.Router();
const parkingDB = require('../database');

/**
 * @swagger
 * /report:
 *   get:
 *     summary: Listar Veículos no estacionamento
 *     responses:
 *       200:
 *         description: Retorna o lista de veículos
 */
router.get('/active', (req, res) => {
  // #swagger.summary = 'Listar Veículos no estacionamento'
  res.status(200).json(parkingDB.vehicles);
});

module.exports = router;