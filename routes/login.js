var express = require('express');
var router = express.Router();
var db = require('../db');
const GET_USER_BY_CREDENTIALS = require('../db/queries/getuserbycredentials');

router.post('/', function(req, res, next) {
  const { login, pass } = req.body;
  db.query(
    GET_USER_BY_CREDENTIALS, { replacements: { login: login, pass: pass, one: 1 }, type: db.QueryTypes.SELECT }
  ).then(result => {
    res.json({ result });
  });
});

module.exports = router;