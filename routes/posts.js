var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json([
    {
      id: 1,
      title: 'Sample #1 title',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ea non, ullam unde veritatis, voluptas aut exercitationem quisquam, pariatur et qui enim illo perspiciatis minus quasi iste ad voluptatibus! Iste.'
    }, 
    {
      id: 2,
      title: "Sample #2 title",
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ea non, ullam unde veritatis, voluptas aut exercitationem quisquam, pariatur et qui enim illo perspiciatis minus quasi iste ad voluptatibus! Iste.'
    },
    {
      id: 3,
      title: "Sample #3 title",
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ea non, ullam unde veritatis, voluptas aut exercitationem quisquam, pariatur et qui enim illo perspiciatis minus quasi iste ad voluptatibus! Iste.'
    },
  ]);
});

module.exports = router;
