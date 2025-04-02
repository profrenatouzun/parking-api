// endpoints/check.js
const express = require('express');
const router = express.Router();
const parkingDB = require('../database');

/**
 * @swagger
 * /check/{plate}:
 *   get:
 *     summary: Verificar se um veículo está no estacionamento
 *     parameters:
 *       - in: path
 *         name: plate
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Veículo encontrado
 *       404:
 *         description: Veículo não encontrado
 */
router.get('/check/:plate', (req, res) => {
  // #swagger.summary = Verificar se um veículo está no estacionamento

  const { plate } = req.params;
  const vehicle = parkingDB.vehicles.find(v => v.plate === plate);

  if (!vehicle) {
    return res.status(404).json({ error: "Veículo não encontrado!" });
  }

  res.status(200).json({ plate, entryTime: vehicle.entryTime });
});

module.exports = router;