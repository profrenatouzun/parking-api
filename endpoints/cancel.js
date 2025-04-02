const express = require('express');
const router = express.Router();
const parkingDB = require('../database');

/**
 * @swagger
 * /cancel/{plate}:
 *   delete:
 *     summary: Cancelar registro de um veículo
 *     parameters:
 *       - in: path
 *         name: plate
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Registro cancelado
 *       404:
 *         description: Veículo não encontrado
 */
router.delete('/cancel/:plate', (req, res) => {
      // #swagger.summary = Cancelar registro de um veículo

  const { plate } = req.params;
  
  const vehicleIndex = parkingDB.vehicles.findIndex(v => v.plate === plate);
  
  if (vehicleIndex === -1) {
    return res.status(404).json({ error: "Veículo não encontrado!" });
  }

  parkingDB.vehicles.splice(vehicleIndex, 1);
  parkingDB.occupied--;
  parkingDB.dailyReport.push({
    plate,
    action: "CANCELLED",
    time: new Date()
  });

  res.status(200).json({ 
    message: "Registro cancelado com sucesso!",
    plate
  });
});

module.exports = router;