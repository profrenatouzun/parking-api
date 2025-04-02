const express = require('express');
const router = express.Router();
const parkingDB = require('../database');

/**
 * @swagger
 * /report:
 *   get:
 *     summary: Gerar relatório diário
 *     responses:
 *       200:
 *         description: Retorna o balanço de movimentações
 */
router.get('/report', (req, res) => {
      // #swagger.summary = 'Gerar relatório diário'

  const today = new Date().toISOString().split('T')[0];
  
  const dailyReport = parkingDB.dailyReport.filter(record => {
    return record.time.toISOString().split('T')[0] === today;
  });

  const totalEntries = dailyReport.filter(r => r.action === "ENTRY").length;
  const totalExits = dailyReport.filter(r => r.action === "EXIT").length;
  const totalRevenue = dailyReport.reduce((sum, record) => {
    return sum + (record.parkedTime ? record.parkedTime * 0.5 : 0); // R$0.50 por minuto
  }, 0);

  res.status(200).json({
    date: today,
    totalEntries,
    totalExits,
    currentVehicles: parkingDB.vehicles.length,
    totalRevenue: `R$ ${totalRevenue.toFixed(2)}`
  });
});

module.exports = router;