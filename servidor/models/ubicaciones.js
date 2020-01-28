const Sequelize = require("sequelize");

const db = require("../database/db");

module.exports = db.sequelize.define("ubicaciones", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  longitude: {
    type: Sequelize.STRING
  },
  latitude: {
    type: Sequelize.STRING
  }
});