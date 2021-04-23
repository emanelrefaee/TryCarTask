var express=require('express');
var database=require('../config/db_connection')

var router=express.Router();


//Get All Products
router.get('/all',(req,res,next)=>
{
    if(database !=null)
      database.query('SELECT * FROM products WHERE deleted=0',(err,results)=>
      {
          if(!err)
            res.send(results);
      });

});
//
//Get All Products
router.get('/getById/:id',(req,res,next)=>
{
    if(database !=null)
      database.query("SELECT * FROM products WHERE product_id='"+req.params.id+"' ",(err,results)=>
      {
          if(!err)
            res.send(results);
      });

});

//New Product
router.post('/new',(req,res,next)=>{
  if(database !=null)
    database.query('INSERT INTO products SET ?',req.body,(err,success)=>
    {
        if(!err)
         res.send('New Product added');
         else
         res.send(err.message);

    });
});

//Delete Product (by updating its deleted flag not deleted it actually)
router.get('/delete/:id',(req,res,next)=>
{
    database.query("UPDATE products SET deleted=1 WHERE product_id='"+req.params.id+"' ",(err,results)=>
      {
          if(!err)
            res.send('Product deleted');
            else
             res.send(err.message);
      });
});

//Update Product
router.get('/edit/:id',(req,res,next)=>
{
    res.send('sssssssssss');
    database.query("UPDATE products SET deleted=0 WHERE product_id='"+req.params.id+"' ",(err,results)=>
      {
        res.send(req.params.id.toString());
          if(!err)
            res.send(results);
          else
             res.send(err.message);
      });
});

module.exports=router;