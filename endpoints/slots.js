const express = require('express');
const router = express.Router();
const parkingDB = require('../database');

/**
 * @swagger
 * /slots:
 *   get:
 *     summary: Verificar vagas disponíveis
 *     responses:
 *       200:
 *         description: Retorna o total e disponível de vagas
 */
router.get('/slots', (req, res) => {
      // #swagger.summary = Verificar vagas disponíveis

  res.status(200).json({
    totalSlots: parkingDB.slots,
    available: parkingDB.slots - parkingDB.occupied,
    occupied: parkingDB.occupied
  });
});

module.exports = router;