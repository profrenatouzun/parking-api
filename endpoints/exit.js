// endpoints/exit.js
const express = require('express');
const router = express.Router();
const parkingDB = require('../database');

/**
 * @swagger
 * /exit/{plate}:
 *   patch:
 *     summary: Registrar saída de um veículo
 *     parameters:
 *       - in: path
 *         name: plate
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Saída registrada
 *       404:
 *         description: Veículo não encontrado
 */
router.patch('/exit/:plate', (req, res) => {
      // #swagger.summary = 'Registrar saída de um veículo'

  const { plate } = req.params;
  const vehicle = parkingDB.vehicles.find(v => v.plate === plate);

  if (!vehicle) {
    return res.status(404).json({ error: "Veículo não encontrado!" });
  }

  const exitTime = new Date();
  const parkedTime = (exitTime - vehicle.entryTime) / (1000 * 60); // Tempo em minutos

  parkingDB.vehicles = parkingDB.vehicles.filter(v => v.plate !== plate);
  parkingDB.occupied--;
  parkingDB.dailyReport.push({ plate, action: "EXIT", time: exitTime, parkedTime });

  res.status(200).json({ message: "Saída registrada!", plate, exitTime, parkedTime });
});

module.exports = router;