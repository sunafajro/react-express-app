var express = require('express');
var router = express.Router();
var db = require('../db');
const GET_LAST_POSTS = require('../db/queries/getlastposts');

router.get('/', function(req, res, next) {
  db.query(
    GET_LAST_POSTS, { replacements: { type: 12, one: 1 }, type: db.QueryTypes.SELECT }
  ).then(posts => {
    res.json({ posts });
  });
});

module.exports = router;

// const Message = db.define('calc_message', 
//   { 
//     name: Sequelize.TEXT,
//     description: Sequelize.TEXT,
//     data: Sequelize.DATE,
//     calc_messwhomtype: Sequelize.INTEGER,
//     send: Sequelize.INTEGER,
//     files: Sequelize.TEXT,
//     visible: Sequelize.INTEGER
//   },
//   {
//     timestamps: false,
//     freezeTableName: true
//   }
// );


  // Message.findAll({ 
  //   attributes: ['id', 'name', 'description', 'data', 'files'],
  //   where: 
  //     { 
  //       calc_messwhomtype: 12,
  //       send: 1,
  //       visible: 1
  //     },
  //   limit: 10,
  //   order:
  //     [ 
  //       ['id', 'DESC']
  //     ]
  // })
  //   .then(row => {
  //     console.log('Запрос строки прошел успешно');
  //     res.json({ row });
  //   })
  //   .catch(err => {
  //     console.log('Запрос не удался');
  //   });
  // });

  // console.log('Пришел запрос.');
  // db.authenticate()
  //   .then(() => {
  //     console.log('Подключение прошло успешно.');
  //     db.sync({ force: false })
  //       .then(() => {
  //         console.log('Синхронизация прошла успешно.');
 
 
    //     })
    //     .catch(err => {
    //       console.error('Синхронизация не удалась: ', err);
    //     });
    // })
    // .catch(err => {
    //   console.error('Подключение не удалось: ', err);
    // });

  // res.json([
  //   {
  //     id: 1,
  //     title: 'Sample #1 title',
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ea non, ullam unde veritatis, voluptas aut exercitationem quisquam, pariatur et qui enim illo perspiciatis minus quasi iste ad voluptatibus! Iste.'
  //   }, 
  //   {
  //     id: 2,
  //     title: "Sample #2 title",
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ea non, ullam unde veritatis, voluptas aut exercitationem quisquam, pariatur et qui enim illo perspiciatis minus quasi iste ad voluptatibus! Iste.'
  //   },
  //   {
  //     id: 3,
  //     title: "Sample #3 title",
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ea non, ullam unde veritatis, voluptas aut exercitationem quisquam, pariatur et qui enim illo perspiciatis minus quasi iste ad voluptatibus! Iste.'
  //   },
  // ]);