// endpoints/time.js
const express = require('express');
const router = express.Router();
const parkingDB = require('../database');

/**
 * @swagger
 * /time/{plate}:
 *   get:
 *     summary: "Tempo de permanência de um veículo"
 *     parameters:
 *       - in: path
 *         name: plate
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tempo calculado
 *       404:
 *         description: Veículo não encontrado
 */
router.get('/time/:plate', (req, res) => {
      // #swagger.summary = 'Tempo de permanência de um veículo'

  const { plate } = req.params;
  const vehicle = parkingDB.vehicles.find(v => v.plate === plate);

  if (!vehicle) {
    return res.status(404).json({ error: "Veículo não encontrado!" });
  }

  const currentTime = new Date();
  const parkedTime = (currentTime - vehicle.entryTime) / (1000 * 60); // Tempo em minutos

  res.status(200).json({ plate, parkedTime });
});

module.exports = router;