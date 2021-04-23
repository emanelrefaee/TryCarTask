var express = require('express');
var router = express.Router();
var database=require('../config/db_connection');


router.get('/testConnection',(req,res,next)=>{
      if(database!=null)
      res.send('success');
      else
      res.send('fail');
});


/* GET home page. */
router.get('/', function(req, res, next) {
  var people=[
  {
    id:1,
    name:'car1',
    email:'car1@google.com'

  },
  {
    id:2,
    name:'car2',
    email:'car2@google.com'

  }
];
  res.render('index', { title: 'Try Car Demo' ,people:people});
});

module.exports = router;
