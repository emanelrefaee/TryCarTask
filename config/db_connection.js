var mysql=require('mysql');
var connectionPool=mysql.createPool({
   host:'localhost',
   user:'root',
   password:'qwe@1234567',
   database:'trycartask',
   debug:false
});


module.exports=connectionPool;