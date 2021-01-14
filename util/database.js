const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-course", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;