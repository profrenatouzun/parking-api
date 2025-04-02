// database.js
const parkingDB = {
    vehicles: [],       // Array de veículos estacionados
    slots: 50,         // Total de vagas
    occupied: 0,       // Vagas ocupadas
    dailyReport: [],   // Registro de entradas/saídas
  };
  
  module.exports = parkingDB;