var Sequelize = require('sequelize');

module.exports = function (db) {
  newdb = {};
  newdb.Session = db.define('Session', {
    sid: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    userId: Sequelize.STRING,
    expires: Sequelize.DATE,
    data: Sequelize.TEXT
  },
  {
    engine: 'MYISAM'
  }
  );
  
  newdb.sequelize = db;

  return newdb.Session.sync({ force: false });
}
