var session = require('express-session');
var sessionSequelize = require('connect-session-sequelize');

const SequelizeStore = sessionSequelize(session.Store);

module.exports = function ({app, db}) {
  sequelize = db.sequelize;
  const sessionStore = new SequelizeStore({
    db: sequelize,
    table: 'Session',
    checkExpirationInterval: 15 * 60 * 1000,
    expiration: 7 * 24 * 60 * 60 * 1000
  });

  app.use(session({
    secret: 'qa12ws34ed56rf78tg90yh',
    resave: false,
    saveUninitialized: true,
    store: sessionStore
  }));
}
