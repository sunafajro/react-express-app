var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
		{
			id: 1,
			username: 'admin',
			password: 'password'
		}, 
		{
			id: 2,
			username: 'moderator',
			password: 'password'
		}
	]);
});

module.exports = router;
