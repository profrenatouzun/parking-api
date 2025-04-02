const express = require('express');
const router = express.Router();
const parkingDB = require('../database');

/**
 * @swagger
 * /update/{plate}:
 *   put:
 *     summary: Atualizar dados de um veículo
 *     parameters:
 *       - in: path
 *         name: plate
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newPlate:
 *                 type: string
 *               newModel:
 *                 type: string
 *     responses:
 *       200:
 *         description: Dados atualizados
 *       404:
 *         description: Veículo não encontrado
 */
router.put('/update/:plate', (req, res) => {
  // #swagger.summary = 'Atualizar dados de um veículo'

  const { plate } = req.params;
  const { newPlate, newModel } = req.body;
  
  const vehicleIndex = parkingDB.vehicles.findIndex(v => v.plate === plate);
  
  if (vehicleIndex === -1) {
    return res.status(404).json({ error: "Veículo não encontrado!" });
  }

  // Atualiza os dados
  if (newPlate) parkingDB.vehicles[vehicleIndex].plate = newPlate;
  if (newModel) parkingDB.vehicles[vehicleIndex].model = newModel;

  res.status(200).json({ 
    message: "Dados atualizados!",
    vehicle: parkingDB.vehicles[vehicleIndex]
  });
});

module.exports = router;