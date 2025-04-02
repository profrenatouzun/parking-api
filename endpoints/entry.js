// endpoints/entry.js
const express = require('express');
const router = express.Router();
const parkingDB = require('../database');

/**
 * @swagger
 * /entry:
 *   post:
 *     summary: Registrar entrada de um veículo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               plate:
 *                 type: string
 *                 example: "ABC-1234"
 *               model:
 *                 type: string
 *                 example: "Fiat Uno"
 *     responses:
 *       200:
 *         description: Veículo registrado com sucesso
 *       400:
 *         description: Estacionamento lotado
 */
router.post('/entry', (req, res) => {
      // #swagger.summary = 'Registrar entrada de um veículo'
  if (parkingDB.occupied >= parkingDB.slots) {
    return res.status(400).json({ error: "Estacionamento lotado!" });
  }

  const { plate, model } = req.body;
  const entryTime = new Date();

  parkingDB.vehicles.push({ plate, model, entryTime });
  parkingDB.occupied++;
  parkingDB.dailyReport.push({ plate, action: "ENTRY", time: entryTime });

  res.status(200).json({ message: "Veículo registrado!", plate, entryTime });
});

module.exports = router;