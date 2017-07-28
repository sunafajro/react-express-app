const Sequelize = require('sequelize');

const db = new Sequelize('langschool', 'root', 'cvthnb_YTN', 
  {
    host: 'localhost', 
    dialect: 'mysql' 
  }
);

module.exports = function () {
  return new Promise((success, fail) => {
    db.authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
        return success(db);
      })
      .catch(err => {
        console.error('Unable to connect to the database.');
        return fail(err);
      });
  });
}