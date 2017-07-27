const Sequelize = require('sequelize');

const db = new Sequelize('langschool', 'root', 'cvthnb_YTN', 
  {
    host: 'localhost', 
    dialect: 'mysql' 
  }
);

module.exports = db;